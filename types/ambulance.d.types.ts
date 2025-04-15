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
}

interface Equipment {
  id: string;
  name: string;
  quantity: number;
  lastMaintenance: Date;
}

interface AmbulanceStaff {
  id: string;
  name: string;
  role: EStaffRole;
  contact: string;
  license?: string;
}

interface AmbulanceContactInfo {
  dispatchNumber: string;
  alternateNumber?: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

export enum EAmbulanceType {
  BASIC = "BASIC",
  ADVANCED = "ADVANCED",
  CARDIAC = "CARDIAC",
  NEONATAL = "NEONATAL",
}

export enum EStaffRole {
  DRIVER = "DRIVER",
  PARAMEDIC = "PARAMEDIC",
  NURSE = "NURSE",
  DOCTOR = "DOCTOR",
}

export enum EAmbulanceStatus {
  AVAILABLE = "AVAILABLE",
  ON_DUTY = "ON_DUTY",
  MAINTENANCE = "MAINTENANCE",
  OUT_OF_SERVICE = "OUT_OF_SERVICE",
}
