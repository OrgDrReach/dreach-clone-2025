import { IAddress, IContactInfo, IOperatingHours } from "./provider.d.types";
import { IDoctor } from "./doctor.d.types";

export enum EHospitalStatus {
	OPERATIONAL = "Operational",
	EMERGENCY_ONLY = "EmergencyOnly",
	LIMITED_SERVICE = "LimitedService",
	MAINTENANCE = "Maintenance",
	CLOSED = "Closed",
}

export enum EHospitalType {
	GENERAL = "General",
	SPECIALTY = "Specialty",
	TEACHING = "Teaching",
	CLINIC = "Clinic",
	COMMUNITY = "Community",
}

export enum EHospitalSpecialization {
	CARDIOLOGY = "Cardiology",
	ORTHOPEDICS = "Orthopedics",
	NEUROLOGY = "Neurology",
	PEDIATRICS = "Pediatrics",
	ONCOLOGY = "Oncology",
	MATERNITY = "Maternity",
	GENERAL_MEDICINE = "GeneralMedicine",
	EMERGENCY = "Emergency",
}

export enum EHospitalStaffRole {
	DOCTOR = "Doctor",
	NURSE = "Nurse",
	ADMIN = "Admin",
	RECEPTIONIST = "Receptionist",
	TECHNICIAN = "Technician",
	PHARMACIST = "Pharmacist",
}

interface Department {
	id: string;
	name: string;
	specialization: EHospitalSpecialization;
	head: string; // Doctor ID
	doctors: IDoctor[];
	operatingHours: IOperatingHours;
	facilities: string[];
	waitingTime?: number;
	capacity: {
		total: number;
		available: number;
	};
}

interface EmergencyServices {
	available: boolean;
	ambulanceCount: number;
	traumaLevel: number;
	specialitySupport: EHospitalSpecialization[];
	responseTime: number;
}

interface Facility {
	id: string;
	name: string;
	type: string;
	capacity: number;
	availability: boolean;
	lastMaintenance: Date;
	nextMaintenance: Date;
}

interface Insurance {
	provider: string;
	planTypes: string[];
	coverageDetails: string;
	status: "ACTIVE" | "INACTIVE";
}

interface HospitalStaff {
	id: string;
	role: EHospitalStaffRole;
	department?: string;
	specialization?: EHospitalSpecialization[];
	schedule: {
		shifts: {
			day: string;
			startTime: string;
			endTime: string;
		}[];
		onCall: boolean;
	};
}

export interface Hospital {
	id: string;
	name: string;
	type: EHospitalType;
	registrationNumber: string;
	address: IAddress[];
	contact: IContactInfo;
	status: EHospitalStatus;
	departments: Department[];
	emergencyServices: EmergencyServices;
	facilities: Facility[];
	staff: HospitalStaff[];
	insurance: Insurance[];
	accreditation: string[];
	specializations: EHospitalSpecialization[];
	capacity: {
		beds: {
			total: number;
			available: number;
			icu: number;
			ward: number;
		};
		operatingRooms: number;
	};
	statistics: {
		averageWaitTime: number;
		patientSatisfaction: number;
		successRate: number;
	};
	operatingHours: {
		regular: IOperatingHours;
		emergency: {
			available: boolean;
			hours: IOperatingHours;
		};
		departments: {
			[key: string]: IOperatingHours;
		};
	};
	ratings?: {
		overall: number;
		cleanliness: number;
		staffBehavior: number;
		facilities: number;
		emergency: number;
		totalReviews: number;
	};
}
