"use client";

import { BarCharts } from "@/components/dashboard/admin/BarCharts";
import { PieCharts } from "@/components/dashboard/admin/PieCharts";
import { RedarCharts } from "@/components/dashboard/admin/RedarCharts";
import Statistics from "@/components/dashboard/admin/Statistics";
import { userStatistics } from "@/components/dashboard/admin/utils";
import React, { useEffect, useState } from "react";

const Admin: React.FC = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [newUsers, setNewUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  const getAllInfo = () => {
    setTotalUsers(userStatistics.totalUsers);
    setNewUsers(userStatistics.newUsersThisMonth);
    setActiveUsers(userStatistics.activeUsersToday);
  };

  useEffect(() => {
    getAllInfo();
  }, []);

  return (
    <main className="p-6 flex flex-col gap-6">
      <div className="flex gap-5 w-full">
        {/* 
        title: for heading
        registeredTitle/registered contains : Total Users, Registered Doctors, Registered Hospitals,
        occupancyTitle/occupancy contains:New Users (This Month), Online Now, Bed Occupancy Rate,
        activeTitle/active contains: Active Users (Today), Consultations (Today), Emergency Cases (Today).

         */}
        <Statistics
          title="User Statistics"
          registeredTitle="Total Users"
          registered={totalUsers}
          occupancyTitle="New Users (This Month)"
          occupancy={newUsers}
          activeTitle="Active Users (Today)"
          active={activeUsers}
        />

        <Statistics
          title="User Statistics"
          registeredTitle="Total Users"
          registered={totalUsers}
          occupancyTitle="New Users (This Month)"
          occupancy={newUsers}
          activeTitle="Active Users (Today)"
          active={activeUsers}
        />

        <Statistics
          title="User Statistics"
          registeredTitle="Total Users"
          registered={totalUsers}
          occupancyTitle="New Users (This Month)"
          occupancy={newUsers}
          activeTitle="Active Users (Today)"
          active={activeUsers}
        />
      </div>
      <div className="w-full flex gap-6">
        <PieCharts />
        <BarCharts />
        <RedarCharts />
      </div>
    </main>
  );
};

export default Admin;
