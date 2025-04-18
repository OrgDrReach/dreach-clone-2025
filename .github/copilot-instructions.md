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
10. Always scan for and fix any errors in a file after making changes before moving on to other tasks
11. When working on multiple files, completely resolve all errors and issues in the current file before proceeding to other files
12. Only create new files when explicitly requested by the user or when absolutely necessary for implementing requested features
13. Do not create additional files or write code that hasn't been specifically requested
14. Before creating any new file:
    - Verify that the file creation is part of the user's explicit request
    - Check if the functionality can be implemented using existing files
    - Get user confirmation if there's any ambiguity about file creation
15. Follow the existing directory structure when creating new files
16. Remove any temporarily created files that are no longer needed

## Key Files and Directories

- /components: Reusable UI components
- /types: TypeScript type definitions
- /lib/stores: Zustand store configurations
- /components/ui: Shadcn UI components
- /app: Next.js app router pages
- /utils: Utility functions
- /data: Mock data and constants

## Documentation Guidelines

### Project Documentation Files

1. Follow these key documentation files:
   - API_DOCUMENTATION.md - Backend API integration details
   - FRONTEND_INTEGRATION.md - Frontend development guidelines
   - TYPE_SYSTEM_DOCUMENTATION.md - Type system architecture
   - Project_Requirements_Specifications.md - Project requirements
2. API Documentation (API_DOCUMENTATION.md):

   - Follow the documented API endpoints structure
   - Match the error handling patterns
   - Implement authentication as specified
   - Use the correct request/response formats

3. Frontend Integration (FRONTEND_INTEGRATION.md):

   - Follow the project structure guidelines
   - Maintain proper file organization
   - Use correct import/export patterns
   - Follow component structure guidelines
   - Use documented TypeScript interface patterns

4. Type System (TYPE_SYSTEM_DOCUMENTATION.md):

   - Use the defined core type system architecture
   - Follow provider system type definitions
   - Implement proper user management types
   - Use correct appointment management interfaces
   - Follow staff management system types
   - Match medical records system structure
   - Use defined enums for statuses and roles

5. Requirements Specifications (Project_Requirements_Specifications.md):
   - Follow functional requirements implementation
   - Meet non-functional requirements
   - Follow integration requirements
   - Implement proper data management
   - Match compliance requirements
   - Follow monitoring guidelines

### Documentation Standards

1. Keep documentation up to date with code changes
2. Follow markdown formatting standards
3. Use code blocks with proper language tags
4. Document any deviations from specifications
5. Maintain clear section hierarchy
6. Use consistent formatting
7. Include inline documentation for complex logic
8. Link related documentation sections when relevant

# Copilot Instructions for Dr. Reach Project

## Overview

Follow these guidelines when assisting with the Dr. Reach healthcare platform project to ensure consistency with project requirements and documentation.

## Documentation References

- FRONTEND_INTEGRATION.md: Frontend application organization and integration guidelines
- API_DOCUMENTATION.md: Backend API endpoints and services documentation
- TYPE_SYSTEM_DOCUMENTATION.md: Core type system and interface definitions
- Project_Requirements_Specifications.md: Project scope and technical requirements

## Core Development Guidelines

### File Structure

1. Follow the established project structure outlined in FRONTEND_INTEGRATION.md
2. Place components, hooks, services, and types in their designated directories
3. Maintain consistent file naming and organization patterns

### Component Guidelines

1. Follow the component structure from FRONTEND_INTEGRATION.md:
   - Common components in `components/common`
   - Page components in `pages` directory
   - Feature components grouped by functionality
2. Ensure components are strongly typed with TypeScript
3. Support dark mode and accessibility features

### Type System Integration

1. Utilize interfaces and types defined in TYPE_SYSTEM_DOCUMENTATION.md
2. Follow the inheritance patterns for provider and user types
3. Implement proper type checking for all API responses

### API Integration

1. Follow API endpoints documentation in API_DOCUMENTATION.md
2. Implement proper error handling for all API calls
3. Follow the authentication flow with JWT tokens
4. Use the defined service patterns for API communication

### Project Requirements Compliance

1. Implement features according to Project_Requirements_Specifications.md
2. Ensure adherence to non-functional requirements:
   - Performance metrics
   - Security guidelines
   - Accessibility standards
3. Follow specified integration requirements for third-party services

### Code Organization Rules

1. Maintain consistent import ordering:
   - External dependencies
   - Internal modules
   - Types
   - Styles
2. Follow the export patterns specified in documentation:
   - Named exports for testing
   - Default exports for components
   - Type exports
