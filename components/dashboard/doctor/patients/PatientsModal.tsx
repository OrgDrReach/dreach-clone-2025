import React from "react";

interface Patient {
  name: string;
  age: number;
  gender: string;
  phone: string;
  lastVisit: string;
  profileImage: string;
  diseases: string[];
}

interface ModalProps {
  patient: Patient | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ patient, isOpen, onClose }) => {
  if (!isOpen || !patient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md transition-all">
      <div className="bg-white dark:bg-slate-900 w-[90%] max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          ✕
        </button>

        <div className="text-center space-y-4">
          <img
            src={patient.profileImage}
            alt={patient.name}
            className="w-28 h-28 rounded-full mx-auto border-4 border-sky-400 shadow-md object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {patient.name}
          </h2>
        </div>

        <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <p><span className="font-medium text-sky-500">Age:</span> {patient.age}</p>
          <p><span className="font-medium text-sky-500">Gender:</span> {patient.gender}</p>
          <p><span className="font-medium text-sky-500">Phone:</span> {patient.phone}</p>
          <p><span className="font-medium text-sky-500">Last Visit:</span> {patient.lastVisit}</p>
          
          <div>
            <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800 dark:text-white">
              Diseases
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {patient.diseases.map((disease, index) => (
                <li key={index}>{disease}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-[#125872] text-white px-6 py-2 rounded-lg hover:bg-[#3ebdec] transition shadow"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
