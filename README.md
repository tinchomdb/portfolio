# Portfolio

A modern, responsive portfolio website built with **Angular 20** and **TypeScript**. Features a refined component architecture with smooth navigation, intersection observer-based section tracking, and a beautiful user interface.

## Overview

This portfolio showcases a professional project with the following highlights:

- **Standalone Components**: Leverages Angular's latest standalone API for cleaner architecture
- **OnPush Change Detection**: Optimized performance with `ChangeDetectionStrategy.OnPush`
- **Responsive Design**: Mobile-first SCSS styling with design tokens
- **Intersection Observer**: Automatic section tracking for smooth scrolling experience
- **Type-Safe**: Full TypeScript support with proper interfaces and models
- **Modular Structure**: Well-organized component hierarchy for maintainability

## Tech Stack

- **Angular**: v20.3.0
- **TypeScript**: v5.9.2
- **RxJS**: v7.8.0
- **SCSS**: For styling with design tokens
- **Prettier**: Code formatting

## Project Structure

```
src/app/
├── portfolio/
│   ├── components/
│   │   ├── portfolio-sidebar/     # Sidebar with navigation and social links
│   │   │   └── subcomponents/
│   │   │       ├── name-section/
│   │   │       ├── nav-menu/
│   │   │       └── social-links/
│   │   └── portfolio-content/     # Main content area
│   │       └── sections/
│   │           ├── about-section/
│   │           ├── experience-section/
│   │           └── projects-section/
│   ├── portfolio.component.ts     # Main orchestrator
│   ├── portfolio.constants.ts     # Portfolio data
│   ├── portfolio.model.ts         # TypeScript interfaces
│   └── design.tokens.scss         # Design system
├── services/
│   └── cursor.service.ts          # Cursor effects
└── components/
    └── cursor-effect/             # Visual effects component
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI 20.3.3

### Installation

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm start
```

Navigate to `http://localhost:4201/`. The application will automatically reload when you modify source files.

### Building

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized for performance.

### Running Tests

Execute unit tests with Karma:

```bash
npm test
```

Watch mode for development:

```bash
npm run watch
```

## Key Features

### Component Architecture

- **Standalone Components**: All components are standalone, reducing bundle size
- **Smart Change Detection**: OnPush strategy for optimal performance
- **Reusable Subcomponents**: Experience and project items are reusable components

### User Experience

- **Section Navigation**: Intersection observer tracks active sections during scroll
- **Smooth Interactions**: SCSS animations and transitions
- **Responsive Layout**: Adapts to all screen sizes

### Code Quality

- **Type Safety**: Comprehensive TypeScript interfaces
- **Modular Design**: Separated concerns with clear component hierarchy
- **Design Tokens**: Centralized design system for consistent styling

## Customization

### Portfolio Data

Update your portfolio content in `src/app/portfolio/portfolio.constants.ts`:

```typescript
export const PORTFOLIO_DATA = {
  /* your data */
};
export const EXPERIENCES = [
  /* your experience items */
];
export const PROJECTS = [
  /* your projects */
];
```

### Styling

Customize the design system in `src/app/portfolio/design.tokens.scss` for colors, fonts, and spacing.

## Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
