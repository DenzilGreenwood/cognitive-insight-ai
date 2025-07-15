import CryptoJS from 'crypto-js';
import { EncryptedBlob, EncryptionKeyPair } from '@/types';

// Encryption configuration
const ENCRYPTION_VERSION = '1.1.1';
const PBKDF2_ITERATIONS = 310000;
const KEY_SIZE = 256 / 32; // 256 bits = 32 bytes, CryptoJS uses word size (32 bits = 4 bytes)

/**
 * Generate a cryptographically secure random salt
 */
export function generateSalt(): string {
  return CryptoJS.lib.WordArray.random(128 / 8).toString();
}

/**
 * Generate a cryptographically secure random IV for AES-GCM
 */
export function generateIV(): string {
  return CryptoJS.lib.WordArray.random(96 / 8).toString(); // 96 bits for GCM
}

/**
 * Derive an encryption key from a passphrase using PBKDF2
 */
export function deriveKey(passphrase: string, salt: string): CryptoJS.lib.WordArray {
  return CryptoJS.PBKDF2(passphrase, salt, {
    keySize: KEY_SIZE,
    iterations: PBKDF2_ITERATIONS,
    hasher: CryptoJS.algo.SHA256
  });
}

/**
 * Encrypt data using AES-GCM with a derived key
 */
export function encryptData(data: string, passphrase: string): EncryptedBlob {
  const salt = generateSalt();
  const iv = generateIV();
  const key = deriveKey(passphrase, salt);
  
  // Since crypto-js doesn't have native GCM, we'll use AES-CTR with HMAC for authentication
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding
  });
  
  // Generate HMAC for authentication
  const hmac = CryptoJS.HmacSHA256(encrypted.toString(), key);
  const authenticatedData = encrypted.toString() + '.' + hmac.toString();
  
  return {
    data: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(authenticatedData)),
    iv,
    salt,
    version: ENCRYPTION_VERSION
  };
}

/**
 * Decrypt data using AES-GCM with a derived key
 */
export function decryptData(encryptedBlob: EncryptedBlob, passphrase: string): string {
  const { data, iv, salt, version } = encryptedBlob;
  
  if (version !== ENCRYPTION_VERSION) {
    throw new Error(`Unsupported encryption version: ${version}`);
  }
  
  const key = deriveKey(passphrase, salt);
  const authenticatedData = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(data));
  
  const [encryptedText, hmac] = authenticatedData.split('.');
  if (!encryptedText || !hmac) {
    throw new Error('Invalid encrypted data format');
  }
  
  // Verify HMAC
  const expectedHmac = CryptoJS.HmacSHA256(encryptedText, key).toString();
  if (hmac !== expectedHmac) {
    throw new Error('Data integrity check failed - possible tampering detected');
  }
  
  // Decrypt the data
  const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding
  });
  
  const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
  if (!decryptedText) {
    throw new Error('Decryption failed - invalid passphrase or corrupted data');
  }
  
  return decryptedText;
}

/**
 * Generate a recovery key pair for passphrase recovery
 */
export function generateRecoveryKeyPair(passphrase: string): EncryptionKeyPair {
  const recoveryKey = CryptoJS.lib.WordArray.random(256 / 8).toString(); // 256-bit recovery key
  const salt = generateSalt();
  
  // Encrypt the passphrase with the recovery key
  const recoveryKeyDerived = CryptoJS.PBKDF2(recoveryKey, salt, {
    keySize: KEY_SIZE,
    iterations: PBKDF2_ITERATIONS,
    hasher: CryptoJS.algo.SHA256
  });
  
  const iv = generateIV();
  const encryptedPassphrase = CryptoJS.AES.encrypt(passphrase, recoveryKeyDerived, {
    iv: CryptoJS.enc.Hex.parse(iv),
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding
  });
  
  // Add HMAC for integrity
  const hmac = CryptoJS.HmacSHA256(encryptedPassphrase.toString(), recoveryKeyDerived);
  const authenticatedEncryptedPassphrase = encryptedPassphrase.toString() + '.' + hmac.toString();
  
  return {
    encryptedPassphrase: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(authenticatedEncryptedPassphrase)) + '.' + iv,
    recoveryKey,
    salt,
    iterations: PBKDF2_ITERATIONS,
    createdAt: new Date()
  };
}

