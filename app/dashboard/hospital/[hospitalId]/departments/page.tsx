"use client";

import React from "react";
import { motion } from "framer-motion";
import DepartmentManagement from "@/components/dashboard/hospital/departments/DepartmentManagement";

const DepartmentsPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Department Management</h1>
        <DepartmentManagement />
      </div>
    </motion.main>
  );
};

export default DepartmentsPage;