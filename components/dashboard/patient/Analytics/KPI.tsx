import React from "react";

interface KPIProps {
  title: string;
  value: string | number;
  unit?: string;
}

const KPI: React.FC<KPIProps> = ({ title, value, unit }) => (
  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-4 text-white transition-transform duration-300 hover:-translate-y-1">
    <h3 className="text-sm font-medium mb-2">{title}</h3>
    <div className="text-2xl font-bold">
      {value}
      {unit && <span className="text-xs ml-1">{unit}</span>}
    </div>
  </div>
);

export default KPI;
