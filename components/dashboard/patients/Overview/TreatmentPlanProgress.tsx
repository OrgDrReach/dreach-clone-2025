"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaTasks } from 'react-icons/fa';

interface TreatmentGoal {
  name: string;
  target: number;
  current: number;
}

interface TreatmentPlanProgressProps {
  goals: TreatmentGoal[];
}

const TreatmentPlanProgress: React.FC<TreatmentPlanProgressProps> = ({ goals }) => {
  const data = goals.map(goal => ({
    name: goal.name,
    Progress: (goal.current / goal.target) * 100,
    Target: 100,
  }));

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
      <CardHeader className="bg-gradient-to-r  from-[#285b6d] to-[#31addb] text-white rounded-t-lg">
        <CardTitle className="text-xl font-semibold flex items-center">
          <FaTasks className="w-6 h-6 mr-2" />
          Treatment Plan Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Progress" fill="#285b6d" /> {/* blue-500 */}
            <Bar dataKey="Target" fill="#31addb" /> {/* blue-300 */}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TreatmentPlanProgress;