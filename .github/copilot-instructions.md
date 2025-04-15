# Dr. Reach - Healthcare Platform Instructions

## Project Overview

Dr. Reach is an innovative healthcare platform that aims to transform healthcare accessibility through digital technology. The platform connects patients with medical professionals, enabling both virtual and in-person consultations while providing integrated healthcare services.

## Core Mission

- Make quality healthcare accessible to everyone regardless of location
- Simplify healthcare access through digital solutions
- Reduce healthcare costs and travel burden for patients
- Enable seamless collaboration between healthcare providers

## Technical Stack

- Frontend: Next.js, TypeScript, Tailwind CSS
- Package Manager: Yarn
- State Management: Zustand
- UI Components: Shadcn/ui
- Authentication: NextAuth.js
- Form Validation: Zod
- Animations: Framer Motion

## Key Features

### 1. Doctor Consultation System

- Video consultations (telemedicine)
- In-person clinic appointments
- Home visits
- Smart scheduling with real-time queue updates
- Doctor search with filters (specialty, location, availability)
- Doctor verification system

### 2. Provider Types

- Doctors (specialists, general practitioners)
- Hospitals
- Laboratories
- Pharmaceutical services
- Ambulance services

### 3. Appointment Management

- Real-time availability tracking
- Multi-mode consultation booking (video/in-person/home)
- Appointment rescheduling and cancellation
- Integration with payment systems

### 4. User Interface Guidelines

- Use design system components from /components/ui
- Follow Tailwind CSS class naming conventions
- Maintain dark mode compatibility
- Ensure responsive design for all screen sizes
- Use Framer Motion for smooth animations

### 5. Data Models

- Follow TypeScript interfaces defined in /types
- Use Zod schemas for form validation
- Maintain proper provider type separation (doctor, hospital, lab, etc.)
- Follow established naming conventions for consistency

### 6. State Management

- Use Zustand stores for global state
- Follow established patterns in /lib/stores
- Maintain proper type safety with TypeScript
- Use React Context for component-level state when appropriate

### 7. Code Organization

- Keep components modular and reusable
- Follow the established folder structure
- Maintain separation of concerns between UI and business logic
- Use proper TypeScript types and interfaces

### 8. Performance Considerations

- Implement proper loading states
- Use Next.js Image component for optimized images
- Implement proper error boundaries
- Follow React best practices for optimization

## Provider Verification System

Each provider type requires specific verification:

### Doctor Verification

- Medical registration validation
- Degree and specialization certificates
- Clinic/Hospital affiliation proof
- Identity verification
- Professional experience documentation

### Hospital Verification

- Registration and licensing
- Accreditation certificates
- Facility inspection reports
- Staff credentials
- Equipment certification

### Laboratory Verification

- Registration/licensing
- Equipment certification
- Staff qualifications
- Quality control certificates
- Safety compliance

### Pharmaceutical Verification

- Pharmacy licensing
- Drug handling certificates
- Storage facility documentation
- Staff qualifications
- Inventory management

### Ambulance Service Verification

- Vehicle registration
- Emergency service licensing
- Staff certifications
- Equipment certification
- Insurance documentation

## Data Management Guidelines

### Provider Data

- Secure storage of verification documents
- Service records management
- Availability scheduling
- Patient feedback tracking
- Transaction history
- Compliance records

### Patient Data

- Personal information protection
- Medical records security
- Appointment history tracking
- Prescription management
- Test results storage
- Payment records
- Insurance information handling

## Security Guidelines

1. Implement proper data encryption
2. Follow HIPAA compliance requirements
3. Use secure authentication methods
4. Protect sensitive medical data
5. Regular security audits
6. Proper error handling and logging
7. Secure file upload handling
8. Input validation and sanitization

## Development Guidelines

1. Always maintain TypeScript type safety
2. Follow the established project structure
3. Use existing UI components from the components library
4. Implement proper error handling
5. Include dark mode support in all new features
6. Write clean, maintainable code with proper comments
7. Follow the existing naming conventions
8. Ensure responsive design across all screen sizes
9. Use yarn for package management (e.g., `yarn add` instead of `npm install`)

## Key Files and Directories

- /components: Reusable UI components
- /types: TypeScript type definitions
- /lib/stores: Zustand store configurations
- /components/ui: Shadcn UI components
- /app: Next.js app router pages
- /utils: Utility functions
- /data: Mock data and constants

Remember to maintain the project's focus on accessibility, user experience, and healthcare service integration while following these technical guidelines.
