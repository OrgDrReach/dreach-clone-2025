import React, { useState } from "react";

const PrescriptionEditModal = ({
  prescription,
  onSave,
  onClose,
}: {
  prescription: any;
  onSave: any;
  onClose: any;
}) => {
  const [formState, setFormState] = useState({
    ...prescription,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target as
      | HTMLInputElement
      | HTMLSelectElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formState);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl mb-4">Edit Prescription</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              placeholder="Enter name"
              title="Name"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dosage" className="block text-gray-700">
              Dosage
            </label>
            <input
              type="text"
              id="dosage"
              name="dosage"
              value={formState.dosage}
              onChange={handleInputChange}
              placeholder="Enter dosage"
              title="Dosage"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="frequency" className="block text-gray-700">
              Frequency
            </label>
            <input
              type="text"
              id="frequency"
              name="frequency"
              value={formState.frequency}
              onChange={handleInputChange}
              placeholder="Enter frequency"
              title="Frequency"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="disease" className="block text-gray-700">
              Disease
            </label>
            <input
              type="text"
              id="disease"
              name="disease"
              value={formState.disease}
              onChange={handleInputChange}
              placeholder="Enter disease"
              title="Disease"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="labReportRequired" className="block text-gray-700">
              Lab Report Required
            </label>
            <select
              id="labReportRequired"
              name="labReportRequired"
              value={formState.labReportRequired ? "true" : "false"}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionEditModal;
