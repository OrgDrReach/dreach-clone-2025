import React from "react";

type PrescriptionDeleteConfirmProps = {
  prescription: any;
  onConfirm: () => void;
  onClose: () => void;
};

const PrescriptionDeleteConfirm = ({
  prescription,
  onConfirm,
  onClose,
}: PrescriptionDeleteConfirmProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Confirm Deletion</h2>
        <p className="mb-4">
          Are you sure you want to delete the prescription for{" "}
          <strong>{prescription.name}</strong>?
        </p>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDeleteConfirm;
