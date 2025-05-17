import { IPrescription, EPrescriptionStatus } from "@/types/doctor.d.types";
import { IPatientList } from "@/types/user.d.types";
import { EGender, EUserStatus } from "@/types/auth.d.types";

// Mock data for patient history
export const patientHistoryData: IPatientList[] = [
  {
    id: "PAT001",
    name: "John Doe",
    age: 35,
    gender: EGender.MALE,
    lastVisit: "2025-04-28",
    status: EUserStatus.ACTIVE,
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
    status: EUserStatus.ACTIVE,
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
    status: EUserStatus.INACTIVE,
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
    status: EUserStatus.ACTIVE,
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
      patientId: "PAT001",
      dosage: "500mg",
      frequency: "3 times daily",
      disease: "Bacterial Infection",
      notes: "Take with food. Complete full course.",
      labReportRequired: false,
      status: EPrescriptionStatus.ACTIVE,
    },
    {
      id: 2,
      date: "2025-04-28",
      name: "Ibuprofen",
      patientName: "John Doe",
      patientId: "PAT001",
      dosage: "400mg",
      frequency: "As needed",
      disease: "Pain Management",
      notes: "Take for pain. Maximum 4 times daily.",
      labReportRequired: false,
      status: EPrescriptionStatus.ACTIVE,
    },
  ],
  PAT002: [
    {
      id: 3,
      date: "2025-04-25",
      name: "Metformin",
      patientName: "Sarah Smith",
      patientId: "PAT002",
      dosage: "1000mg",
      frequency: "Twice daily",
      disease: "Type 2 Diabetes",
      notes: "Take with meals.",
      labReportRequired: true,
      status: EPrescriptionStatus.ACTIVE,
    },
    {
      id: 4,
      date: "2025-04-25",
      name: "Lisinopril",
      patientName: "Sarah Smith",
      patientId: "PAT002",
      dosage: "10mg",
      frequency: "Once daily",
      disease: "Hypertension",
      notes: "Take in the morning.",
      labReportRequired: true,
      status: EPrescriptionStatus.ACTIVE,
    },
  ],
  PAT003: [
    {
      id: 5,
      date: "2025-04-20",
      name: "Ventolin Inhaler",
      patientName: "Michael Johnson",
      patientId: "PAT003",
      dosage: "2 puffs",
      frequency: "As needed",
      disease: "Asthma",
      notes: "Use before exercise if needed.",
      labReportRequired: false,
      status: EPrescriptionStatus.ACTIVE,
    },
  ],
  PAT004: [
    {
      id: 6,
      date: "2025-04-15",
      name: "Levothyroxine",
      patientName: "Emily Wilson",
      patientId: "PAT004",
      dosage: "75mcg",
      frequency: "Once daily",
      disease: "Hypothyroidism",
      notes: "Take on empty stomach.",
      labReportRequired: true,
      status: EPrescriptionStatus.ACTIVE,
    },
    {
      id: 7,
      date: "2025-04-15",
      name: "Vitamin D3",
      patientName: "Emily Wilson",
      patientId: "PAT004",
      dosage: "2000 IU",
      frequency: "Once daily",
      disease: "Vitamin D Deficiency",
      notes: "Take with food.",
      labReportRequired: false,
      status: EPrescriptionStatus.ACTIVE,
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
