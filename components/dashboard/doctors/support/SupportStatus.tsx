import React from "react";

interface Status {
  label: string;
  value: number;
  color: string;
}

const statuses: Status[] = [
  { label: "New Requests", value: 5, color: "text-blue-500" },
  { label: "In Progress", value: 3, color: "text-orange-500" },
  { label: "Resolved", value: 12, color: "text-green-500" },
  { label: "Canceled", value: 1, color: "text-red-500" },
];

const SupportStatus: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-semibold text-[#125872] text-start mb-8">
        Support Status
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {statuses.map((status, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{status.label}</h3>
            <p className={`text-3xl font-bold ${status.color}`}>
              {status.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportStatus;
