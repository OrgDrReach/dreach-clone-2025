import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-slate-800 p-6 rounded-lg mt-5 shadow-lg">
      <h2 className="text-2xl text-[#125872] dark:text-[#4db7dd] font-semibold mb-4">Contact Us</h2>
      <p className="dark:text-gray-200 text-gray-800 mb-6">
        If you need further assistance, please don't hesitate to contact our
        support team directly:
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-gray-600" />
            <span className="dark:text-gray-200 text-gray-800">
              Email: support@doctordashboard.com
            </span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2 text-gray-600" />
            <span className="dark:text-gray-200 text-gray-800">Phone: +1 (555) 123-4567</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-600" />
            <span className="dark:text-gray-200 text-gray-800">
              Address: 123 Medical Plaza, Healthcare City, 12345
            </span>
          </div>
          <button className="bg-[#125872] hover:bg-[#3698bc] text-white py-2 px-4 rounded w-full sm:w-auto">
            Start Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
