"use client";
import { useState } from "react";
import type { NextPage } from "next";
import PrescriptionList from "@/components/dashboard/doctors/prescription/PrescriptionModal";
import { Prescription } from "@/components/dashboard/doctors/prescription/type";

interface NewPrescription extends Omit<Prescription, "id"> {
  date: string;
}

const Prescriptions: NextPage = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPrescription = (prescription: NewPrescription) => {
    const newPrescription: Prescription = {
      ...prescription,
      id: prescriptions.length + 1,
    };
    setPrescriptions([...prescriptions, newPrescription]);
  };

  const handleSelectPrescription = (prescription: Prescription) => {
    setSelectedPrescription(prescription);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPrescription(null);
  };

  return (
    <main className="bg-[#c5efff] min-h-screen p-6">
      <PrescriptionList
        prescription={undefined}
        onSave={undefined}
        onClose={undefined}
      />
    </main>
  );
};

export default Prescriptions;
