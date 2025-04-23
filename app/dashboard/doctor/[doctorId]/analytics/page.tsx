"use client";

import React from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
);

const TotalPatients = () => {
  return (
    <div className="w-full px-6 sm:w-1/2 xl:w-1/3 rounded-lg overflow-hidden">
      <div className="flex items-center px-5 py-6 shadow-lg hover:shadow-xl transition-shadow rounded-lg bg-white dark:bg-slate-900">
        <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
              fill="currentColor"
            />
            <path
              d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
              fill="currentColor"
            />
            <path
              d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
              fill="currentColor"
            />
            <path
              d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
              fill="currentColor"
            />
            <path
              d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
              fill="currentColor"
            />
            <path
              d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="mx-5">
          <h4 className="text-2xl font-semibold text-gray-700 dark:text-gray-400">8,282</h4>
          <div className="text-gray-500 dark:text-gray-300">Total Patients</div>
        </div>
      </div>
    </div>
  );
};

const TodaysAppointment = () => {
  return (
    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
      <div className="flex items-center px-5 py-6 shadow-lg hover:shadow-xl transition-shadow rounded-lg bg-white dark:bg-slate-900">
        <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
              fill="currentColor"
            />
            <path
              d="M22.4 23.1C22.4 24.2046 21.5046 25.1 20.4 25.1C19.2954 25.1 18.4 24.2046 18.4 23.1C18.4 21.9954 19.2954 21.1 20.4 21.1C21.5046 21.1 22.4 21.9954 22.4 23.1Z"
              fill="currentColor"
            />
            <path
              d="M9.1 25.1C10.2046 25.1 11.1 24.2046 11.1 23.1C11.1 21.9954 10.2046 21.1 9.1 21.1C7.99543 21.1 7.1 21.9954 7.1 23.1C7.1 24.2046 7.99543 25.1 9.1 25.1Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="mx-5">
          <h4 className="text-2xl font-semibold text-gray-700 dark:text-gray-400">200</h4>
          <div className="text-gray-500 dark:text-gray-300">Today's Appointments</div>
        </div>
      </div>
    </div>
  );
};

const PrescriptionIssued = () => {
  return (
    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
      <div className="flex items-center px-5 py-6 shadow-lg hover:shadow-xl transition-shadow rounded-lg bg-white dark:bg-slate-900">
        <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="mx-5">
          <h4 className="text-2xl font-semibold text-gray-700 dark:text-gray-400">215</h4>
          <div className="text-gray-500 dark:text-gray-300">Prescriptions Issued</div>
        </div>
      </div>
    </div>
  );
};