3. Use proper module resolution with @/ path aliases

### Security Guidelines

1. Follow HIPAA compliance requirements
2. Implement proper authentication checks
3. Secure sensitive data handling
4. Follow API security best practices

### Error Handling

1. Implement standardized error responses
2. Handle API errors gracefully
3. Provide user-friendly error messages
4. Log errors appropriately

### Testing Requirements

1. Write tests for components and services
2. Mock API calls in tests
3. Test error scenarios
4. Validate form submissions

## Development Workflow

1. Review relevant documentation before implementation
2. Follow type definitions for new features
3. Maintain documentation consistency
4. Follow established patterns for new code
5. Consider scalability in implementations

## Compliance

1. Ensure HIPAA compliance in all features
2. Follow data protection guidelines
3. Implement required security measures
4. Maintain audit trails where required

## Support & Maintenance

1. Keep code modular and reusable
2. Add proper documentation
3. Implement proper error logging
4. Follow TypeScript best practices
5. Consider future maintainability

# Copilot Documentation Guidelines

## Overview

Follow these guidelines when interacting with the Dr. Reach codebase. Always refer to the markdown documentation files for implementation details and requirements.

## Core Documentation Files

### Project Requirements (Project_Requirements_Specifications.md)

- Follow the defined functional requirements
- Adhere to non-functional requirements
- Implement features according to specified workflows
- Follow security and compliance guidelines
- Use specified technology stack and architecture

### API Documentation (API_DOCUMENTATION.md)

- Follow API endpoint structures
- Implement proper authentication flows
- Use correct request/response formats
- Handle errors according to documentation
- Follow security best practices
- Use documented environment variables

### Frontend Integration (FRONTEND_INTEGRATION.md)

- Follow project structure guidelines
- Use proper file naming conventions
- Follow component organization rules
- Implement proper type definitions
- Use specified dependencies
- Follow state management patterns

### Type System (TYPE_SYSTEM_DOCUMENTATION.md)

- Use documented interfaces and types
- Follow inheritance patterns
- Implement proper relationships
- Use correct enums for statuses and roles
- Follow workflow guidelines for different entities

## Implementation Guidelines

### Authentication

- Implement JWT-based authentication
- Follow token management guidelines
- Use proper security measures
- Handle token expiration correctly
- Implement refresh token mechanisms

### User Management

- Follow role-based access control
- Implement proper user flows
- Follow verification processes
- Handle user data securely
- Follow profile management guidelines

### Provider Management

- Implement provider type validation
- Follow verification workflows
- Handle scheduling correctly
- Implement proper availability checks
- Follow service integration guidelines

### Medical Records

- Implement proper data structures
- Follow privacy guidelines
- Implement secure access control
- Handle attachments correctly
- Follow record management workflows

### API Implementation

- Follow REST principles
- Implement proper validation
- Handle errors consistently
- Follow rate limiting guidelines
- Implement proper CORS

### Frontend Components

- Follow component structure
- Implement proper type checking
- Follow styling guidelines
- Implement proper state management
- Follow routing patterns

### Database Operations

- Follow schema definitions
- Implement proper relationships
- Handle migrations carefully
- Follow data validation rules
- Implement proper indexing

### Security Measures

- Follow HIPAA compliance rules
- Implement proper encryption
- Follow access control guidelines
- Handle sensitive data properly
- Implement audit logging

## Best Practices

### Code Organization

- Follow defined folder structure
- Use proper file naming
- Implement modular code
- Follow component patterns
- Use proper imports/exports

### Type Safety

- Use TypeScript consistently
- Follow interface definitions
- Implement proper validation
- Use proper type guards
- Follow generic patterns

### State Management

- Follow defined patterns
- Use proper context providers
- Implement proper reducers
- Handle side effects properly
- Follow store organization

### Testing

- Implement proper test coverage
- Follow testing patterns
- Use proper mocking
- Handle async tests properly
- Test error scenarios

### Documentation

- Follow JSDoc patterns
- Document non-obvious code
- Keep documentation updated
- Follow comment guidelines
- Document breaking changes

### Performance

- Follow optimization guidelines
- Implement proper caching
- Handle large datasets properly
- Optimize API calls
- Follow rendering best practices

## Compliance and Standards

- Follow HIPAA requirements
- Implement proper auditing
- Follow data protection rules
- Implement proper logging
- Handle sensitive data appropriately

Remember to regularly refer to the documentation when implementing features or making changes to ensure compliance with project standards and requirements.
