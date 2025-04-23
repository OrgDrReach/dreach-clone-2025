import React from "react";

interface Patient {
  name: string;
  age: number;
  gender: string;
  phone: string;
  lastVisit: string;
  profileImage: string;
  diseases: string[]; // Added diseases field
}

interface ModalProps {
  patient: Patient | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ patient, isOpen, onClose }) => {
  if (!isOpen || !patient) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
        <h2 className="text-gray-700 text-xl font-semibold mb-4">
          {patient.name}
        </h2>
        <img
          src={patient.profileImage}
          alt={patient.name}
          className="rounded-xl border-2 border-[#3ebdec] mx-auto mb-4"
        />
        <p className="text-gray-600">
          <span className="font-semibold text-sky-500">Age:</span> {patient.age}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-sky-500">Gender:</span>{" "}
          {patient.gender}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-sky-500">Phone:</span>{" "}
          {patient.phone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-sky-500">Last Visit:</span>{" "}
          {patient.lastVisit}
        </p>

        <div className="mt-4">
          <h3 className="text-gray-700 font-semibold mb-2 text-lg">
            Diseases:
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {patient.diseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-[#125872] text-white px-4 py-2 rounded hover:bg-[#3ebdec]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
