"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuickOverview from "@/components/dashboard/patients/MedicalRecords/QuickOverview";
import LabResults from "@/components/dashboard/patients/MedicalRecords/LabResults";
import ImagingResults from "@/components/dashboard/patients/MedicalRecords/ImagingResults";
import MedicalHistories from "@/components/dashboard/patients/MedicalRecords/MedicalHistories";
import MedicationList from "@/components/dashboard/patients/MedicalRecords/MedicationList";
import AllergyList from "@/components/dashboard/patients/MedicalRecords/AllergyList";
import MedicalReports from "@/components/dashboard/patients/MedicalRecords/MedicalReports";
import MedicalImages from "@/components/dashboard/patients/MedicalRecords/MedicalImages";

// Update the Medication type
type Medication = {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  status: "Active" | "Discontinued" | "As Needed";
};

// Update the Allergy type
type Allergy = {
  id: string;
  name: string;
  type: "Food" | "Medication" | "Environmental" | "Other";
  severity: "Severe" | "Moderate" | "Mild";
  reaction: string;
};

type MedicalEvent = {
  id: string;
  date: string;
  type: "Illness" | "Surgery" | "Treatment";
  description: string;
  details: string;
};

type LabResult = {
  id: string;
  testName: string;
  date: string;
  result: string;
  unit: string;
  referenceRange: string;
  status: "Normal" | "Abnormal" | "Critical";
};

type MedicalReport = {
  id: string;
  name: string;
  date: string;
  summary: string;
  downloadUrl: string;
  status: "Finalized" | "Draft" | "Rejected";
};

const MedicalRecordsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("medications");

  // Update the mock data
  const mockData = {
    conditions: [
      { name: "Hypertension", diagnosisDate: "2020-03-15" },
      { name: "Type 2 Diabetes", diagnosisDate: "2018-07-22" },
      { name: "Asthma", diagnosisDate: "2010-01-10" },
    ],
    medications: [
      {
        id: "1",
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        duration: "Ongoing",
        status: "Active",
      },
      {
        id: "2",
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        duration: "Ongoing",
        status: "Active",
      },
      {
        id: "3",
        name: "Albuterol",
        dosage: "90mcg",
        frequency: "As needed",
        duration: "As needed",
        status: "As Needed",
      },
      {
        id: "4",
        name: "Ibuprofen",
        dosage: "400mg",
        frequency: "Every 6 hours",
        duration: "7 days",
        status: "Discontinued",
      },
    ] as Medication[],
    allergies: [
      {
        id: "1",
        name: "Peanuts",
        type: "Food",
        severity: "Severe",
        reaction: "Anaphylaxis",
      },
      {
        id: "2",
        name: "Penicillin",
        type: "Medication",
        severity: "Moderate",
        reaction: "Hives and swelling",
      },
      {
        id: "3",
        name: "Dust mites",
        type: "Environmental",
        severity: "Mild",
        reaction: "Sneezing and runny nose",
      },
      {
        id: "4",
        name: "Latex",
        type: "Other",
        severity: "Moderate",
        reaction: "Skin rash and itching",
      },
    ] as Allergy[],
    labResults: [
      {
        id: "1",
        testName: "Complete Blood Count (CBC)",
        date: "2023-05-15",
        result: "5.2",
        unit: "million cells/mcL",
        referenceRange: "4.5-5.5",
        status: "Normal" as const,
      },
      {
        id: "2",
        testName: "Hemoglobin A1C",
        date: "2023-05-15",
        result: "7.1",
        unit: "%",
        referenceRange: "4.0-5.6",
        status: "Abnormal" as const,
      },
      {
        id: "3",
        testName: "Lipid Panel - LDL",
        date: "2023-05-15",
        result: "131",
        unit: "mg/dL",
        referenceRange: "<100",
        status: "Abnormal" as const,
      },
      {
        id: "4",
        testName: "Thyroid Stimulating Hormone (TSH)",
        date: "2023-05-15",
        result: "2.5",
        unit: "mIU/L",
        referenceRange: "0.4-4.0",
        status: "Normal" as const,
      },
    ] as LabResult[],
    imagingStudies: [
      {
        id: "1",
        studyName: "Chest X-ray",
        date: "2023-06-01",
        findings:
          "No acute cardiopulmonary process. Lungs are clear. Heart size is normal.",
        imageUrl: "/images/chest-xray.jpg",
      },
      {
        id: "2",
        studyName: "MRI Brain",
        date: "2023-05-15",
        findings:
          "No evidence of acute infarct, hemorrhage, or mass effect. Normal brain MRI.",
        imageUrl: "/images/brain-mri.jpg",
      },
      {
        id: "3",
        studyName: "Abdominal Ultrasound",
        date: "2023-04-22",
        findings:
          "Liver, gallbladder, pancreas, and kidneys appear normal. No abnormalities detected.",
        imageUrl: "/images/abdominal-ultrasound.jpg",
      },
    ],
    medicalHistories: [
      {
        id: "1",
        date: "2022-09-15",
        type: "Illness" as const,
        description: "Acute Bronchitis",
        details:
          "Treated with antibiotics and rest. Fully recovered after 2 weeks.",
      },
      {
        id: "2",
        date: "2021-05-03",
        type: "Surgery" as const,
        description: "Appendectomy",
        details: "Laparoscopic procedure. No complications.",
      },
      {
        id: "3",
        date: "2020-11-20",
        type: "Treatment" as const,
        description: "Physical Therapy for Lower Back Pain",
        details:
          "6-week course of therapy. Significant improvement in mobility and pain reduction.",
      },
      {
        id: "4",
        date: "2019-02-10",
        type: "Illness" as const,
        description: "Influenza A",
        details:
          "Bed rest and symptomatic treatment. Full recovery after 10 days.",
      },
    ] as MedicalEvent[],
    medicalReports: [
      {
        id: "1",
        name: "Annual Physical Examination Report",
        date: "2023-05-20T09:30:00Z",
        summary:
          "Overall health is good. Recommended lifestyle changes to address slightly elevated blood pressure.",
        downloadUrl: "/reports/annual-physical-2023.pdf",
        status: "Finalized" as const,
      },
      {
        id: "2",
        name: "Cardiology Consultation Report",
        date: "2023-04-15T14:00:00Z",
        summary:
          "No significant cardiac issues detected. Stress test results within normal limits.",
        downloadUrl: "/reports/cardiology-consult-2023.pdf",
        status: "Draft" as const,
      },
      {
        id: "3",
        name: "Dermatology Biopsy Results",
        date: "2023-03-10T11:15:00Z",
        summary:
          "Biopsy of skin lesion shows benign characteristics. No further action required at this time.",
        downloadUrl: "/reports/dermatology-biopsy-2023.pdf",
        status: "Rejected" as const,
      },
    ] as MedicalReport[],
    medicalImages: [
      {
        id: "1",
        name: "Chest X-ray",
        date: "2023-06-01",
        imageUrl: "/images/chest-xray.jpg",
        description:
          "Frontal chest X-ray showing clear lung fields and normal heart size.",
      },
      {
        id: "2",
        name: "Brain MRI",
        date: "2023-05-15",
        imageUrl: "/images/brain-mri.jpg",
        description:
          "T1-weighted MRI of the brain, axial view, showing normal brain structures.",
      },
      {
        id: "3",
        name: "Abdominal Ultrasound",
        date: "2023-04-22",
        imageUrl: "/images/abdominal-ultrasound.jpg",
        description:
          "Ultrasound image of the liver and surrounding structures, showing normal echogenicity.",
      },
    ],
  };

  const tabContent = {
    medications: <MedicationList medications={mockData.medications} />,
    allergies: <AllergyList allergies={mockData.allergies} />,
    history: <MedicalHistories histories={mockData.medicalHistories} />,
    labResults: <LabResults results={mockData.labResults} />,
    imaging: <ImagingResults studies={mockData.imagingStudies} />,
    reports: <MedicalReports reports={mockData.medicalReports} />,
    images: <MedicalImages images={mockData.medicalImages} />,
  };

  return (
    <main className="p-6">
      <QuickOverview
        conditions={mockData.conditions}
        medications={mockData.medications}
        allergies={mockData.allergies}
      />

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full mt-8"
      >
        <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2 mb-6 text-black bg-sky-200 ">
          <TabsTrigger value="medications">Medications</TabsTrigger>
          <TabsTrigger value="allergies">Allergies</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="labResults">Lab Results</TabsTrigger>
          <TabsTrigger value="imaging">Imaging</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabContent[activeTab as keyof typeof tabContent]}
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </main>
  );
};

export default MedicalRecordsPage;
