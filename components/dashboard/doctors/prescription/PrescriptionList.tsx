import React, { useState } from "react";
import PrescriptionEditModal from "./PrescriptionModal";
import PrescriptionDeleteConfirm from "./PrescriptionDelete";
import PrescriptionCreateModal from "./CreatePrescription";

const PrescriptionList = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      name: "soumya",
      dosage: "10mg",
      frequency: "Once daily",
      disease: "Hypertension",
      labReportRequired: true,
    },
    {
      id: 2,
      name: "yzzzz",
      dosage: "500mg",
      frequency: "Twice daily",
      disease: "Diabetes",
      labReportRequired: false,
    },
    {
      id: 3,
      name: "akdasdsa",
      dosage: "400mg",
      frequency: "As needed",
      disease: "Pain Relief",
      labReportRequired: false,
    },
  ]);

  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleEditClick = (prescription: any) => {
    setSelectedPrescription(prescription);
    setShowEditModal(true);
  };

  const handleDeleteClick = (prescription: any) => {
    setSelectedPrescription(prescription);
    setShowDeleteConfirm(true);
  };

  const handleCreateClick = () => {
    setShowCreateModal(true);
  };

  const handleEditSave = (updatedPrescription: any) => {
    setPrescriptions((prevPrescriptions) =>
      prevPrescriptions.map((prescription) =>
        prescription.id === updatedPrescription.id
          ? updatedPrescription
          : prescription,
      ),
    );
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    setPrescriptions((prevPrescriptions) =>
      prevPrescriptions.filter(
        (prescription) => prescription.id !== selectedPrescription?.id,
      ),
    );
    setShowDeleteConfirm(false);
  };

  const handleCreateSave = (newPrescription: any) => {
    setPrescriptions((prevPrescriptions) => [
      ...prevPrescriptions,
      newPrescription,
    ]);
    setShowCreateModal(false);
  };

  return (
    <div className="p- mx-auto">
      <h1 className="text-2xl font-bold text-[#125872] mb-4">
        Prescription Management
      </h1>
      <button
        className="mb-4 px-4 py-2 bg-[#125872] hover:bg-[#0e84a1] text-white rounded"
        onClick={handleCreateClick}
      >
        Create New Prescription
      </button>
      <ul className="bg-white shadow-md p-3 rounded-lg">
        {prescriptions.map((prescription) => (
          <li key={prescription.id} className="p-4 border-b">
            <div className="flex justify-between items-center">
              <div>
                <a
                  href="#"
                  className="text-[#125872] font-semibold"
                  onClick={() => handleEditClick(prescription)}
                >
                  {prescription.name}
                </a>
                <div className="text-gray-500">
                  {prescription.dosage}, {prescription.frequency}
                </div>
                <div className="text-gray-500">
                  <strong>Disease:</strong> {prescription.disease}
                </div>
                <div className="text-gray-500">
                  <strong>Lab Report Required:</strong>{" "}
                  {prescription.labReportRequired ? "Yes" : "No"}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="px-3 py-1 bg-[#0083b2] text-white rounded"
                  onClick={() => handleEditClick(prescription)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-orange-500 text-white rounded"
                  onClick={() => handleDeleteClick(prescription)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showEditModal && (
        <PrescriptionEditModal
          prescription={selectedPrescription}
          onSave={handleEditSave}
          onClose={() => setShowEditModal(false)}
        />
      )}
      {showDeleteConfirm && (
        <PrescriptionDeleteConfirm
          prescription={selectedPrescription}
          onConfirm={handleDeleteConfirm}
          onClose={() => setShowDeleteConfirm(false)}
        />
      )}
      {showCreateModal && (
        <PrescriptionCreateModal
          onSave={handleCreateSave}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  );
};

export default PrescriptionList;
