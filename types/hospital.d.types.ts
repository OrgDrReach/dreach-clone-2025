import { IAddress, IContactInfo, IOperatingHours } from "./provider.d.types";

export enum EHospitalStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  UNDER_MAINTENANCE = "UNDER_MAINTENANCE",
  EMERGENCY_ONLY = "EMERGENCY_ONLY"
}

export enum EHospitalStaffRole {
  PHYSICIAN = "PHYSICIAN",
  SPECIALIST = "SPECIALIST",
  RESIDENT = "RESIDENT",
  NURSE = "NURSE",
  TECHNICIAN = "TECHNICIAN",
  ADMINISTRATIVE = "ADMINISTRATIVE",
  SUPPORT = "SUPPORT"
}

export enum EHospitalPermissions {
  MANAGE_PATIENTS = "MANAGE_PATIENTS",
  MANAGE_ADMISSIONS = "MANAGE_ADMISSIONS",
  VIEW_MEDICAL_RECORDS = "VIEW_MEDICAL_RECORDS",
  EDIT_MEDICAL_RECORDS = "EDIT_MEDICAL_RECORDS",
  MANAGE_DEPARTMENTS = "MANAGE_DEPARTMENTS",
  MANAGE_FACILITIES = "MANAGE_FACILITIES",
  MANAGE_STAFF = "MANAGE_STAFF",
  MANAGE_EMERGENCY = "MANAGE_EMERGENCY"
}

// Add staff specialization enum
export enum EHospitalSpecialization {
  CARDIOLOGY = "CARDIOLOGY",
  NEUROLOGY = "NEUROLOGY",
  ORTHOPEDICS = "ORTHOPEDICS",
  PEDIATRICS = "PEDIATRICS",
  ONCOLOGY = "ONCOLOGY",
  EMERGENCY = "EMERGENCY",
  GENERAL_MEDICINE = "GENERAL_MEDICINE",
  // Add more specializations as needed
}

// Add department types
export enum EDepartmentType {
  OUTPATIENT = "OUTPATIENT",
  INPATIENT = "INPATIENT",
  EMERGENCY = "EMERGENCY",
  DIAGNOSTIC = "DIAGNOSTIC",
  SPECIALIZED = "SPECIALIZED"
}

export interface Hospital {
  id: string;
  name: string;
  address: IAddress[];
  contact: IContactInfo;
  facilities: IHospitalFacility[];
  departments: IHospitalDepartment[];
  accreditation?: string[];
  operatingHours: IOperatingHours;
  emergencyServices: boolean;
  capacity?: IHospitalCapacity;
  staff?: IHospitalStaff;
  status: EHospitalStatus;
}

export interface IHospitalStaffMember {
  id: string;
  hospitalId: string;
  firstName: string;
  lastName: string;
  role: EHospitalStaffRole;
  department?: string;
  specialization: EHospitalSpecialization[];
  qualification: string[];
  registrationNumber?: string;
  joinDate: Date;
  shifts: IHospitalShift[];
  contact: IContactInfo;
  permissions: EHospitalPermissions[];
  availability: {
    regularHours: IOperatingHours;
    emergencyAvailable: boolean;
    onCall: boolean;
    nextAvailableSlot?: Date;
  };
  consultationFee?: number;
  patientLimit?: {
    daily: number;
    current: number;
  };
  expertise?: string[];
  languages: string[];
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  experience: {
    years: number;
    previousWorkplaces?: string[];
  };
  ratings?: {
    average: number;
    total: number;
    reviews?: IStaffReview[];
  };
}

// Add staff review interface
export interface IStaffReview {
  id: string;
  patientId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  treatmentType?: string;
  anonymousReview: boolean;
}

// Add patient dashboard specific interface
export interface IPatientDashboardStaffInfo {
  id: string;
  name: string;
  role: EHospitalStaffRole;
  specialization: EHospitalSpecialization[];
  availability: {
    current: "AVAILABLE" | "BUSY" | "OFF_DUTY";
    nextSlot?: Date;
  };
  department: string;
  contactInfo: {
    extension: string;
    email?: string;
  };
  imageUrl?: string;
  quickStats: {
    totalPatients: number;
    averageRating: number;
    experienceYears: number;
  };
}

// Add report generation specific interface
export interface IStaffReportData {
  staffId: string;
  reportType: "CONSULTATION" | "PROCEDURE" | "FOLLOW_UP";
  patientId: string;
  diagnosis?: string[];
  prescriptions?: {
    medicine: string;
    dosage: string;
    duration: string;
  }[];
  notes: string;
  followUpDate?: Date;
  attachments?: {
    type: string;
    url: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
  status: "DRAFT" | "FINAL" | "AMENDED";
}

export interface IHospitalFacility {
  id: string;
  name: string;
  isAvailable: boolean;
  description?: string;
  inChargeStaffId?: string;
  location?: string;
  maintenance: {
    lastCheck: Date;
    nextScheduled: Date;
    status: "OPERATIONAL" | "UNDER_MAINTENANCE" | "OUT_OF_ORDER";
  };
}

export interface IHospitalDepartment {
  id: string;
  name: string;
  headStaffId: string;
  contactExtension?: string;
  staffCount: {
    doctors: number;
    nurses: number;
    technicians: number;
    support: number;
  };
  operatingHours?: IOperatingHours;
  location?: string;
  capacity: number;
  staffing: {
    assigned: {
      [key in EHospitalStaffRole]: {
        count: number;
        staff: string[]; // staff IDs
      };
    };
    required: {
      [key in EHospitalStaffRole]: number;
    };
  };
  stats: {
    patientsPerDay: number;
    averageWaitTime: number;
    satisfactionScore?: number;
  };
  services: {
    name: string;
    isAvailable: boolean;
    waitingTime?: number;
  }[];
}

export interface IHospitalStaff {
  medical: {
    physicians: IHospitalStaffMember[];
    specialists: IHospitalStaffMember[];
    residents: IHospitalStaffMember[];
    nurses: IHospitalStaffMember[];
  };
  technical: {
    labTechnicians: IHospitalStaffMember[];
    radiologists: IHospitalStaffMember[];
    pharmacists: IHospitalStaffMember[];
  };
  administrative: IHospitalStaffMember[];
  support: IHospitalStaffMember[];
}

export interface IHospitalShift {
  id: string;
  departmentId: string;
  shiftType: "MORNING" | "AFTERNOON" | "NIGHT" | "EMERGENCY";
  startTime: string;
  endTime: string;
  reliefStaffId?: string;
}

export interface IHospitalCapacity {
  totalBeds: number;
  availableBeds: number;
  departments: {
    [departmentId: string]: {
      total: number;
      occupied: number;
    };
  };
  emergency: {
    totalBeds: number;
    availableBeds: number;
    criticalCare: {
      total: number;
      available: number;
    };
  };
  equipment: {
    ventilators: {
      total: number;
      inUse: number;
      underMaintenance: number;
    };
    icuBeds: {
      total: number;
      available: number;
    };
    operatingRooms: {
      total: number;
      available: number;
    };
  };
}

// Add staff schedule management
export interface IStaffSchedule {
  staffId: string;
  departmentId: string;
  regularShifts: IHospitalShift[];
  emergencyShifts?: IHospitalShift[];
  leaves: {
    from: Date;
    to: Date;
    type: "VACATION" | "SICK" | "TRAINING" | "OTHER";
  }[];
  overtime?: {
    date: Date;
    hours: number;
    reason: string;
  }[];
}
