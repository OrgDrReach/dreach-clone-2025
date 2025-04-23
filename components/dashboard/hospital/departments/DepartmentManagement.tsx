"use client";

import React from "react";
import { DepartmentList } from "./DepartmentList";
import { StaffAllocation } from "./StaffAllocation";
import { ResourceManagement } from "./ResourceManagement";
import { PerformanceMetrics } from "./PerformanceMetrics";
import { EquipmentInventory } from "./EquipmentInventory";
import { SpecialtyServices } from "./SpecialtyServices";
import { DepartmentSchedules } from "./DepartmentSchedules";
import { motion } from "framer-motion";

export const DepartmentManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DepartmentList />
        </div>
        <div>
          <PerformanceMetrics />
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StaffAllocation />
        <ResourceManagement />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EquipmentInventory />
        <SpecialtyServices />
        <DepartmentSchedules />
      </div>
    </div>
  );
};

export default DepartmentManagement;