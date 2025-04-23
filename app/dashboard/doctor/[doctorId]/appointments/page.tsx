import React from "react";
import Link from "next/link";
import Image from "next/image";

const FilterAppontments = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4">
      <div className="w-full sm:w-auto">
        <label
          htmlFor="dateFilter"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Filter by Date
        </label>
        <select
          id="dateFilter"
          name="dateFilter"
          className="mt-1 block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 shadow-lg sm:text-sm rounded-md"
        >
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>Last 3 Months</option>
          <option>Custom Range</option>
        </select>
      </div>
      <div className="w-full sm:w-auto mt-4 sm:mt-0">
        <label
          htmlFor="statusFilter"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Filter by Status
        </label>
        <select
          id="statusFilter"
          name="statusFilter"
          className="mt-1 block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white dark:bg-gray-800 shadow-lg rounded-md"
        >
          <option>All</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Rescheduled</option>
          <option>Canceled</option>
          <option>Completed</option>
        </select>
      </div>
    </div>
  );
};

const NewAppontment = () => {
  return (
    <div className="w-full sm:w-auto mt-4 sm:mt-0">
      <button className="bg-indigo-600 text-white w-full sm:w-auto px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <i className="fas fa-plus mr-2"></i>New Appointment
      </button>
    </div>
  );
};

const UpcomingAppointments = () => {
  return (
    <div className="mt-8">
      <h4 className="text-gray-600 dark:text-gray-200 text-lg font-medium">
        Upcoming Appointments
      </h4>
      <div className="mt-4">
        <div className="bg-white dark:bg-slate-700 shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Patient
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-700 divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-200">
                    June 1, 2023 10:00 AM
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt="Patient"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-400">
                        Jane Cooper
                      </div>
                      <div className="text-sm text-gray-200">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-200">Follow-up</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Confirmed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {/* PROVIDE LINK ADDRESS */}
                  <Link
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                  >
                    Edit
                  </Link>
                  {/* PROVIDE LINK ADDRESS */}
                  <Link href="#" className="text-red-600 hover:text-red-900">
                    Cancel
                  </Link>
                </td>
              </tr>
              {/* Repeat for other rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ScheduledAppointments = () => {
  return (
    <div className="mt-8">
      <h4 className="text-gray-600 dark:text-gray-200 text-lg font-medium">
        Scheduled Appointments
      </h4>
      <div className="mt-4">
        <div className="bg-white dark:bg-slate-700 shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Patient
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-700 divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-200">
                    May 30, 2023 2:00 PM
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt="Patient"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-400">
                        John Doe
                      </div>
                      <div className="text-sm text-gray-200">
                        john.doe@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-200">
                    Initial Consultation
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {/* PROVIDE LINK ADDRESS */}
                  <Link
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 mr-3"
                  >
                    Edit
                  </Link>
                  {/* PROVIDE LINK ADDRESS */}
                  <Link href="#" className="text-red-600 hover:text-red-900">
                    Cancel
                  </Link>
                </td>
              </tr>
              {/* Repeat for other rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const RescheduledAppointments = () => {
  return (
    <div className="mt-8">
      <h4 className="text-gray-600 dark:text-gray-200 text-lg font-medium">
        Canceled/Rescheduled Appointments
      </h4>
      <div className="mt-4">
        <div className="bg-white dark:bg-slate-700 shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Original Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Patient
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Reason
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  New Date & Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-700 divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                  May 29, 2023 11:00 AM
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt="Patient"
                        width={40}
                        height={40}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-400">
                        Olivia Wilson
                      </div>
                      <div className="text-sm text-gray-200">
                        olivia.wilson@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                  Personal emergency
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Rescheduled
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                  June 2, 2023 1:00 PM
                </td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const PatientAppointmentHistory = () => {
  return (
    <div className="mt-8">
      <h4 className="text-gray-600 dark:text-gray-200 text-lg font-medium">
        Patient Appointment History
      </h4>
      <div className="mt-4">
        <div className="bg-white dark:bg-slate-700 shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Patient
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-slate-700 divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        alt="Patient"
                        width={40}
                        height={40}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-400">
                        Jane Cooper
                      </div>
                      <div className="text-sm text-gray-200">
                        jane.cooper@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-300">
                    May 15, 2023 9:00 AM
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-gray-300">Follow-up</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Completed
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    View Details
                  </a>
                </td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function appointments() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-gray-700 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-gray-700 dark:text-gray-200 text-2xl sm:text-3xl font-bold">
          Appointments
        </h3>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <FilterAppontments />
          <NewAppontment />
        </div>
        <UpcomingAppointments />
        <ScheduledAppointments />
        <RescheduledAppointments />
        <PatientAppointmentHistory />
      </div>
    </main>
  );
}

export default appointments;
