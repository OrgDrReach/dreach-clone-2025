import { IAddress } from "./provider.d.types";
import { EUserRole, EUserStatus, EGender } from "./auth.d.types";

export interface IMedicalHistory {
	conditions: string[];
	allergies: string[];
	medications: {
		name: string;
		dosage: string;
		frequency: string;
		startDate: Date;
		endDate?: Date;
	}[];
	surgeries: {
		name: string;
		date: Date;
		hospital: string;
		doctor: string;
	}[];
	familyHistory: {
		condition: string;
		relationship: string;
	}[];
}

export interface IInsurance {
	provider: string;
	policyNumber: string;
	validUntil: Date;
	coverageType: string;
	primaryHolder: boolean;
	dependents?: string[];
}

export interface IEmergencyContact {
	name: string;
	relationship: string;
	phone: string;
	address?: IAddress;
	isAuthorized: boolean;
}

export interface IHealthMetrics {
	height?: number;
	weight?: number;
	bloodGroup?: string;
	bloodPressure?: {
		systolic: number;
		diastolic: number;
		lastChecked: Date;
	};
	bloodSugar?: {
		value: number;
		type: "FASTING" | "POST_PRANDIAL";
		lastChecked: Date;
	};
}

export interface IPatientPreferences {
	preferredLanguage: string;
	communicationMode: ("EMAIL" | "SMS" | "WHATSAPP" | "CALL")[];
	appointmentReminders: boolean;
	medicationReminders: boolean;
	reportDelivery: "EMAIL" | "PHYSICAL" | "BOTH";
	preferredDoctors?: string[];
	preferredHospitals?: string[];
}

export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	dob: Date;
	gender: EGender;
	address: IAddress[];
	role: EUserRole;
	status: EUserStatus;
	profileImage?: string;
	createdAt: Date;
	updatedAt: Date;

	// Patient specific fields
	medicalHistory?: IMedicalHistory;
	insurance?: IInsurance[];
	emergencyContacts?: IEmergencyContact[];
	healthMetrics?: IHealthMetrics;
	preferences?: IPatientPreferences;

	// Additional fields for verified users
	isVerified: boolean;
	verificationDetails?: {
		documents: {
			type: string;
			number: string;
			verified: boolean;
		}[];
		lastVerified?: Date;
		verifiedBy?: string;
	};

	// Access control
	permissions?: string[];
	lastLogin?: Date;
	deviceTokens?: string[];
	notificationPreferences?: {
		email: boolean;
		push: boolean;
		sms: boolean;
	};
}

export interface IPatient extends IUser {
	medicalHistory: IMedicalHistory;
	emergencyContacts: IEmergencyContact[];
	insurance?: IInsurance[];
	healthMetrics: IHealthMetrics;
	preferences: IPatientPreferences;
	appointments?: string[]; // Array of appointment IDs
	prescriptions?: string[]; // Array of prescription IDs
	providers?: string[]; // Array of healthcare provider IDs
}
