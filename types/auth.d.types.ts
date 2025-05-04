import { FilterState } from "./../components/page-components/doctors/search-filter/SearchAndFilters";
export enum EUserRole {
  PATIENT = "Patient",
  DOCTOR = "Doctor",
  HOSPITAL = "Hospital",
  LAB = "Lab",
  PHARMACEUTICAL = "Pharmaceutical",
  ADMIN = "Admin",
  SUPERADMIN = "SuperAdmin",
  NURSING = "Nursing",
  DOCTORSASSISTANT = "DoctorsAssistant",
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
}

export interface IAuthUser {
  id: string;
  email: string;
  phone: string;
  name: string;
  firstName?: string;
  lastName?: string;
  role: EUserRole;
  userType: "Patient" | "Provider";
  providerType?: "Doctor" | "Hospital" | "Lab" | "Nursing" | "DoctorsAssistant";
  isVerified: boolean;
  authProvider?: "credentials" | "google";
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILoginResponse {
  status: number;
  message: string;
  token?: string;
  user?: IAuthUser;
}

export interface IRegisterResponse {
  status: number;
  message: string;
  userId?: string;
}

export interface IVerifyResponse {
  status: number;
  message: string;
  token?: string;
}

export interface ApiErrorResponse {
  status: number;
  message: string;
  error?: string;
}

export interface ApiSuccessResponse<T> {
  status: number;
  message: string;
  data: T;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export interface EmailLookupResponse {
  id: string;
  userId: string;
  email: string;
  role?: EUserRole;
  status?: EUserStatus;
}
