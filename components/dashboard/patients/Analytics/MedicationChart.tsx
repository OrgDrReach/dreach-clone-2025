'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MedicationData {
  name: string;
  effectiveness: number;
  adherence: number;
}

const data: MedicationData[] = [
  { name: "Medication A", effectiveness: 85, adherence: 90 },
  { name: "Medication B", effectiveness: 75, adherence: 95 },
  { name: "Medication C", effectiveness: 90, adherence: 85 },
  { name: "Medication D", effectiveness: 70, adherence: 80 },
];

const MedicationChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="effectiveness" fill="#8884d8" name="Effectiveness" />
        <Bar dataKey="adherence" fill="#82ca9d" name="Adherence" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MedicationChart;