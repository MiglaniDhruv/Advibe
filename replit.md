# Advibe Digital Marketing Agency Website

## Overview

This is a modern, responsive website for Advibe Digital Marketing Agency built with React, TypeScript, and Express. The application features a full-stack architecture with a React frontend showcasing the agency's services, pricing plans, and portfolio, backed by an Express server handling contact forms and inquiries. The design follows the Advibe brand guidelines with a pink-to-blue gradient color scheme and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React with TypeScript**: The frontend is built using React 18 with TypeScript for type safety and better developer experience. The application uses a component-based architecture with reusable UI components.

**Routing**: Client-side routing is handled by Wouter, a lightweight React router that provides declarative routing without the complexity of React Router.

**State Management**: The application uses React Query (@tanstack/react-query) for server state management, providing caching, synchronization, and background updates for API calls.

**UI Framework**: The interface is built with Radix UI primitives and shadcn/ui components, providing accessible and customizable UI elements. Tailwind CSS is used for styling with custom CSS variables for the Advibe brand colors.

**Build System**: Vite is used as the build tool and development server, providing fast hot module replacement and optimized production builds.

### Backend Architecture

**Express Server**: The backend uses Express.js with TypeScript, providing a RESTful API for handling form submissions and potential future features.

**Storage Layer**: Currently implements an in-memory storage solution with an interface-based design that allows for easy migration to persistent storage solutions.

**API Design**: RESTful endpoints for contact forms (`/api/contact`) and inquiry submissions (`/api/inquiry`) with proper validation and error handling.

### Database Schema

**Drizzle ORM**: Uses Drizzle ORM with PostgreSQL dialect for type-safe database operations. The schema includes:

- **Users Table**: Basic user authentication structure with username and password fields
- **Contact Submissions**: Stores contact form data including name, email, phone, subject, and message
- **Inquiry Submissions**: Stores business inquiry data with additional fields for business name and plan interest

**Schema Validation**: Zod schemas are used for runtime validation of form submissions, ensuring data integrity and type safety across the application.

### External Dependencies

**Database**: Configured for PostgreSQL using Neon Database serverless connection (@neondatabase/serverless)

**UI Components**: Extensive use of Radix UI primitives for accessible components including dialogs, dropdowns, forms, and navigation elements

**Styling**: Tailwind CSS for utility-first styling with PostCSS for processing

**Form Handling**: React Hook Form with Hookform resolvers for form validation and submission

**Development Tools**: 
- Replit-specific plugins for development environment integration
- ESBuild for server-side TypeScript compilation
- TypeScript for type checking across the entire application

**Fonts**: Google Fonts integration (Inter) for modern typography

The architecture is designed for scalability with clear separation between frontend and backend concerns, making it easy to add features like user authentication, content management, or additional API endpoints as the business grows.