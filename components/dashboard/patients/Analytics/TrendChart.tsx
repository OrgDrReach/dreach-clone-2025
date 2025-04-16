'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TrendData {
  date: string;
  bloodPressure: number;
  glucoseLevels: number;
}

const data: TrendData[] = [
  { date: '2023-01-01', bloodPressure: 120, glucoseLevels: 95 },
  { date: '2023-02-01', bloodPressure: 118, glucoseLevels: 92 },
  { date: '2023-03-01', bloodPressure: 122, glucoseLevels: 98 },
  { date: '2023-04-01', bloodPressure: 119, glucoseLevels: 94 },
  { date: '2023-05-01', bloodPressure: 121, glucoseLevels: 96 },
];

const TrendChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Line yAxisId="left" type="monotone" dataKey="bloodPressure" stroke="#8884d8" name="Blood Pressure" />
        <Line yAxisId="right" type="monotone" dataKey="glucoseLevels" stroke="#82ca9d" name="Glucose Levels" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrendChart;