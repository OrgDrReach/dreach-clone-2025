"use client";
import { FC } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Patient Visits",
      data: [65, 59, 80, 81, 64, 70],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.4,
    },
  ],
};

const PatientVisitsChart: FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg my-5 shadow-md">
      <h2 className=" text-[#125872] text-2xl mb-5 font-semibold">
        Patient Visits Trend
      </h2>
      <Line options={options} data={data} />
    </div>
  );
};

export default PatientVisitsChart;
