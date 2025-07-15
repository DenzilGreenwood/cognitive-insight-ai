import { User } from '@/types';

// Mock authentication functions for build-time
export async function signIn(email: string, password: string, rememberMe = false): Promise<User> {
  console.log('signIn called with:', { email, rememberMe });
  throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
}

export async function signUp(email: string, password: string, firstName: string, lastName: string): Promise<User> {
  console.log('signUp called with:', { email, firstName, lastName });
  throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
}

export async function signOutUser(): Promise<void> {
  console.log('signOutUser called');
  throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
}

export async function resetPassword(email: string): Promise<void> {
  console.log('resetPassword called with:', { email });
  throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
}

export async function getUserProfile(uid: string): Promise<User> {
  console.log('getUserProfile called with:', { uid });
  throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
}

export async function updateUserProfile(uid: string, updates: Partial<User>): Promise<void> {
  console.log('updateUserProfile called with:', { uid, updates });
  throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
}

export async function checkEmailExists(email: string): Promise<boolean> {
  console.log('checkEmailExists called with:', { email });
  return false;
}

export async function isAdmin(uid: string): Promise<boolean> {
  console.log('isAdmin called with:', { uid });
  return false;
}

export function setupAuthStateListener(callback: (user: User | null) => void): () => void {
  console.log('setupAuthStateListener called');
  // Immediately call the callback with null user
  setTimeout(() => callback(null), 0);
  // Return a no-op function
  return () => {};
}

export function getCurrentUser(): null {
  return null;
}
