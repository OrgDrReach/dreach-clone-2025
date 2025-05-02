import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, FileText, CalendarDays, User2, Stethoscope } from "lucide-react";
import PrescriptionEditModal from "./PrescriptionModal";
import PrescriptionDeleteConfirm from "./PrescriptionDelete";
import PrescriptionCreateModal from "./CreatePrescription";
import { Prescription } from "./type";

const PrescriptionList = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([
    {
      id: 1,
      name: "Amoxicillin",
      dosage: "500mg",
      frequency: "Three times daily",
      disease: "Bacterial Infection",
      labReportRequired: true,
      patient: "John Doe",
      date: "2025-04-30",
      notes: "Take after food. Avoid alcohol.",
    },
    {
      id: 2,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      disease: "Diabetes",
      labReportRequired: false,
      patient: "Jane Smith",
      date: "2025-04-28",
      notes: "Monitor blood sugar levels regularly.",
    },
  ]);

  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrescriptions = prescriptions.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.disease.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.patient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by medicine, disease or patient..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          onClick={() => setShowCreateModal(true)}
        >
          <Plus size={20} />
          <span>New Prescription</span>
        </motion.button>
      </div>

      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPrescriptions.map((prescription) => (
            <motion.div
              key={prescription.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow p-5 space-y-4"
            >
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Stethoscope size={18} />
                  {prescription.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{prescription.notes}</p>
              </div>

              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p className="flex items-center gap-2">
                  <User2 size={16} />
                  <span><strong>Patient:</strong> {prescription.patient}</span>
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <span><strong>Date:</strong> {prescription.date}</span>
                </p>
                <p><strong>Dosage:</strong> {prescription.dosage}</p>
                <p><strong>Frequency:</strong> {prescription.frequency}</p>
                <p><strong>Disease:</strong> {prescription.disease}</p>
                <p>
                  <strong>Lab Report:</strong>
                  <span className={`ml-1 font-medium ${prescription.labReportRequired ? "text-orange-500" : "text-green-600"}`}>
                    {prescription.labReportRequired ? "Required" : "Not Required"}
                  </span>
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedPrescription(prescription);
                    setShowEditModal(true);
                  }}
                  className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setSelectedPrescription(prescription);
                    setShowDeleteConfirm(true);
                  }}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {showEditModal && selectedPrescription && (
        <PrescriptionEditModal
          prescription={selectedPrescription}
          onSave={(updated) => {
            setPrescriptions(prev => prev.map(p => p.id === updated.id ? updated : p));
            setShowEditModal(false);
          }}
          onClose={() => {
            setShowEditModal(false);
            setSelectedPrescription(null);
          }}
        />
      )}

      {showDeleteConfirm && selectedPrescription && (
        <PrescriptionDeleteConfirm
          prescription={selectedPrescription}
          onConfirm={() => {
            setPrescriptions(prev => prev.filter(p => p.id !== selectedPrescription.id));
            setShowDeleteConfirm(false);
            setSelectedPrescription(null);
          }}
          onClose={() => {
            setShowDeleteConfirm(false);
            setSelectedPrescription(null);
          }}
        />
      )}

      {showCreateModal && (
        <PrescriptionCreateModal
          onSave={(newPrescription) => {
            setPrescriptions(prev => [...prev, newPrescription]);
            setShowCreateModal(false);
          }}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  );
};

export default PrescriptionList;
