import React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[#089dd4] text-3xl font-bold">{value}</span>
      <span className="text-gray-500 font-semibold mt-2">{label}</span>
    </div>
  );
};

const PatientStatistics: React.FC = () => {
  const stats = [
    { label: "Total Patients", value: "1,254" },
    { label: "New Patients (This Month)", value: 78 },
    { label: "Patient Satisfaction", value: "92%" },
    { label: "Avg. Daily Appointments", value: 45 },
  ];

  return (
    <div className=" flex items-center my-5 justify-center shadow-md">
      <div className="bg-white rounded-lg shadow p-8 w-full ">
        <h2 className="text-[#125872] text-2xl font-semibold mb-8">
          Patient Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientStatistics;
