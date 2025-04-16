"use client";
import React, { useState } from "react";
import Modal from "./PatientsModal";

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
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Asthma"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Asthma"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Asthma"],
    },
    {
      name: "Robert Green",
      age: 55,
      gender: "Male",
      phone: "(555) 369-2580",
      lastVisit: "June 10, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Asthma"],
    },
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Asthma"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Asthma"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Asthma"],
    },
    {
      name: "Robert Green",
      age: 55,
      gender: "Male",
      phone: "(555) 369-2580",
      lastVisit: "June 10, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Asthma"],
    },
  ],
  [
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Sarah wjcnjdwn",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Robert Green",
      age: 55,
      gender: "Male",
      phone: "(555) 369-2580",
      lastVisit: "June 10, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
  ],

  [
    {
      name: "Alice Walker",
      age: 30,
      gender: "Female",
      phone: "(555) 444-5678",
      lastVisit: "July 3, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "John Doe",
      age: 60,
      gender: "Male",
      phone: "(555) 987-1234",
      lastVisit: "August 5, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Jane Smith",
      age: 40,
      gender: "Female",
      phone: "(555) 234-5678",
      lastVisit: "July 20, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Mark Spencer",
      age: 48,
      gender: "Male",
      phone: "(555) 456-7890",
      lastVisit: "August 10, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Sarah Johnson",
      age: 35,
      gender: "Female",
      phone: "(555) 123-4567",
      lastVisit: "May 15, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      phone: "(555) 987-6543",
      lastVisit: "June 2, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      phone: "(555) 246-8135",
      lastVisit: "May 28, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
    {
      name: "Robert Green",
      age: 55,
      gender: "Male",
      phone: "(555) 369-2580",
      lastVisit: "June 10, 2023",
      profileImage: "https://via.placeholder.com/100",
      diseases: ["Diabetes", "Hypertension"],
    },
  ],
];

const PatientCard: React.FC<{
  patient: Patient;
  onViewProfile: () => void;
}> = ({ patient, onViewProfile }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
    <img
      src={patient.profileImage}
      alt={patient.name}
      className="rounded-full border-[#3ebdec] border-2 mb-4"
    />
    <h3 className="text-gray-700 font-semibold mb-2 text-lg">{patient.name}</h3>
    <p className="text-gray-600 text-sm">
      <span className="font-semibold text-sky-500">Phone:</span> {patient.phone}
    </p>
    <p className="text-gray-600 mt-1 text-sm">
      <span className="font-semibold text-sky-500">Last Visit:</span>{" "}
      {patient.lastVisit}
    </p>
    <div className="flex mt-4 space-x-3">
      <button
        onClick={onViewProfile}
        className="bg-[#125872] text-white px-4 py-1 text-[15px] rounded hover:bg-[#3ebdec]"
      >
        View Profile
      </button>
    </div>
  </div>
);

const Pagination: React.FC<{
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ page, setPage }) => {
  const totalPages = patientsData.length;

  return (
    <div className="flex justify-center mt-6">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`mx-1 px-4 py-2 rounded ${page === i + 1 ? "bg-[#0db2ef] text-white" : "bg-white text-[#0db2ef] border border-[#0db2ef]"}`}
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
    <div className=" py-4">
      <div className="container mx-auto">
        <h2 className="text-gray-700 text-2xl font-bold mb-6">Patients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {patientsData[page - 1]?.map((patient, index) => (
            <PatientCard
              key={index}
              patient={patient}
              onViewProfile={() => handleViewProfile(patient)}
            />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>

      <Modal
        patient={selectedPatient}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default PatientsList;
