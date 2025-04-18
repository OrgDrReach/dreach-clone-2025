import {
	IDoctor,
	EDoctorStatus,
	EClinicRole,
	EClinicPermissions,
	IClinicStaff,
	EStaffStatus,
} from "./doctor.d.types";
import { Ambulance, EAmbulanceStatus } from "./ambulance.d.types";
import {
	Hospital,
	EHospitalStatus,
	EHospitalStaffRole,
	EHospitalSpecialization,
} from "./hospital.d.types";
import { Lab, ELabStatus } from "./lab.d.types";
import { Pharmaceutical, EPharmacyStatus } from "./pharmaceutical.d.types";

export enum EProviderType {
	Doctor = "Doctor",
	Hospital = "Hospital",
	Lab = "Lab",
	Nursing = "Nursing",
	DoctorsAssistant = "DoctorsAssistant",
}

export interface IAddress {
	id: string;
	street: string;
	city: string;
	state: string;
	country: string;
	postalCode: string;
}

export interface ITimeSlot {
	startTime: string;
	endTime: string;
}

export interface IOperatingHours {
	regular: ITimeSlot;
	weekends?: ITimeSlot;
	holidays?: ITimeSlot;
	emergency?: {
		available: boolean;
		hours: ITimeSlot;
	};
	departments?: {
		[departmentId: string]: ITimeSlot;
	};
}

export interface IContactInfo {
	phone: string[];
	email: string;
	website?: string;
	emergencyContact?: string;
}

export interface IReview {
	id: string;
	userId: string;
	rating: number;
	comment?: string;
	createdAt: Date;
	departmentId?: string;
	staffId?: string;
	treatmentType?: string;
	visitType?: "INPATIENT" | "OUTPATIENT" | "EMERGENCY";
	verifiedVisit: boolean;
}

export type ProviderStatus =
	| EDoctorStatus
	| ELabStatus
	| EPharmacyStatus
	| EAmbulanceStatus
	| EStaffStatus
	| EHospitalStatus;

export interface IBaseProvider {
	id: string;
	type: EProviderType;
	name: string;
	address: IAddress[];
	contact: IContactInfo;
	operatingHours: IOperatingHours;
	rating?: number;
	reviews?: IReview[];
	isVerified: boolean;
	status: ProviderStatus;
	role?: EClinicRole | EHospitalStaffRole;
	clinicId?: string;
	permissions?: EClinicPermissions[];
	specialization?: string[] | EHospitalSpecialization[];
	departments?: string[];
	staffRole?: {
		type: "CLINIC" | "HOSPITAL";
		role: EClinicRole | EHospitalStaffRole;
	};
}

export interface IBaseStaffMember {
	id: string;
	firstName: string;
	lastName: string;
	contact: IContactInfo;
	joinDate: Date;
	status: EStaffStatus;
	qualification: string[];
	profileImage?: string;
	languages: string[];
	experience: {
		years: number;
		previousWorkplaces?: string[];
	};
	availability: {
		regularHours: IOperatingHours;
		emergencyAvailable: boolean;
		onCall: boolean;
		nextAvailableSlot?: Date;
	};
}

export interface IMedicalRecord {
	id: string;
	patientId: string;
	providerId: string;
	providerType: EProviderType;
	recordType:
		| "CONSULTATION"
		| "PRESCRIPTION"
		| "LAB_RESULT"
		| "PROCEDURE"
		| "FOLLOW_UP";
	date: Date;
	diagnosis?: string[];
	symptoms?: string[];
	prescriptions?: {
		medicine: string;
		dosage: string;
		frequency: string;
		duration: string;
		notes?: string;
	}[];
	labResults?: {
		testName: string;
		result: string;
		normalRange?: string;
		interpretation?: string;
	}[];
	vitals?: {
		bloodPressure?: string;
		temperature?: number;
		heartRate?: number;
		respiratoryRate?: number;
		oxygenSaturation?: number;
	};
	notes?: string;
	attachments?: {
		type: string;
		url: string;
		description?: string;
	}[];
	followUpDate?: Date;
	createdBy: string;
	updatedBy?: string;
	createdAt: Date;
	updatedAt?: Date;
}

export type Provider =
	| (IBaseProvider & IDoctor)
	| (IBaseProvider & Hospital)
	| (IBaseProvider & Ambulance)
	| (IBaseProvider & Lab)
	| (IBaseProvider & Pharmaceutical)
	| (IBaseProvider & IClinicStaff);
