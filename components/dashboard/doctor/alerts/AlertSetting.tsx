"use client";
import { useState } from "react";

const AlertSettings = () => {
  const [alertType, setAlertType] = useState("Appointment Reminders");
  const [alertFrequency, setAlertFrequency] = useState("Immediately");

  const handleSave = () => {
    // Handle saving settings logic
    console.log("Settings saved:", { alertType, alertFrequency });
  };

  const handleReset = () => {
    setAlertType("Appointment Reminders");
    setAlertFrequency("Immediately");
  };

  return (
    <div className="flex flex-col my-5 gap-6  bg-[#ffffff] dark:bg-slate-800 shadow-md rounded-lg p-8">
      <h2 className="text-[#125872] dark:text-[#4db7dd] text-2xl font-semibold mb-8">Alert Settings</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-500 dark:text-gray-300 font-semibold mb-4">
            Alert Type
          </label>
          <select
            title="select"
            className="w-full border dark:border-gray-400 border-gray-400 rounded-md p-2 dark:text-gray-300 text-gray-600"
            value={alertType}
            onChange={(e) => setAlertType(e.target.value)}
          >
            <option>Appointment Reminders</option>
            <option>Billing Alerts</option>
            <option>General Updates</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-gray-500 dark:text-gray-300 font-semibold mb-4">
            Alert Frequency
          </label>
          <select
            title="select"
            className="w-full border dark:border-gray-400 border-gray-400 rounded-md p-2 dark:text-gray-300 text-gray-600"
            value={alertFrequency}
            onChange={(e) => setAlertFrequency(e.target.value)}
          >
            <option>Immediately</option>
            <option>Daily</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleSave}
          className="bg-[#125872] hover:bg-[#328fb0] text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200"
        >
          Save Settings
        </button>
        <button
          onClick={handleReset}
          className="border border-[#125879]  hover:bg-[#328fb0] text-gray font-bold py-2 px-4 rounded-md shadow-md transition-colors"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default AlertSettings;
