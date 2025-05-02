"use client";
import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import { PrescriptionHistoryPanel } from "./panels/PrescriptionHistoryPanel";
import { PatientPrescriptionsPanel } from "./panels/PatientPrescriptionsPanel";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IPatient } from "@/types/user.d.types";
import { IPrescription } from "@/types/doctor.d.types";

const PrescriptionDashboard: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<IPatient | null>(null);
  const [historySearchTerm, setHistorySearchTerm] = useState("");
  const [patientSearchTerm, setPatientSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="flex gap-6 h-[calc(100vh-12rem)]">
      {/* Left Panel - Prescription History */}
      <div className="w-1/3 bg-white dark:bg-slate-900 rounded-xl shadow-lg p-4 overflow-hidden flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-semibold text-[#125872] dark:text-[#33a6cf]">
            Prescription History
          </h2>
        </div>
        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            type="text"
            placeholder="Search prescriptions..."
            value={historySearchTerm}
            onChange={(e) => setHistorySearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        <PrescriptionHistoryPanel
          searchTerm={historySearchTerm}
          onSelectPatient={setSelectedPatient}
          selectedPatient={selectedPatient}
        />
      </div>

      {/* Right Panel - Patient Prescriptions */}
      <div className="w-2/3 bg-white dark:bg-slate-900 rounded-xl shadow-lg p-4 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#125872] dark:text-[#33a6cf]">
            {selectedPatient
              ? `${selectedPatient.name}'s Prescriptions`
              : "Select a Patient"}
          </h2>
          {selectedPatient && (
            <Button
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            >
              <Plus size={20} />
              Add Prescription
            </Button>
          )}
        </div>
        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            type="text"
            placeholder="Search patient prescriptions..."
            value={patientSearchTerm}
            onChange={(e) => setPatientSearchTerm(e.target.value)}
            className="pl-10 w-full"
            disabled={!selectedPatient}
          />
        </div>
        <PatientPrescriptionsPanel
          patient={selectedPatient}
          searchTerm={patientSearchTerm}
          onAddPrescription={() => setShowCreateModal(true)}
        />
      </div>
    </div>
  );
};

export default PrescriptionDashboard;
