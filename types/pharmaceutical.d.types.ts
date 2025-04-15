export interface Pharmaceutical {
  id: string;
  name: string;
  address: IAddress[];
  contact: PharmacyContactInfo;
  license: string;
  operatingHours: OperatingHours;
  inventory: DrugInventory[];
  deliveryAvailable: boolean;
  status: EPharmacyStatus;
}

interface DrugInventory {
  id: string;
  name: string;
  genericName: string;
  manufacturer: string;
  category: string;
  price: number;
  requiresPrescription: boolean;
  inStock: boolean;
  quantity: number;
}

interface PharmacyContactInfo {
  phone: string[];
  email: string;
  website?: string;
  emergencyContact?: string;
}

export enum EPharmacyStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}
