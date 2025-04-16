import React, { useState } from "react";

interface PrescriptionCreateModalProps {
  onSave: (data: any) => void;
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

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPrescription = {
      ...formState,
      id: Date.now(),
    };
    onSave(newPrescription);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl mb-4">Create New Prescription</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              title="Name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Dosage</label>
            <input
              title="Dosage"
              type="text"
              name="dosage"
              value={formState.dosage}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Frequency</label>
            <input
              title="Frequency"
              type="text"
              name="frequency"
              value={formState.frequency}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Disease</label>
            <input
              title="Disease"
              type="text"
              name="disease"
              value={formState.disease}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className=" text-gray-700 flex items-center">
              <input
                type="checkbox"
                name="labReportRequired"
                checked={formState.labReportRequired}
                onChange={handleInputChange}
                className="mr-2"
              />
              Lab Report Required
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0083b2] text-white rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionCreateModal;
