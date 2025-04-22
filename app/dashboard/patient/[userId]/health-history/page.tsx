"use client";

import React from 'react';
import MedicalTimeline from '@/components/dashboard/patients/health-history/MedicalTimeline';
import PastConditions from '@/components/dashboard/patients/health-history/PastConditions';
import VaccinationRecords from '@/components/dashboard/patients/health-history/VaccinationRecords';
import FamilyHistory from '@/components/dashboard/patients/health-history/FamilyHistory';
import AllergiesLog from '@/components/dashboard/patients/health-history/AllergiesLog';
import PreviousSurgeries from '@/components/dashboard/patients/health-history/PreviousSurgeries';
import ChronicConditions from '@/components/dashboard/patients/health-history/ChronicConditions';
import { mockHealthHistoryData } from '@/data/healthHistoryData';

const HealthHistoryPage: React.FC = () => {
  return (
    <main className="p-6 space-y-6 bg-gradient-to-r from-teal-600 to-sky-800 rounded-xl">
      <h1 className="text-3xl font-bold mb-8 text-white">Health History</h1>
      
      <div className="grid gap-6">
        <MedicalTimeline events={mockHealthHistoryData.timelineEvents} />
        
        <div className="grid md:grid-cols-2 gap-6">
          <PastConditions conditions={mockHealthHistoryData.conditions} />
          <ChronicConditions conditions={mockHealthHistoryData.chronicConditions} />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <AllergiesLog allergies={mockHealthHistoryData.allergies} />
          <VaccinationRecords vaccinations={mockHealthHistoryData.vaccinations} />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <PreviousSurgeries surgeries={mockHealthHistoryData.surgeries} />
          <FamilyHistory conditions={mockHealthHistoryData.familyHistory} />
        </div>
      </div>
    </main>
  );
};

export default HealthHistoryPage;