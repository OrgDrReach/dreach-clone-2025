import React from "react";


const ResetPassword = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">
        Password Change/Reset
      </h4>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="current-password"
          >
            Current Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="current-password"
            type="password"
            placeholder="Enter current password"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="new-password"
          >
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="new-password"
            type="password"
            placeholder="Enter new password"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Confirm new password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

const TimeZoneSettings = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">
        Time Zone and Language Settings
      </h4>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="timezone"
        >
          Time Zone
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="timezone"
        >
          <option>UTC-5 (Eastern Time)</option>
          <option>UTC-6 (Central Time)</option>
          <option>UTC-7 (Mountain Time)</option>
          <option>UTC-8 (Pacific Time)</option>
          <option>UTC+0 (Greenwich Mean Time)</option>
          <option>UTC+1 (Central European Time)</option>
          <option>UTC+8 (China Standard Time)</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="language"
        >
          Language
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="language"
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Chinese</option>
        </select>
      </div>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Save Changes
      </button>
    </div>
  );
};

const SecuritySettings = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">
        Security Settings
      </h4>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Enable Two-Factor Authentication
          </span>
        </label>
      </div>
      <div className="mb-4">
        <h5 className="text-gray-700 font-bold mb-2">
          Password Strength Requirements
        </h5>
        <ul className="list-disc list-inside text-gray-600">
          <li>Minimum 8 characters</li>
          <li>At least one uppercase letter</li>
          <li>At least one lowercase letter</li>
          <li>At least one number</li>
          <li>At least one special character</li>
        </ul>
      </div>
      <div className="mb-4">
        <h5 className="text-gray-700 font-bold mb-2">
          Account Lockout Settings
        </h5>
        <p className="text-gray-600">
          Account will be locked after 5 failed login attempts. Contact support
          to unlock.
        </p>
      </div>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Update Security Settings
      </button>
    </div>
  );
};

const DeactivateComponent = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">
        Leave Platform
      </h4>
      <p className="text-gray-600 mb-4">
        Warning: Deactivating your account will remove all your data from our
        platform. This action cannot be undone.
      </p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Deactivate Account
      </button>
    </div>
  );
};

const GeneralSettings = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">
        General Settings
      </h4>
      <div className="mb-4">
        <h5 className="text-gray-700 font-bold mb-2">
          Notification Preferences
        </h5>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">Email Notifications</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">In-App Notifications</span>
        </label>
      </div>
      <div className="mb-4">
        <h5 className="text-gray-700 font-bold mb-2">Data Sharing Settings</h5>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-gray-700">
            Share patient data with third-party services
          </span>
        </label>
      </div>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Save General Settings
      </button>
    </div>
  );
};

const Settings: React.FC = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 text-3xl font-medium">Settings</h3>

        <div className="mt-8">
          {/* Section 1: Password Change/Reset */}
          <ResetPassword />

          {/* Section 2: Time Zone and Language Settings */}
          <TimeZoneSettings />

          {/* Section 3: Security Settings */}
          <SecuritySettings />

          {/* Section 4: Leave Platform */}
          <DeactivateComponent />

          {/* Section 5: General Settings */}
          <GeneralSettings />
        </div>
      </div>
    </main>
  );
};

export default Settings;
