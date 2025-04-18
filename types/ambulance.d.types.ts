import { IContactInfo } from "./provider.d.types";

export interface Ambulance {
	id: string;
	serviceProvider: string;
	vehicleNumber: string;
	vehicleType: EAmbulanceType;
	equipment: Equipment[];
	staff: AmbulanceStaff[];
	contact: AmbulanceContactInfo;
	currentLocation?: Coordinates;
	status: EAmbulanceStatus;
	availability: boolean;
	lastMaintenance: Date;
	nextMaintenance: Date;
	certifications: string[];
	features: {
		oxygenSupport: boolean;
		ventilator: boolean;
		defibrillator: boolean;
		monitoring: boolean;
	};
	coverage: {
		radius: number;
		areas: string[];
	};
	emergencyResponse: {
		averageResponseTime: number;
		availableForEmergency: boolean;
		priority: number;
	};
	tracking: {
		deviceId: string;
		lastUpdated: Date;
	};
}

interface Equipment {
	name: string;
	quantity: number;
	lastMaintenance: Date;
	nextMaintenance: Date;
	status: "OPERATIONAL" | "NEEDS_MAINTENANCE" | "OUT_OF_ORDER";
}

interface AmbulanceStaff {
	id: string;
	role: "PARAMEDIC" | "EMT" | "DRIVER" | "NURSE";
	certification: string[];
	isOnDuty: boolean;
	shiftHours: {
		start: string;
		end: string;
	};
}

interface AmbulanceContactInfo extends IContactInfo {
	dispatchCenter: string;
	emergencyLine: string;
}

interface Coordinates {
	latitude: number;
	longitude: number;
}

export enum EAmbulanceType {
	BASIC = "Basic",
	ADVANCED = "Advanced",
	CARDIAC = "Cardiac",
	NEONATAL = "Neonatal",
	PATIENT_TRANSPORT = "PatientTransport",
}

export enum EStaffRole {
	DRIVER = "DRIVER",
	PARAMEDIC = "PARAMEDIC",
	NURSE = "NURSE",
	DOCTOR = "DOCTOR",
}

export enum EAmbulanceStatus {
	AVAILABLE = "Available",
	BUSY = "Busy",
	MAINTENANCE = "Maintenance",
	OUT_OF_SERVICE = "OutOfService",
}
