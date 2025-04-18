import { IAddress, IContactInfo, IOperatingHours } from "./provider.d.types";

export enum EPharmacyStatus {
	OPEN = "Open",
	CLOSED = "Closed",
	EMERGENCY = "Emergency",
	SUSPENDED = "Suspended",
}

export enum EDeliveryMode {
	STORE_PICKUP = "StorePickup",
	HOME_DELIVERY = "HomeDelivery",
	EXPRESS_DELIVERY = "ExpressDelivery",
}

interface Medicine {
	id: string;
	name: string;
	genericName: string;
	manufacturer: string;
	category: string;
	type: string;
	price: number;
	requiresPrescription: boolean;
	inStock: boolean;
	quantity: number;
	expiryDate: Date;
	batchNumber: string;
}

interface PharmacyStaff {
	id: string;
	role: "PHARMACIST" | "ASSISTANT" | "DELIVERY";
	license?: string;
	certification: string[];
	shifts: {
		day: string;
		timing: {
			start: string;
			end: string;
		};
	}[];
}

interface PharmacyContactInfo extends IContactInfo {
	emergency: string;
	deliveryContact: string;
}

export interface Pharmaceutical {
	id: string;
	name: string;
	licenseNumber: string;
	address: IAddress[];
	contact: PharmacyContactInfo;
	operatingHours: IOperatingHours;
	status: EPharmacyStatus;
	inventory: Medicine[];
	staff: PharmacyStaff[];
	deliveryModes: EDeliveryMode[];
	facilities: {
		storage: string[];
		refrigeration: boolean;
		compounding: boolean;
		consultation: boolean;
	};
	services: {
		prescriptionFilling: boolean;
		medicineDelivery: boolean;
		consultation: boolean;
		vaccinations: boolean;
		healthScreening: boolean;
	};
	insurance: {
		providers: string[];
		coverageTypes: string[];
	};
	certifications: string[];
	ratings?: {
		average: number;
		total: number;
		categories: {
			service: number;
			availability: number;
			delivery: number;
		};
	};
	delivery: {
		radius: number;
		minimumOrder: number;
		freeDeliveryAbove: number;
		expressDeliveryCharge: number;
		estimatedTime: string;
	};
}
