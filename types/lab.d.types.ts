import { IContactInfo, IAddress, IOperatingHours } from "./provider.d.types";

export enum ELabStatus {
	ACTIVE = "Active",
	INACTIVE = "Inactive",
	SUSPENDED = "Suspended",
	MAINTENANCE = "Maintenance",
}

export interface LabService {
	id: string;
	name: string;
	description: string;
	price: number;
	turnaroundTime: string;
	requiresFasting: boolean;
	homeCollection: boolean;
	reportDelivery: {
		email: boolean;
		physical: boolean;
		portal: boolean;
	};
}

interface LabContactInfo extends IContactInfo {
	emergency: string;
	whatsapp?: string;
}

export interface Lab {
	id: string;
	name: string;
	address: IAddress[];
	contact: LabContactInfo;
	services: LabService[];
	operatingHours: IOperatingHours;
	accreditation?: string[];
	isHomeCollection: boolean;
	status: ELabStatus;
	facilities: {
		equipment: string[];
		specialTests: string[];
		certifications: string[];
	};
	staff: {
		pathologists: number;
		technicians: number;
		phlebotomists: number;
	};
	insurance: {
		providers: string[];
		coverage: string[];
	};
	ratings?: {
		average: number;
		total: number;
		categories: {
			accuracy: number;
			timeliness: number;
			service: number;
		};
	};
	homeCollection: {
		available: boolean;
		radius: number; // in kilometers
		minimumAmount: number;
		slots: {
			[key: string]: {
				available: boolean;
				capacity: number;
			}[];
		};
	};
}
