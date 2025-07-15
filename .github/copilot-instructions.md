# CognitiveInsight.ai - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a secure, AI-augmented consulting platform built with Next.js, TypeScript, and Firebase. The platform implements zero-knowledge encryption (AES-GCM with PBKDF2) to ensure client data privacy.

## Key Technologies
- **Frontend**: React + TypeScript + Tailwind CSS
- **Framework**: Next.js with App Router
- **Backend**: Firebase (Auth, Firestore, Storage, Cloud Functions)
- **Encryption**: AES-GCM 256-bit with PBKDF2 (310,000 iterations)
- **Payments**: Stripe integration
- **Hosting**: Firebase Hosting

## Architecture Principles
1. **Zero-Knowledge**: No unencrypted sensitive data ever reaches the server
2. **Privacy-First**: All client data is encrypted client-side before storage
3. **Security**: Session timeout after 15 minutes of inactivity
4. **Separation of Concerns**: Clear separation between public, client, and admin areas

## Code Guidelines
- Use TypeScript strictly with proper type definitions
- Implement encryption/decryption utilities for sensitive data
- Follow React best practices with functional components and hooks
- Use Tailwind CSS for styling with a consistent design system
- Implement proper error handling and loading states
- Follow Firebase security rules and best practices

## File Structure
- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions, encryption, Firebase config
- `/src/types` - TypeScript type definitions
- `/src/hooks` - Custom React hooks
- `/firebase` - Firebase configuration and security rules

## Security Considerations
- Always encrypt sensitive data before storing in Firestore
- Use proper authentication checks for protected routes
- Implement proper session management and timeout
- Follow OWASP security guidelines for web applications
