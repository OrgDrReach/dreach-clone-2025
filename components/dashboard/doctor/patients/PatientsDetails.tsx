"use client";
import React, { useState } from "react";
import Modal from "./PatientsModal";
import { FaPhone, FaCalendarAlt, FaUser } from "react-icons/fa";

interface Patient {
  name: string;
  age: number;
  gender: string;
  phone: string;
  lastVisit: string;
  profileImage: string;
  diseases: string[];
}

const patientsData: Patient[][] = [
  [
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Robert Green",
      age: 55,
      gender: "Male",
      phone: "(555) 369-2580",
      lastVisit: "June 10, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      diseases: ["Asthma"],
    },
    // Additional patients trimmed for brevity
  ],
  [
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Robert Green",
      age: 55,
      gender: "Male",
      phone: "(555) 369-2580",
      lastVisit: "June 10, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      diseases: ["Asthma"],
    },
    // Additional patients trimmed for brevity
  ],[
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Robert Green",
      age: 55,
      gender: "Male",
      phone: "(555) 369-2580",
      lastVisit: "June 10, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      diseases: ["Asthma"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      diseases: ["Asthma"],
    },
    // Additional patients trimmed for brevity
  ],
];

const PatientCard: React.FC<{
  patient: Patient;
  onViewProfile: () => void;
}> = ({ patient, onViewProfile }) => (
  <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-5 rounded-2xl shadow-xl flex flex-col items-center text-center transition-all hover:scale-[1.02] duration-300 border border-slate-200 dark:border-slate-700">
    <img
      src={patient.profileImage}
      alt={patient.name}
      className="rounded-full w-24 h-24 object-cover border-4 border-sky-400 shadow-md mb-4"
    />
    <h3 className="text-gray-800 dark:text-white font-semibold text-xl mb-1">{patient.name}</h3>
    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
      <p className="flex items-center justify-center gap-2">
        <FaPhone className="text-sky-500" /> {patient.phone}
      </p>
      <p className="flex items-center justify-center gap-2">
        <FaCalendarAlt className="text-sky-500" /> Last Visit: {patient.lastVisit}
      </p>
    </div>
    <button
      onClick={onViewProfile}
      className="mt-4 px-4 py-2 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-all duration-200 shadow-md"
    >
      View Profile
    </button>
  </div>
);

const Pagination: React.FC<{
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ page, setPage }) => {
  const totalPages = patientsData.length;

  return (
    <div className="flex justify-center mt-10 gap-2">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`w-10 h-10 rounded-full font-semibold transition-all duration-200 ${
            page === i + 1
              ? "bg-sky-600 text-white shadow-lg"
              : "bg-white dark:bg-slate-800 text-sky-600 border border-sky-600"
          }`}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

const PatientsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProfile = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-12 bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Our Patients</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {patientsData[page - 1].map((patient, index) => (
            <PatientCard
              key={index}
              patient={patient}
              onViewProfile={() => handleViewProfile(patient)}
            />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>
      {selectedPatient && (
        <Modal patient={selectedPatient} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PatientsList;