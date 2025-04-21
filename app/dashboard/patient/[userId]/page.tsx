"use client";

import React from "react";
import { Overview } from "@/components/dashboard/patients/Overview";

const PatientDashboard: React.FC = () => {
  return (
    <main className="-mx-12">
      <Overview />
    </main>
  );
};

export default PatientDashboard;
