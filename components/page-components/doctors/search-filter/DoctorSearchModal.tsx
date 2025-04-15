"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useDoctorStore } from "@/lib/stores/doctorStore";
import {
  EProviderType,
  IBaseProvider,
  Provider,
} from "@/types/provider.d.types";
import { IDoctor } from "@/types/doctor.d.types";

// Define types for specialties
interface Specialty {
  id: string;
  name: string;
}

const SPECIALTIES: Specialty[] = [
  { id: "cardiology", name: "Cardiology" },
  { id: "neurology", name: "Neurology" },
  { id: "pediatrics", name: "Pediatrics" },
  { id: "orthopedics", name: "Orthopedics" },
  { id: "dermatology", name: "Dermatology" },
];

// Define types for the modal props
interface DoctorSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define search form type
interface SearchFormData {
  query: string;
  specialty: string;
}

// Add this before the component
function isDoctorProvider(
  provider: Provider,
): provider is IBaseProvider & IDoctor {
  return provider.type === EProviderType.DOCTOR;
}

const DoctorSearchModal: React.FC<DoctorSearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { fetchDoctors, searchDoctors, filteredDoctors, loading, error } =
    useDoctorStore();
  const [isSearching, setIsSearching] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SearchFormData>({
    defaultValues: {
      query: "",
      specialty: "",
    },
  });

  const onSubmit = async (data: SearchFormData) => {
    setIsSearching(true);
    try {
      // If specialty is selected, fetch doctors by specialty
      if (data.specialty) {
        await fetchDoctors(data.specialty);
      }

      // If query is provided, perform search within fetched doctors
      if (data.query) {
        searchDoctors(data.query);
      }

      // Show search results
      if (filteredDoctors.length === 0) {
        toast.info("No doctors found", {
          description: "Try a different search or specialty",
        });
      } else {
        toast.success(`Found ${filteredDoctors.length} doctors`, {
          description: `Matching ${data.specialty ? data.specialty : "all specialties"}`,
        });
      }
    } catch (err) {
      toast.error("Search failed", {
        description: error || "Unable to complete search",
      });
    } finally {
      setIsSearching(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-auto p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Find Your Doctor
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Search by doctor's name, condition..."
              {...register("query")}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <select
              {...register("specialty")}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select Specialty</option>
              {SPECIALTIES.map((specialty) => (
                <option key={specialty.id} value={specialty.id}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSearching}
            className={`w-full py-3 rounded-lg transition-colors duration-300 font-semibold 
              ${
                isSearching
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
          >
            {isSearching ? "Searching..." : "Find Doctors"}
          </button>
        </form>

        {/* Optional: Display search results */}
        {filteredDoctors.length > 0 && (
          <div className="mt-6 max-h-64 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Search Results</h3>
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-2"
              >
                <h4 className="font-bold">{doctor.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {isDoctorProvider(doctor)
                    ? doctor.specialization.join(", ")
                    : ""}{" "}
                  | Rating: {doctor.rating ?? "N/A"}
                </p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DoctorSearchModal;
