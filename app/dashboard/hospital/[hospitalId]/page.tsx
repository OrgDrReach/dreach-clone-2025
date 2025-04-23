'use client';

import React from "react";
import {
  QuickStats,
  OccupancyStatus,
  DepartmentSummary,
  EmergencyStatus,
  RecentAdmissions,
  UpcomingAppointments,
  StaffAvailability,
  BedManagement,
} from "@/components/dashboard/hospital/overview";
import { motion } from "framer-motion";

const HospitalDashboardPage: React.FC = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6 space-y-6"
    >
      <div className="flex flex-col space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Dashboard</span>
            <span>•</span>
            <span className="text-gray-900 dark:text-gray-100">Hospital Overview</span>
          </div>
        </div>

        {/* Quick Stats Section */}
        <section className="grid grid-cols-1 gap-6">
          <QuickStats />
        </section>

        {/* Status Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EmergencyStatus />
          <OccupancyStatus />
        </section>

        {/* Department and Bed Management Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DepartmentSummary />
          <BedManagement />
        </section>

        {/* Staff and Appointments Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StaffAvailability />
          <div className="grid grid-cols-1 gap-6">
            <RecentAdmissions />
            <UpcomingAppointments />
          </div>
        </section>
      </div>
    </motion.main>
  );
};

export default HospitalDashboardPage;
