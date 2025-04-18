# Dr. Reach Healthcare Platform Type System Documentation

## Table of Contents

- [Core Provider Types](#core-provider-types)
- [User Management System](#user-management-system)
- [Appointment Management](#appointment-management)
- [Staff Management](#staff-management)
- [Medical Records System](#medical-records-system)
- [Supporting Types](#supporting-types)
- [Status and Role Enums](#status-and-role-enums)

## Core Provider Types

### Base Provider (`IBaseProvider`)

The foundation for all healthcare providers with common properties:

- Basic identification (id, name)
- Contact information
- Operating hours
- Verification status
- Reviews and ratings
- Address information

### Provider Types

#### 1. Doctors (`IDoctor`)

- Personal and professional details
- Specializations
- Consultation modes:
  - Video consultations
  - In-person visits
  - Home visits
- Availability scheduling
- Clinic associations
- Verification status

#### 2. Hospitals (`Hospital`)

- Department management
- Staff organization
- Facility tracking
- Bed capacity management
- Emergency services
- Accreditation information

#### 3. Labs (`Lab`)

- Testing services catalog
- Home collection options
- Result turnaround times
- Accreditation details

#### 4. Pharmaceutical Services (`Pharmaceutical`)

- Inventory management
- Prescription handling
- Delivery services
- License tracking

#### 5. Ambulance Services (`Ambulance`)

- Vehicle tracking
- Equipment inventory
- Staff assignments
- Real-time location
- Emergency response status

## User Management System

### Base User (`IUser`)

Core user properties:

- Basic user information
- Role-based access control
- Status tracking
- Profile management

### Patient (`IPatient`)

Extended user type with:

- Medical records
- Appointment history
- Emergency contacts
- Insurance information
- Medical history including:
  - Conditions
  - Surgeries
  - Medications
- Lifestyle information
- Blood group and allergies

## Appointment Management

### Appointment System (`Appointment`)

Handles:

- Schedule management
- Multiple consultation modes
- Payment processing
- Status tracking
- Provider-patient relationships

## Staff Management

### Clinical Staff (`IClinicStaff`)

- Role-based permissions
- Specialty tracking
- Availability management
- Patient load monitoring

### Hospital Staff (`IHospitalStaffMember`)

- Department assignments
- Shift management
- Specialization tracking
- Performance metrics

## Medical Records System

### Medical Records (`IMedicalRecord`)

Tracks:

- Patient consultations
- Prescriptions
- Lab results
- Procedures
- Follow-ups
- Vital measurements
- Attachments and documentation

## Supporting Types

### Common Interfaces

- Operating hours management (`IOperatingHours`)
- Address formatting (`IAddress`)
- Contact information (`IContactInfo`)
- Review systems (`IReview`)
- Payment processing
- Schedule management

## Status and Role Enums

### User Roles (`EUserRole`)

- Patient
- Doctor
- Admin
- SuperAdmin
- Hospital
- Lab
- Nursing
- DoctorsAssistant
- Pharmaceutical

### Status Enums

- `EDoctorStatus`: Online, Offline, Suspended, etc.
- `EHospitalStatus`: Active, Inactive, Under Maintenance, etc.
- `EAppointmentStatus`: Scheduled, Confirmed, Completed, etc.
- `ELabStatus`: Active, Inactive, Suspended
- `EPharmacyStatus`: Active, Inactive, Suspended

## Type Safety Features

The type system ensures:

- Complete type safety across the application
- Clear data structure definitions
- Consistent interface implementations
- Proper relationship mapping between entities
- Scalable provider management
- Comprehensive medical record tracking
- Efficient appointment scheduling
- Robust user role management

All type definitions include proper TypeScript features:

- Optional properties
- Union types
- Complex nested structures
- Proper type inheritance
- Enum-based status tracking

This documentation provides a comprehensive overview of the type system architecture used in the Dr. Reach healthcare platform. The type system is designed to ensure type safety, maintainability, and scalability of the application while properly representing the complex relationships between different healthcare entities.
