"use client";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaChartLine } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LabResult {
  date: string;
  bloodPressure: number;
  glucoseLevel: number;
}

interface LabResultsProps {
  results: LabResult[];
}

const LabResults: React.FC<LabResultsProps> = ({ results }) => {
  const data = {
    labels: results.map((result) => result.date),
    datasets: [
      {
        label: "Blood Pressure",
        data: results.map((result) => result.bloodPressure),
        borderColor: "rgb(18, 88, 114)", // primary-500
        backgroundColor: "rgba(18, 88, 114, 0.5)",
      },
      {
        label: "Glucose Level",
        data: results.map((result) => result.glucoseLevel),
        borderColor: "rgb(51, 135, 191)", // primary-400
        backgroundColor: "rgba(51, 135, 191, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ">
      <CardHeader className="bg-gradient-to-r  from-[#285b6d] to-[#31addb] text-white rounded-t-lg">
        <CardTitle className="text-xl font-semibold flex items-center">
          <FaChartLine className="w-6 h-6 mr-2" />
          Lab Results
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Line options={options} data={data} />
      </CardContent>
    </Card>
  );
};

export default LabResults;
