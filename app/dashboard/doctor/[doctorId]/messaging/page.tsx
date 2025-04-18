"use client";

import { useState } from "react";

const FilerComponent = () => {
  return (
    <div className="p-4 border-b border-gray-300 bg-gray-100 flex-1">
      <h4 className="font-semibold mb-2">Filter Messages</h4>
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date Range
          </label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>Custom Range</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message Type
          </label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>All Types</option>
            <option>Text</option>
            <option>Audio</option>
            <option>Video</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Patient Condition
          </label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>All Conditions</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>All Status</option>
            <option>Unread</option>
            <option>Read</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const ChatListComponent = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <div
      onClick={() => setSelectedChat(1)}
      className={`flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 ${
        selectedChat === 1 ? "bg-indigo-50" : ""
      }`}
    >
      <img
        className="h-10 w-10 rounded-full object-cover"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="User avatar"
      />
      <div className="ml-3 flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-900 truncate">
            Sarah Johnson
          </h2>
          <p className="text-sm text-gray-600 flex-shrink-0 ml-2 whitespace-nowrap">
            10:30 AM
          </p>
        </div>
        <p className="text-sm text-gray-700 truncate">
          Hi Dr. Smith, I've been experiencing severe headaches lately...
        </p>
      </div>
      <div className="flex-shrink-0 ml-2">
        <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
      </div>
    </div>
  );
};

const ChatHeader = () => {
  return (
    <div className="px-6 py-4 bg-white border-b border-gray-300 flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="User avatar"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-900">Sarah Johnson</h2>
          <p className="text-sm text-gray-600">Online</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const MessagingPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 flex overflow-hidden">
        <div className="flex flex-col lg:flex-row flex-1">
          <aside className="lg:w-1/3 border-r border-gray-300 bg-white lg:flex lg:flex-col lg:justify-between flex-shrink-0">
            <div className="p-4 border-b border-gray-300">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search or start new chat"
                  className="w-full px-3 py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="mt-2 w-full bg-indigo-100 text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <i className="fas fa-filter mr-2"></i> Filters
              </button>
            </div>

            {showFilters && <FilerComponent />}

            <div className="overflow-y-auto flex-1 custom-scrollbar">
              <ChatListComponent />
            </div>
          </aside>

          <div className="lg:w-2/3 flex flex-col bg-gray-100 flex-1">
            <ChatHeader />
            <div className="flex-1 overflow-y-auto p-6">
              {/* Chat messages go here */}
            </div>
            <div className="bg-white border-t border-gray-300 p-4 flex items-center">
              <input
                type="text"
                placeholder="Type a message"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="ml-4 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MessagingPage;
