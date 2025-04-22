import { 
  TimelineEvent,
  Condition,
  Vaccination,
  FamilyCondition,
  Allergy,
  Surgery,
  ChronicCondition 
} from '@/types/health-history';

export const mockHealthHistoryData = {
  timelineEvents: [
    {
      id: "TE001",
      date: new Date("2025-03-15"),
      type: "diagnosis",
      title: "Hypertension Diagnosis",
      description: "Initial diagnosis of hypertension. Prescribed ACE inhibitors.",
      doctor: "Dr. John Smith",
      facility: "Boston Heart Clinic"
    },
    {
      id: "TE002",
      date: new Date("2025-02-01"),
      type: "surgery",
      title: "Appendectomy",
      description: "Laparoscopic appendectomy performed",
      doctor: "Dr. Sarah Johnson",
      facility: "SF General Hospital"
    },
    {
      id: "TE003",
      date: new Date("2024-12-20"),
      type: "vaccination",
      title: "COVID-19 Booster",
      description: "Received COVID-19 booster shot",
      doctor: "Dr. Emily Rodriguez",
      facility: "Boston Medical Center"
    }
  ] as TimelineEvent[],

  conditions: [
    {
      id: "PC001",
      name: "Upper Respiratory Infection",
      diagnosedDate: new Date("2024-11-15"),
      status: "resolved",
      treatingPhysician: "Michael Chen",
      notes: "Treated with antibiotics for 7 days"
    },
    {
      id: "PC002",
      name: "Migraine",
      diagnosedDate: new Date("2025-01-10"),
      status: "managed",
      treatingPhysician: "Sarah Johnson",
      notes: "Regular preventive medication prescribed"
    }
  ] as Condition[],

  vaccinations: [
    {
      id: "VAC001",
      name: "Influenza Vaccine",
      date: new Date("2024-10-01"),
      dueDate: new Date("2025-10-01"),
      administrator: "Emily Rodriguez",
      facility: "Boston Medical Center",
      batchNumber: "FLU2024-456",
      notes: "Annual flu shot"
    },
    {
      id: "VAC002",
      name: "COVID-19 Booster",
      date: new Date("2024-12-20"),
      administrator: "David Park",
      facility: "SF Medical Center",
      batchNumber: "COV2024-789",
      notes: "Latest booster shot"
    }
  ] as Vaccination[],

  familyHistory: [
    {
      id: "FH001",
      condition: "Type 2 Diabetes",
      relationship: "Father",
      diagnosedAge: 45,
      notes: "Managed with medication and diet"
    },
    {
      id: "FH002",
      condition: "Hypertension",
      relationship: "Mother",
      diagnosedAge: 50,
      notes: "Well controlled with medication"
    },
    {
      id: "FH003",
      condition: "Breast Cancer",
      relationship: "Maternal Grandmother",
      diagnosedAge: 65,
      notes: "Successfully treated; in remission"
    }
  ] as FamilyCondition[],

  allergies: [
    {
      id: "AL001",
      allergen: "Penicillin",
      severity: "severe",
      reactions: ["Rash", "Difficulty Breathing"],
      diagnosedDate: new Date("2020-05-15"),
      notes: "Avoid all penicillin-based antibiotics"
    },
    {
      id: "AL002",
      allergen: "Peanuts",
      severity: "moderate",
      reactions: ["Hives", "Swelling"],
      diagnosedDate: new Date("2018-03-20"),
      notes: "Carries EpiPen"
    }
  ] as Allergy[],

  surgeries: [
    {
      id: "SUR001",
      procedure: "Appendectomy",
      date: new Date("2025-02-01"),
      surgeon: "Sarah Johnson",
      facility: "SF General Hospital",
      outcome: "Successful",
      notes: "Laparoscopic procedure; no complications"
    },
    {
      id: "SUR002",
      procedure: "Knee Arthroscopy",
      date: new Date("2024-08-15"),
      surgeon: "David Park",
      facility: "SF Sports Medicine",
      outcome: "Successful",
      complications: ["Mild post-operative swelling"],
      notes: "Physical therapy recommended"
    }
  ] as Surgery[],

  chronicConditions: [
    {
      id: "CC001",
      name: "Hypertension",
      diagnosedDate: new Date("2025-03-15"),
      status: "controlled",
      medications: ["Lisinopril 10mg", "Hydrochlorothiazide 12.5mg"],
      treatingPhysician: "John Smith",
      lastAssessment: new Date("2025-04-01"),
      nextReview: new Date("2025-07-01"),
      notes: "Blood pressure well controlled with current medication"
    },
    {
      id: "CC002",
      name: "Asthma",
      diagnosedDate: new Date("2020-06-10"),
      status: "controlled",
      medications: ["Albuterol inhaler", "Fluticasone inhaler"],
      treatingPhysician: "Emily Rodriguez",
      lastAssessment: new Date("2025-03-20"),
      nextReview: new Date("2025-06-20"),
      notes: "Mild intermittent asthma; well controlled"
    }
  ] as ChronicCondition[]
};