"use client";

import React from "react";
import AccordionStyle from "./AccordionStyle";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 -z-10" />

      {/* Content Container */}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#125872] dark:text-[#56d2ff] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our medical services
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/websiteImages/doctor-and-patient.png"
                alt="Doctor and Patient"
                className="w-full h-auto"
              />

              {/* Stats Card */}
              <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-800/95 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
                    <span className="text-2xl">😊</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#125872] dark:text-[#56d2ff]">
                      84k+
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Happy Patients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AccordionStyle />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
