"use client";
import { useState } from "react";
import type { NextPage } from "next";
import PrescriptionList from "@/components/dashboard/doctors/prescription/PrescriptionList";
import { Prescription } from "@/components/dashboard/doctors/prescription/type";
import { motion } from "framer-motion";

const Prescriptions: NextPage = () => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#e6f7ff] to-[#c5efff] dark:from-slate-600 dark:to-slate-900 rounded-lg p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#125872] dark:text-[#33a6cf] mb-2">
            Prescription Management
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and track patient prescriptions efficiently
          </p>
        </div>
        <PrescriptionList />
      </div>
    </motion.main>
  );
};

export default Prescriptions;
