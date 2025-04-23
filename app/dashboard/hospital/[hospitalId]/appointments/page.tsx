"use client";

import React from "react";
import { motion } from "framer-motion";
import AppointmentManagement from "@/components/dashboard/hospital/appointments/AppointmentManagement";

const HospitalAppointmentsPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Appointment Management</h1>
        <AppointmentManagement />
      </div>
    </motion.main>
  );
};

export default HospitalAppointmentsPage;