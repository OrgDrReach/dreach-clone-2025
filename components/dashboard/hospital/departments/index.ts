import { DepartmentManagement } from "./DepartmentManagement";
import { DepartmentList } from "./DepartmentList";
import { StaffAllocation } from "./StaffAllocation";
import { ResourceManagement } from "./ResourceManagement";
import { PerformanceMetrics } from "./PerformanceMetrics";
import { EquipmentInventory } from "./EquipmentInventory";
import { SpecialtyServices } from "./SpecialtyServices";
import { DepartmentSchedules } from "./DepartmentSchedules";
import { EHospitalSpecialization } from "@/types/hospital.d.types";

export {
  DepartmentManagement,
  DepartmentList,
  StaffAllocation,
  ResourceManagement,
  PerformanceMetrics,
  EquipmentInventory,
  SpecialtyServices,
  DepartmentSchedules,
};

// Also export types that might be needed elsewhere
export interface Schedule {
  id: string;
  department: EHospitalSpecialization;
  shift: "morning" | "afternoon" | "night";
  startTime: string;
  endTime: string;
  staffCount: number;
  status: "active" | "upcoming" | "completed";
  onCallDoctor: string;
}

// Add other shared interfaces and types here