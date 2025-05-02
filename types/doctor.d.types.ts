/**
 * This file is definition types for the doctor data.
 * It provides data about doctors.
 * It is tailored to the specific needs of the project.
 */

import {
  IAddress,
  IContactInfo,
  IBaseStaffMember,
  IOperatingHours,
} from "./provider.d.types";
import { IUser } from "./user.d.types";

export interface IDoctor {
  id: string; // Unique ID
  platform_id?: string; // Platform registration ID to generate certificate
  userId?: string; // User ID
  firstName: string;
  lastName: string;
  specialization: string[];
  degree: string[];
  experience: number;
  registrationNumber: string;
  clinic?: IClinicInfo[];
  availability?: IAvailability[];
  profileImage?: string;
  isVerified: boolean;
  status: EDoctorStatus;
  consultMode: EDoctorConsultMode[];
  consultationFee?: number; // Add this optional property
  languages: string[];
  expertise?: string[];
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  ratings?: {
    average: number;
    total: number;
  };
}

export interface IClinicInfo {
  id: string;
  name: string;
  address: IAddress[];
  role: EClinicRole;
  startDate: Date;
  endDate?: Date;
  contact: IContactInfo[];
}

export interface IAvailability {
  day: EDayOfWeek[];
  slots: {
    startTime: string;
    endTime: string;
    isBooked: boolean;
  }[];
  clinicId: string;
}

export enum EDayOfWeek {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
}

export enum EDoctorStatus {
  ONLINE = "Online",
  OFFLINE = "Offline",
  BUSY = "Busy",
  ON_LEAVE = "OnLeave",
  SUSPENDED = "Suspended",
}

export enum EDoctorConsultMode {
  VIDEO = "Video",
  IN_PERSON = "InPerson",
  HOME_VISIT = "HomeVisit",
  CLINIC = "Clinic",
  HYBRID = "Hybrid",
}

// Add this new interface for featured doctors
export interface IFeaturedDoctor extends IDoctor {
  nextAvailable: string;
  availableSlots: number;
  consultationFee: number; // Make it required for featured doctors
  isBookmarked?: boolean;
  address: IAddress[];
  contact: IContactInfo[];
  featured: boolean;
  rating: number;
  totalRatings?: number;
  nextAvailableSlot?: {
    date: string;
    time: string;
  };
  languages?: string[];
}

export enum EClinicRole {
  OWNER = "Owner",
  ADMIN = "Admin",
  DOCTOR = "Doctor",
  STAFF = "Staff",
}

export enum EStaffStatus {
  ACTIVE = "ACTIVE",
  ON_LEAVE = "ON_LEAVE",
  INACTIVE = "INACTIVE",
  TERMINATED = "TERMINATED",
}

export interface IClinicStaff {
  id: string;
  clinicId: string;
  role: EClinicRole;
  permissions: EClinicPermissions[];
  joinDate: Date;
  contact: IContactInfo;
  availability: {
    regularHours: IOperatingHours;
    onCall: boolean;
  };
}

export enum EClinicPermissions {
  MANAGE_STAFF = "ManageStaff",
  MANAGE_APPOINTMENTS = "ManageAppointments",
  MANAGE_PATIENTS = "ManagePatients",
  MANAGE_BILLING = "ManageBilling",
  VIEW_REPORTS = "ViewReports",
}

export interface IReceptionist extends IClinicStaff {
  managedDoctors: string[]; // Array of doctor IDs
  appointmentManagement: {
    canSchedule: boolean;
    canReschedule: boolean;
    canCancel: boolean;
    canConfirm: boolean;
  };
}

export interface IAssistantDoctor extends IClinicStaff {
  degree: string[];
  specialization: string[];
  registrationNumber: string;
  supervisingDoctor: string; // Primary doctor's ID
  canPrescribe: boolean;
  consultationRights: {
    independent: boolean;
    supervisedOnly: boolean;
  };
}

export interface INurse extends IClinicStaff {
  certification: string[];
  specializations?: string[];
  dutyType: "FULL_TIME" | "PART_TIME" | "ON_CALL";
}

// Add interface for appointment management
export interface IAppointmentManager {
  clinicId: string;
  staffId: string;
  role: EClinicRole;
  permissions: EClinicPermissions[];
  actions: {
    lastModified: Date;
    modifiedBy: string;
    actionType: "SCHEDULE" | "RESCHEDULE" | "CANCEL" | "CONFIRM";
    appointmentId: string;
  }[];
}

export type IPrescription = {
  id: number;
  name: string;
  patientName: IUser.name;
  status?: "Active" | "Inactive" | "Pending";
  dosage: string;
  frequency: string;
  disease?: string;
  date?: string;
  notes: string;
  labReportRequired?: boolean;
};
