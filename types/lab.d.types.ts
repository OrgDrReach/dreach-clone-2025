export interface Lab {
  id: string;
  name: string;
  address: IAddress[];
  contact: LabContactInfo;
  services: LabService[];
  operatingHours: OperatingHours;
  accreditation?: string[];
  isHomeCollection: boolean;
  status: ELabStatus;
}

interface LabService {
  id: string;
  name: string;
  category: string;
  price: number;
  turnaroundTime: string;
  description?: string;
  requiresFasting: boolean;
}

interface LabContactInfo {
  phone: string[];
  email: string;
  website?: string;
}

export enum ELabStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}
