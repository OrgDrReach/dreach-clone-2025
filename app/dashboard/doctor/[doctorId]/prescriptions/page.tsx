"use client";
import { useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import PrescriptionDashboard from "@/components/dashboard/doctor/prescription/PrescriptionDashboard";

const Prescriptions: NextPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#e6f7ff] to-[#c5efff] dark:from-slate-800 dark:to-slate-900 p-6"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#125872] dark:text-[#33a6cf] mb-2">
            Patient Prescriptions
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and track prescriptions for all your patients
          </p>
        </div>
        <PrescriptionDashboard />
      </div>
    </motion.main>
  );
};

export default Prescriptions;
