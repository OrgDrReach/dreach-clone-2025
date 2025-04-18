import { IAddress } from "./provider.d.types";
import { IMedicalRecord } from "./provider.d.types";

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
}

export interface IPatient extends IUser {
	medicalRecords?: IMedicalRecord[];
	emergencyContacts: IEmergencyContact[];
	insurance?: IInsurance;
	appointments?: string[]; // Array of appointment IDs
	prescriptions?: string[]; // Array of prescription IDs
	bloodGroup?: EBloodGroup;
	allergies?: string[];
}

export interface IMedicalHistory {
	conditions: IMedicalCondition[];
	surgeries?: ISurgery[];
	medications?: IMedication[];
	familyHistory?: string[];
	lifestyle?: ILifestyle;
}

export interface IMedicalCondition {
	name: string;
	diagnosedDate: Date;
	status: EMedicalConditionStatus;
	notes?: string;
}

export interface ISurgery {
	name: string;
	date: Date;
	hospital: string;
	surgeon: string;
	notes?: string;
}

export interface IMedication {
	name: string;
	dosage: string;
	frequency: string;
	startDate: Date;
	endDate?: Date;
	prescribedBy: string;
}

export interface IEmergencyContact {
	name: string;
	relationship: string;
	phone: string;
	address?: IAddress;
}

export interface IInsurance {
	provider: string;
	policyNumber: string;
	validUntil: Date;
	coverageDetails?: string;
}

export interface ILifestyle {
	smoking: ESmokingStatus;
	alcohol: EAlcoholConsumption;
	exercise: EExerciseFrequency;
	diet: string[];
}

export enum EUserRole {
	PATIENT = "Patient",
	DOCTOR = "Doctor",
	ADMIN = "Admin",
	SUPERADMIN = "SuperAdmin",
	HOSPITAL = "Hospital",
	LAB = "Lab",
	NURSING = "Nursing",
	DOCTORSASSISTANT = "DoctorsAssistant",
	PHARMACEUTICAL = "Pharmaceutical",
}

export enum EUserStatus {
	ACTIVE = "Active",
	INACTIVE = "Inactive",
	SUSPENDED = "Suspended",
	PENDING = "Pending",
}

export enum EGender {
	MALE = "MALE",
	FEMALE = "FEMALE",
	OTHER = "OTHER",
	PREFER_NOT_TO_SAY = "PREFER_NOT_TO_SAY",
}

export enum EBloodGroup {
	A_POSITIVE = "A+",
	A_NEGATIVE = "A-",
	B_POSITIVE = "B+",
	B_NEGATIVE = "B-",
	O_POSITIVE = "O+",
	O_NEGATIVE = "O-",
	AB_POSITIVE = "AB+",
	AB_NEGATIVE = "AB-",
}

export enum EMedicalConditionStatus {
	ACTIVE = "ACTIVE",
	RESOLVED = "RESOLVED",
	MANAGED = "MANAGED",
	IN_TREATMENT = "IN_TREATMENT",
}

export enum ESmokingStatus {
	NEVER = "NEVER",
	FORMER = "FORMER",
	CURRENT = "CURRENT",
	OCCASIONAL = "OCCASIONAL",
}

export enum EAlcoholConsumption {
	NEVER = "NEVER",
	OCCASIONAL = "OCCASIONAL",
	MODERATE = "MODERATE",
	FREQUENT = "FREQUENT",
}

export enum EExerciseFrequency {
	SEDENTARY = "SEDENTARY",
	LIGHT = "LIGHT",
	MODERATE = "MODERATE",
	ACTIVE = "ACTIVE",
	VERY_ACTIVE = "VERY_ACTIVE",
}
