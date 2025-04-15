"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaClinicMedical, FaUserMd, FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: FaUserMd,
    title: "Expert Specialists",
    description: "Access to over 1,000+ verified medical specialists",
    bgColor: "from-[#125872]/10 to-[#32addb]/5",
  },
  {
    icon: FaVideo,
    title: "Flexible Consultations",
    description: "Choose between online or in-person appointments",
    bgColor: "from-[#125872]/5 to-[#32addb]/10",
  },
  {
    icon: FaClinicMedical,
    title: "Quality Care",
    description: "Highly rated healthcare with 4.9/5 patient satisfaction",
    bgColor: "from-[#125872]/10 to-[#32addb]/5",
  },
];

const avatars = [
  {
    src: "https://randomuser.me/api/portraits/women/1.jpg",
    alt: "Patient Sarah",
    status: "online",
  },
  {
    src: "https://randomuser.me/api/portraits/men/2.jpg",
    alt: "Patient Michael",
    status: "online",
  },
  {
    src: "https://randomuser.me/api/portraits/women/3.jpg",
    alt: "Patient Emma",
    status: "offline",
  },
];

const DoctorCTA = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#125872]/5 to-[#32addb]/5 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#125872]/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-[#125872] dark:bg-[#32addb] p-2 rounded-lg"
              >
                <FaStar className="w-6 h-6 text-white" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#125872] dark:text-[#32addb] font-semibold"
              >
                Top-Rated Healthcare Platform
              </motion.span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#125872] dark:text-[#32addb] mb-4 leading-tight">
              Find Your Perfect Doctor
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Connect with top-rated specialists who provide exceptional care.
              Book appointments that fit your schedule.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm rounded-xl p-6 text-center 
                    shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div
                    className="w-14 h-14 bg-[#125872] dark:bg-[#32addb] rounded-xl flex items-center justify-center mx-auto mb-4 
                    shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#125872] dark:text-[#32addb] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center space-y-6">
              <Link
                href="/doctors"
                className="group relative inline-flex items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#125872] dark:bg-[#32addb] text-white rounded-xl
                    shadow-lg hover:shadow-xl transition-all duration-300 font-semibold 
                    flex items-center gap-3 relative overflow-hidden group"
                >
                  <span className="relative z-10">Explore All Doctors</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </motion.button>
              </Link>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="flex -space-x-2">
                  {avatars.map((avatar, i) => (
                    <div key={i} className="relative">
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 object-cover"
                      />
                      <span
                        className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-gray-900 
                        ${avatar.status === "online" ? "bg-green-400" : "bg-gray-400"}`}
                      />
                    </div>
                  ))}
                  <div
                    className="w-8 h-8 rounded-full bg-[#125872] dark:bg-[#32addb] border-2 border-white dark:border-gray-900 
                    flex items-center justify-center text-xs text-white font-medium"
                  >
                    +47k
                  </div>
                </div>
                <span className="font-medium">
                  Joined by{" "}
                  <span className="text-[#125872] dark:text-[#32addb]">
                    50,000+
                  </span>{" "}
                  patients
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorCTA;
