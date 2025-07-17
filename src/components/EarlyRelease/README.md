# Early Access Components

This folder contains components for the early access preview page that allows users to explore the CognitiveInsight.ai concept and provide feedback during development.

## Components

### `EarlyAccessHero.tsx`
- Hero section specifically for the early access page
- Emphasizes the development status and feedback opportunity
- Uses orange color scheme to differentiate from main brand colors

### `PlatformVision.tsx`
- Grid layout showcasing the planned features and services
- Status indicators for each feature (Implemented, In Development, Planned, etc.)
- Interactive cards with hover effects

### `FeedbackForm.tsx`
- Comprehensive feedback collection form
- Includes user role, interest areas, and detailed feedback fields
- Success state handling and submission simulation
- Information panels about feedback process

### `DevelopmentRoadmap.tsx`
- Quarterly roadmap showing development phases
- Visual timeline with current and planned features
- Community-driven development messaging

### `ExploreMore.tsx`
- Links to existing pages (services, about, responsible-ai, etc.)
- Encourages deeper exploration of the platform concept
- Call-to-action for feedback and discussion

## Usage

The main early access page is located at `/early-access` and combines all these components to create a comprehensive preview experience.

## Features

- **Feedback Collection**: Structured form to gather user insights
- **Platform Overview**: Visual representation of planned features
- **Development Transparency**: Clear roadmap and status updates
- **Easy Navigation**: Links to explore existing content
- **Responsive Design**: Works across all device sizes

## Integration

These components integrate with the existing codebase by:
- Using existing UI components (Button, Input, Card)
- Linking to existing pages (services, about, contact)
- Following the same design patterns and color schemes
- Maintaining consistency with the overall brand
