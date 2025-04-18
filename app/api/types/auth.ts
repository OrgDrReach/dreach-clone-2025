import { IAddress } from "@/types/provider.d.types";

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
	MALE = "Male",
	FEMALE = "Female",
	OTHER = "Other",
}

export interface GoogleUser {
	id: string;
	email: string;
	name: string;
	image?: string;
	firstName?: string;
	lastName?: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface SignupRequest extends LoginRequest {
	firstName: string;
	lastName: string;
	phone: string;
	role: EUserRole;
}

export interface AuthResponse {
	user: User;
	backendToken: {
		accessToken: string;
		refreshToken: string;
		expiresIn: number;
	};
}

export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	dob?: Date;
	gender?: EGender;
	address?: IAddress[];
	role: EUserRole;
	status: EUserStatus;
	profileImage?: string;
	isVerified?: boolean;
	providerRole?: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IAuthUser {
	id: string;
	email: string;
	phone: string;
	firstName: string;
	lastName: string;
	userType: "Patient" | "Provider";
	providerType?: "Doctor" | "Hospital" | "Lab" | "Nursing" | "DoctorsAssistant";
	isVerified: boolean;
	authProvider?: "credentials" | "google";
	createdAt: Date;
	updatedAt: Date;
}
