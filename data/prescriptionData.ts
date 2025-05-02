import { IPrescription } from "@/types/doctor.d.types";
import { IPatientList } from "@/types/user.d.types";
import { EGender } from "@/types/auth.d.types";
import { EUserStatus } from "@/types/auth.d.types";

// Mock data for patient history
export const patientHistoryData: IPatientList[] = [
  {
    id: "PAT001",
    name: "John Doe",
    age: 35,
    gender: EGender.MALE,
    lastVisit: "2025-04-28",
    status: "Active",
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "john.doe@email.com",
    },
  },
  {
    id: "PAT002",
    name: "Sarah Smith",
    age: 42,
    gender: EGender.FEMALE,
    lastVisit: "2025-04-25",
    status: "Active",
    contactInfo: {
      phone: "+1 (555) 234-5678",
      email: "sarah.smith@email.com",
    },
  },
  {
    id: "PAT003",
    name: "Michael Johnson",
    age: 28,
    gender: EGender.MALE,
    lastVisit: "2025-04-20",
    status: "Inactive",
    contactInfo: {
      phone: "+1 (555) 345-6789",
      email: "michael.j@email.com",
    },
  },
  {
    id: "PAT004",
    name: "Emily Wilson",
    age: 45,
    gender: EGender.FEMALE,
    lastVisit: "2025-04-15",
    status: "Active",
    contactInfo: {
      phone: "+1 (555) 456-7890",
      email: "emily.w@email.com",
    },
  },
];

// Mock data for patient prescriptions
export const patientPrescriptionsData: Record<string, IPrescription[]> = {
  PAT001: [
    {
      id: 1,
      date: "2025-04-28",
      name: "Amoxicillin",
      patientName: "John Doe",
      dosage: "500mg",
      frequency: "3 times daily",
      disease: "Bacterial Infection",
      notes: "Take with food. Complete full course.",
      labReportRequired: false,
      status: "Active",
    },
    {
      id: 2,
      date: "2025-04-28",
      name: "Ibuprofen",
      patientName: "John Doe",
      dosage: "400mg",
      frequency: "As needed",
      disease: "Pain Management",
      notes: "Take for pain. Maximum 4 times daily.",
      labReportRequired: false,
      status: "Active",
    },
  ],
  PAT002: [
    {
      id: 3,
      date: "2025-04-25",
      name: "Metformin",
      patientName: "Sarah Smith",
      dosage: "1000mg",
      frequency: "Twice daily",
      disease: "Type 2 Diabetes",
      notes: "Take with meals.",
      labReportRequired: true,
      status: "Active",
    },
    {
      id: 4,
      date: "2025-04-25",
      name: "Lisinopril",
      patientName: "Sarah Smith",
      dosage: "10mg",
      frequency: "Once daily",
      disease: "Hypertension",
      notes: "Take in the morning.",
      labReportRequired: true,
      status: "Active",
    },
  ],
  PAT003: [
    {
      id: 5,
      date: "2025-04-20",
      name: "Ventolin Inhaler",
      patientName: "Michael Johnson",
      dosage: "2 puffs",
      frequency: "As needed",
      disease: "Asthma",
      notes: "Use before exercise if needed.",
      labReportRequired: false,
      status: "Active",
    },
  ],
  PAT004: [
    {
      id: 6,
      date: "2025-04-15",
      name: "Levothyroxine",
      patientName: "Emily Wilson",
      dosage: "75mcg",
      frequency: "Once daily",
      disease: "Hypothyroidism",
      notes: "Take on empty stomach.",
      labReportRequired: true,
      status: "Active",
    },
    {
      id: 7,
      date: "2025-04-15",
      name: "Vitamin D3",
      patientName: "Emily Wilson",
      dosage: "2000 IU",
      frequency: "Once daily",
      disease: "Vitamin D Deficiency",
      notes: "Take with food.",
      labReportRequired: false,
      status: "Active",
    },
  ],
};

// Helper function to get prescriptions by patient ID
export const getPrescriptionsByPatientId = (
  patientId: string
): IPrescription[] => {
  return patientPrescriptionsData[patientId] || [];
};

// Helper function to search patients
export const searchPatients = (searchTerm: string): IPatientList[] => {
  const lowercaseSearch = searchTerm.toLowerCase();
  return patientHistoryData.filter(
    (patient) =>
      patient.name.toLowerCase().includes(lowercaseSearch) ||
      patient.id.toLowerCase().includes(lowercaseSearch)
  );
};
