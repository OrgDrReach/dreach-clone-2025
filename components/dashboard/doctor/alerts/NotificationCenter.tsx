"use client";
import React, { useState } from "react";

type Preferences = {
  email: boolean;
  sms: boolean;
  push: boolean;
};

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    email: true,
    sms: false,
    push: true,
  });

  const handleToggle = (type: keyof Preferences) => {
    setPreferences({ ...preferences, [type]: !preferences[type] });
  };

  return (
    <div className="bg-[#ffffff] dark:bg-slate-800 mt-5 shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#125872] dark:text-[#4db7dd] text-2xl font-semibold mb-8">
          Notification Preferences
        </h2>
        <button
          className="bg-[#125872] hover:bg-[#3698bc] text-white font-semibold py-1 px-3 rounded-md shadow-md transition-colors duration-200"
          onClick={() => console.log("Preferences saved:", preferences)}
        >
          Edit
        </button>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span className="dark:text-gray-300 text-gray-800">Email Notifications</span>
          <input
            type="checkbox"
            checked={preferences.email}
            onChange={() => handleToggle("email")}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </li>

        <li className="flex items-center justify-between">
          <span className="dark:text-gray-300 text-gray-800">SMS Notifications</span>
          <input
            type="checkbox"
            checked={preferences.sms}
            onChange={() => handleToggle("sms")}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </li>

        <li className="flex items-center justify-between">
          <span className="dark:text-gray-300 text-gray-800">Push Notifications</span>
          <input
            type="checkbox"
            checked={preferences.push}
            onChange={() => handleToggle("push")}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </li>
      </ul>
    </div>
  );
};

export default NotificationPreferences;
