import React from "react";
import { FaExclamationCircle, FaClock, FaCheckCircle } from "react-icons/fa";

type Alert = {
  id: number;
  type: "emergency" | "appointment" | "lab";
  message: string;
  time: string;
};

const alerts: Alert[] = [
  {
    id: 1,
    type: "emergency",
    message: "Emergency Alert: Patient John Doe needs immediate assistance",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "appointment",
    message: "Appointment Reminder: Dr. Smith with Patient Jane Doe at 2:00 PM",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "lab",
    message: "Lab Results: Patient Mike Johnson's blood test results are ready",
    time: "3 hours ago",
  },
];

const AlertIcon = ({ type }: { type: "emergency" | "appointment" | "lab" }) => {
  switch (type) {
    case "emergency":
      return <FaExclamationCircle className="text-red-500 text-xl" />;
    case "appointment":
      return <FaClock className="text-yellow-500 text-xl" />;
    case "lab":
      return <FaCheckCircle className="text-green-500 text-xl" />;
    default:
      return null;
  }
};

const RecentAlerts = () => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800">Recent Alerts</h2>
      <ul className="space-y-2">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-md"
          >
            <div className="mt-1">
              <AlertIcon type={alert.type} />
            </div>
            <div>
              <p className="text-gray-800 font-medium">{alert.message}</p>
              <p className="text-gray-500 text-sm">{alert.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <a
          href="/alerts"
          className="text-[#125872] hover:text-[#125872] font-medium transition-colors duration-200"
        >
          View all alerts
        </a>
      </div>
    </div>
  );
};

export default RecentAlerts;
