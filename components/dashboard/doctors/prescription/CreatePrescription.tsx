import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Plus, AlertCircle } from "lucide-react";
import { Prescription } from "./type";

interface PrescriptionCreateModalProps {
  onSave: (data: Prescription) => void;
  onClose: () => void;
}

const PrescriptionCreateModal: React.FC<PrescriptionCreateModalProps> = ({
  onSave,
  onClose,
}) => {
  const [formState, setFormState] = useState({
    name: "",
    dosage: "",
    frequency: "",
    disease: "",
    labReportRequired: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) {
      newErrors.name = "Medication name is required";
    }
    if (!formState.dosage.trim()) {
      newErrors.dosage = "Dosage is required";
    }
    if (!formState.frequency.trim()) {
      newErrors.frequency = "Frequency is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const newPrescription: Prescription = {
        ...formState,
        id: Date.now(),
      };
      onSave(newPrescription);
      onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === "checkbox" 
        ? (e.target as HTMLInputElement).checked 
        : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-xl mx-4"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-[#125872]">
            Create New Prescription
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medication Name *
              </label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#0083b2] focus:border-[#0083b2] ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <AlertCircle size={14} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dosage *
              </label>
              <input
                type="text"
                name="dosage"
                value={formState.dosage}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#0083b2] focus:border-[#0083b2] ${
                  errors.dosage ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.dosage && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <AlertCircle size={14} />
                  <span>{errors.dosage}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency *
              </label>
              <input
                type="text"
                name="frequency"
                value={formState.frequency}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#0083b2] focus:border-[#0083b2] ${
                  errors.frequency ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.frequency && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <AlertCircle size={14} />
                  <span>{errors.frequency}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Disease
              </label>
              <input
                type="text"
                name="disease"
                value={formState.disease}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0083b2] focus:border-[#0083b2]"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 gap-2">
                <input
                  type="checkbox"
                  name="labReportRequired"
                  checked={formState.labReportRequired}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 text-[#0083b2] focus:ring-[#0083b2]"
                />
                Lab Report Required
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-[#0083b2] text-white rounded-md hover:bg-[#006d94] transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={20} />
                Create Prescription
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PrescriptionCreateModal;