/**
 * Recover a passphrase using a recovery key
 */
export function recoverPassphrase(encryptedPassphrase: string, recoveryKey: string, salt: string): string {
  const [encryptedData, iv] = encryptedPassphrase.split('.');
  if (!encryptedData || !iv) {
    throw new Error('Invalid recovery data format');
  }
  
  const recoveryKeyDerived = CryptoJS.PBKDF2(recoveryKey, salt, {
    keySize: KEY_SIZE,
    iterations: PBKDF2_ITERATIONS,
    hasher: CryptoJS.algo.SHA256
  });
  
  const authenticatedData = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encryptedData));
  const [ciphertext, hmac] = authenticatedData.split('.');
  
  if (!ciphertext || !hmac) {
    throw new Error('Invalid encrypted passphrase format');
  }
  
  // Verify HMAC
  const expectedHmac = CryptoJS.HmacSHA256(ciphertext, recoveryKeyDerived).toString();
  if (hmac !== expectedHmac) {
    throw new Error('Recovery key integrity check failed');
  }
  
  // Decrypt the passphrase
  const decrypted = CryptoJS.AES.decrypt(ciphertext, recoveryKeyDerived, {
    iv: CryptoJS.enc.Hex.parse(iv),
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding
  });
  
  const passphrase = decrypted.toString(CryptoJS.enc.Utf8);
  if (!passphrase) {
    throw new Error('Passphrase recovery failed - invalid recovery key');
  }
  
  return passphrase;
}

/**
 * Securely store encryption key in session storage with XOR obfuscation
 */
export function storeSessionKey(key: string): void {
  const obfuscationKey = CryptoJS.lib.WordArray.random(256 / 8).toString();
  const keyBytes = CryptoJS.enc.Utf8.parse(key);
  const obfuscationBytes = CryptoJS.enc.Hex.parse(obfuscationKey);
  
  // XOR the key with the obfuscation key
  const obfuscatedKey = CryptoJS.lib.WordArray.create();
  for (let i = 0; i < keyBytes.words.length; i++) {
    obfuscatedKey.words[i] = keyBytes.words[i] ^ (obfuscationBytes.words[i] || 0);
  }
  obfuscatedKey.sigBytes = keyBytes.sigBytes;
  
  sessionStorage.setItem('enc_key', obfuscatedKey.toString());
  sessionStorage.setItem('enc_obf', obfuscationKey);
}

/**
 * Retrieve and deobfuscate encryption key from session storage
 */
export function getSessionKey(): string | null {
  const obfuscatedKey = sessionStorage.getItem('enc_key');
  const obfuscationKey = sessionStorage.getItem('enc_obf');
  
  if (!obfuscatedKey || !obfuscationKey) {
    return null;
  }
  
  try {
    const obfuscatedBytes = CryptoJS.enc.Hex.parse(obfuscatedKey);
    const obfuscationBytes = CryptoJS.enc.Hex.parse(obfuscationKey);
    
    // XOR to deobfuscate
    const keyBytes = CryptoJS.lib.WordArray.create();
    for (let i = 0; i < obfuscatedBytes.words.length; i++) {
      keyBytes.words[i] = obfuscatedBytes.words[i] ^ (obfuscationBytes.words[i] || 0);
    }
    keyBytes.sigBytes = obfuscatedBytes.sigBytes;
    
    return keyBytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Failed to retrieve session key:', error);
    return null;
  }
}

/**
 * Clear encryption key from session storage
 */
export function clearSessionKey(): void {
  sessionStorage.removeItem('enc_key');
  sessionStorage.removeItem('enc_obf');
}

/**
 * Check if a passphrase meets security requirements
 */
export function validatePassphrase(passphrase: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (passphrase.length < 12) {
    errors.push('Passphrase must be at least 12 characters long');
  }
  
  if (!/[a-z]/.test(passphrase)) {
    errors.push('Passphrase must contain at least one lowercase letter');
  }
  
  if (!/[A-Z]/.test(passphrase)) {
    errors.push('Passphrase must contain at least one uppercase letter');
  }
  
  if (!/[0-9]/.test(passphrase)) {
    errors.push('Passphrase must contain at least one number');
  }
  
  if (!/[^a-zA-Z0-9]/.test(passphrase)) {
    errors.push('Passphrase must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}
