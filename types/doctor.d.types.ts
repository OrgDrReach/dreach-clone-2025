/**
 * This file is definition types for the doctor data.
 * It provides data about doctors.
 * It is tailored to the specific needs of the project.
 */

import { IAddress, IContactInfo, IBaseStaffMember } from "./provider.d.types";

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
}

export interface IClinicInfo {
	id: string;
	name: string;
	address: IAddress[];
	contact: IContactInfo[];
	staff?: {
		assistantDoctors?: IAssistantDoctor[];
		nurses?: INurse[];
		receptionists?: IReceptionist[];
		others?: IClinicStaff[];
	};
	departments?: string[];
	facilities?: string[];
}

export interface IAvailability {
	day: EDayOfWeek[];
	slots: ITimeSlot[];
}

export interface ITimeSlot {
	startTime: string;
	endTime: string;
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
	ONLINE = "ONLINE",
	OFFLINE = "OFFLINE",
	SUSPENDED = "SUSPENDED",
	VERIFY = "VERIFY",
	ACTIVATE = "ACTIVATE",
}

export enum EDoctorConsultMode {
	HOME_VISIT = "HOME_VISIT",
	CLINIC = "CLINIC",
	VIDEO_CONSULT = "VIDEO_CONSULT",
	HYBRID = "HYBRID",
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
	ASSISTANT_DOCTOR = "ASSISTANT_DOCTOR",
	NURSE = "NURSE",
	RECEPTIONIST = "RECEPTIONIST",
	LAB_TECHNICIAN = "LAB_TECHNICIAN",
	PHARMACY_ASSISTANT = "PHARMACY_ASSISTANT",
}

export enum EStaffStatus {
	ACTIVE = "ACTIVE",
	ON_LEAVE = "ON_LEAVE",
	INACTIVE = "INACTIVE",
	TERMINATED = "TERMINATED",
}

export interface IClinicStaff extends IBaseStaffMember {
	clinicId: string;
	role: EClinicRole;
	permissions: EClinicPermissions[];
}

export enum EClinicPermissions {
	MANAGE_APPOINTMENTS = "MANAGE_APPOINTMENTS",
	VIEW_PATIENT_RECORDS = "VIEW_PATIENT_RECORDS",
	EDIT_PATIENT_RECORDS = "EDIT_PATIENT_RECORDS",
	MANAGE_INVENTORY = "MANAGE_INVENTORY",
	MANAGE_BILLING = "MANAGE_BILLING",
	MANAGE_STAFF = "MANAGE_STAFF",
	GENERATE_REPORTS = "GENERATE_REPORTS",
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
