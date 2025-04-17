"use client";
import { motion } from "framer-motion";

export const VerifyLoading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center space-y-4"
      >
        <div className="w-16 h-16 border-4 border-[#31addb] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-700 font-medium">
          Verifying your mobile number...
        </p>
        <p className="text-sm text-gray-500">This may take a few seconds</p>
      </motion.div>
    </div>
  );
};
