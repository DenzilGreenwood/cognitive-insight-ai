# CognitiveInsight.ai - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a secure, AI-augmented consulting platform built with Next.js, TypeScript, and Firebase. The platform implements zero-knowledge encryption (AES-GCM with PBKDF2) to ensure client data privacy.

**Current Status**: Core foundation completed, authentication and encryption implemented, UI/UX design system established.

## Key Technologies
- **Frontend**: React + TypeScript + Tailwind CSS v4
- **Framework**: Next.js 15.4.1 with App Router and Turbopack
- **Backend**: Firebase (Auth, Firestore, Storage, Cloud Functions) - Configured
- **Encryption**: AES-GCM 256-bit with PBKDF2 (310,000 iterations) - ✅ COMPLETED
- **Payments**: Stripe integration - ✅ CONFIGURED
- **Hosting**: Firebase Hosting - Configured, not deployed

## Architecture Principles
1. **Zero-Knowledge**: No unencrypted sensitive data ever reaches the server
2. **Privacy-First**: All client data is encrypted client-side before storage
3. **Security**: Session timeout after 15 minutes of inactivity
4. **Separation of Concerns**: Clear separation between public, client, and admin areas
5. **Type Safety**: 100% TypeScript coverage with strict typing

## Current Implementation Status

### ✅ COMPLETED
- Zero-knowledge encryption system (v1.1.1)
- Authentication UI (signin/signup pages)
- Stripe payment integration
- Tailwind CSS v4 design system
- Type definitions for all data models
- Firebase configuration with fallbacks
- Build system and development environment

### 🔄 IN PROGRESS
- Firebase deployment setup
- Environment variable configuration

### ❌ PENDING
- Core application pages (/about, /services, /contact, /blog)
- Client dashboard and encrypted data management
- Admin interface
- Intake system and workflow
- Session management and booking integration
- File upload/download system

## Code Guidelines
- Use TypeScript strictly with proper type definitions
- Implement encryption/decryption utilities for sensitive data
- Follow React best practices with functional components and hooks
- Use Tailwind CSS v4 with the established design system
- Implement proper error handling and loading states
- Follow Firebase security rules and best practices
- All external links should use proper security attributes (target="_blank" rel="noopener noreferrer")

## File Structure
- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable React components (to be created)
- `/src/lib` - Utility functions, encryption, Firebase config
- `/src/types` - TypeScript type definitions
- `/src/hooks` - Custom React hooks (to be created)
- `/firebase` - Firebase configuration and security rules (to be created)

## Security Considerations
- Always encrypt sensitive data before storing in Firestore
- Use proper authentication checks for protected routes
- Implement proper session management and timeout
- Follow OWASP security guidelines for web applications
- External links (privacy policy, terms) point to myimaginaryfriends.ai domain

## Development Notes
- Development server runs on localhost:3001 (port 3000 in use)
- Build system is fully functional with Tailwind CSS v4
- All type definitions are established in `/src/types/index.ts`
- Encryption library is complete and tested
- Mock authentication is in place for development

## Next Development Priorities
1. Implement core public pages (services, about, contact)
2. Build client dashboard with encrypted data management
3. Create admin interface
4. Deploy to Firebase hosting
5. Integrate booking system (Calendly/TidyCal)
6. Add analytics and monitoring


