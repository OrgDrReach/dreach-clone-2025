import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search } from "lucide-react";
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
    },
    {
      id: 2,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      disease: "Diabetes",
      labReportRequired: false,
    },
    {
      id: 3,
      name: "Ibuprofen",
      dosage: "400mg",
      frequency: "As needed",
      disease: "Pain Relief",
      labReportRequired: false,
    },
  ]);

  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.disease?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search prescriptions..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#0083b2] focus:ring-2 focus:ring-[#0083b2] focus:ring-opacity-20 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-[#0083b2] text-white rounded-lg shadow-md hover:bg-[#006d94] transition-colors"
          onClick={() => setShowCreateModal(true)}
        >
          <Plus size={20} />
          <span>New Prescription</span>
        </motion.button>
      </div>

      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrescriptions.map((prescription) => (
            <motion.div
              key={prescription.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white  rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#125872] mb-2">{prescription.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Dosage:</span> {prescription.dosage}</p>
                  <p><span className="font-medium">Frequency:</span> {prescription.frequency}</p>
                  {prescription.disease && (
                    <p><span className="font-medium">Disease:</span> {prescription.disease}</p>
                  )}
                  <p>
                    <span className="font-medium">Lab Report:</span>
                    <span className={prescription.labReportRequired ? "text-orange-500" : "text-green-500"}>
                      {prescription.labReportRequired ? " Required" : " Not Required"}
                    </span>
                  </p>
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setSelectedPrescription(prescription);
                      setShowEditModal(true);
                    }}
                    className="px-3 py-1 text-sm bg-[#0083b2] text-white rounded-md hover:bg-[#006d94] transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPrescription(prescription);
                      setShowDeleteConfirm(true);
                    }}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {showEditModal && selectedPrescription && (
        <PrescriptionEditModal
          prescription={selectedPrescription}
          onSave={(updated) => {
            setPrescriptions(prev => 
              prev.map(p => p.id === updated.id ? updated : p)
            );
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
            setPrescriptions(prev => 
              prev.filter(p => p.id !== selectedPrescription.id)
            );
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
