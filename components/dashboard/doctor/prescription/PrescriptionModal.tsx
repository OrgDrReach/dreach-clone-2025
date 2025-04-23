import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Prescription } from "./type";

interface PrescriptionEditModalProps {
  prescription: Prescription;
  onSave: (prescription: Prescription) => void;
  onClose: () => void;
}

const PrescriptionEditModal: React.FC<PrescriptionEditModalProps> = ({
  prescription,
  onSave,
  onClose,
}) => {
  const [formState, setFormState] = useState(prescription);

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
            Edit Prescription
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formState);
          }}
          className="p-4 space-y-4"
        >
          {/* Form fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medication Name
              </label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#0083b2] focus:border-[#0083b2]"
                required
              />
            </div>
            
            {/* Add other form fields similarly */}
            
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
                className="flex-1 px-4 py-2 bg-[#0083b2] text-white rounded-md hover:bg-[#006d94] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PrescriptionEditModal;