const PatientDemographics = () => {
  const ageData = {
    labels: ["0-18", "19-30", "31-45", "46-60", "61+"],
    datasets: [
      {
        label: "Age Distribution",
        data: [150, 300, 450, 400, 200],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Common options for dark mode compatibility
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid lines in dark mode
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // White text in dark mode
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid lines in dark mode
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // White text in dark mode
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.8)", // White text for legend in dark mode
        },
      },
    },
  };

  const genderData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [45, 53, 2],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  // Options for pie/doughnut charts
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.8)", // White text for legend in dark mode
        },
      },
    },
  };

  const ethnicityData = {
    labels: ["Caucasian", "African American", "Hispanic", "Asian", "Other"],
    datasets: [
      {
        data: [40, 25, 20, 10, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };
  return (
    <div className="mt-8">
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <h2 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Patient Demographics
            </h2>
            <div className="flex">
              <div className="w-1/3 p-4">
                <Bar data={ageData} options={chartOptions} />
              </div>
              <div className="w-1/3 p-4">
                <Pie data={genderData} options={pieOptions} />
              </div>
              <div className="w-1/3 p-4">
                <Doughnut data={ethnicityData} options={pieOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppointmentManagement = () => {
  const scheduleData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Booked Slots",
        data: [80, 90, 85, 95, 75],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Available Slots",
        data: [20, 10, 15, 5, 25],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const sourcesData = {
    labels: ["Online Scheduling", "Phone Calls", "Walk-ins", "Referrals"],
    datasets: [
      {
        data: [50, 30, 10, 10],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };

  // Common options for dark mode compatibility
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid lines in dark mode
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // White text in dark mode
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid lines in dark mode
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // White text in dark mode
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.8)", // White text for legend in dark mode
        },
      },
    },
  };

  // Options for pie/doughnut charts
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.8)", // White text for legend in dark mode
        },
      },
    },
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <h2 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Appointment Scheduling and Management
            </h2>
            <div className="flex">
              <div className="w-1/2 p-4">
                <Bar data={scheduleData} options={chartOptions} />
              </div>
              <div className="w-1/2 p-4">
                <Pie data={sourcesData} options={pieOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrescriptionTracking = () => {
  const topMedicationsData = {
    labels: ["Medication A", "Medication B", "Medication C", "Medication D"],
    datasets: [
      {
        data: [200, 150, 100, 50],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  const complianceData = {
    labels: ["Compliant", "Non-Compliant"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };
  return (
    <div className="mt-8">
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <h2 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prescription Tracking and Compliance
            </h2>
            <div className="flex">
              <div className="w-1/2 p-4">
                <Bar data={topMedicationsData} options={{ responsive: true }} />
              </div>
              <div className="w-1/2 p-4">
                <Doughnut
                  data={complianceData}
                  options={{ responsive: true }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MessagingInsights = () => {
  const responseTimeData = {
    labels: ["0-5 Min", "6-10 Min", "11-15 Min", "16-20 Min", "20+ Min"],
    datasets: [
      {
        data: [30, 40, 20, 5, 5],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const messagingTopicsData = {
    labels: [
      "General Inquiry",
      "Appointment Scheduling",
      "Technical Support",
      "Other",
    ],
    datasets: [
      {
        data: [40, 35, 20, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };
  return (
    <div className="mt-8">
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <h2 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Messaging and Communication Insights
            </h2>
            <div className="flex">
              <div className="w-1/2 p-4">
                <Bar data={responseTimeData} options={{ responsive: true }} />
              </div>
              <div className="w-1/2 p-4">
                <Pie
                  data={messagingTopicsData}
                  options={{ responsive: true }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PatientFlow = () => {
  const patientFlowData = {
    labels: ["New Patients", "Returning Patients"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  const visitFrequencyData = {
    labels: ["Monthly", "Quarterly", "Yearly"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };
  return (
    <div className="mt-8">
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <h2 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Patient Flow and Retention
            </h2>
            <div className="flex">
              <div className="w-1/2 p-4">
                <Pie data={patientFlowData} options={{ responsive: true }} />
              </div>
              <div className="w-1/2 p-4">
                <Bar data={visitFrequencyData} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterAndSort = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <div>
          <label
            htmlFor="dateFilter"
            className="block text-sm font-medium text-gray-700"
          >
            Filter by Date
          </label>
          <select
            id="dateFilter"
            name="dateFilter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="categoryFilter"
            className="block text-sm font-medium text-gray-700"
          >
            Filter by Category
          </label>
          <select
            id="categoryFilter"
            name="categoryFilter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>All Categories</option>
            <option>Demographics</option>
            <option>Appointments</option>
            <option>Prescriptions</option>
            <option>Messaging</option>
            <option>Patient Flow</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="sortOrder"
            className="block text-sm font-medium text-gray-700"
          >
            Sort Order
          </label>
          <select
            id="sortOrder"
            name="sortOrder"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto rounded-lg bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-gray-700 dark:text-gray-200 text-3xl font-medium">Analytics</h3>

        <div className="mt-4">
          <div className="flex flex-wrap -mx-6">
            <TotalPatients />

            <TodaysAppointment />

            <PrescriptionIssued />
          </div>
        </div>

        {/* Patient Demographics */}
        <PatientDemographics />

        {/* Appointment Scheduling and Management */}
        <AppointmentManagement />

        {/* Prescription Tracking and Compliance */}
        <PrescriptionTracking />

        {/* Messaging and Communication Insights */}
        <MessagingInsights />

        {/* Patient Flow and Retention */}
        <PatientFlow />

        {/* Filter and Sort */}
        <FilterAndSort />
      </div>
    </main>
  );
};

export default Analytics;
