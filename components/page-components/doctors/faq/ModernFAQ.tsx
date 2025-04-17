"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I book an appointment with a doctor?",
    answer:
      "You can book an appointment through our platform in three simple steps: 1) Search for a doctor based on specialty or symptoms, 2) Select your preferred time slot, and 3) Fill in your details and confirm the booking. You'll receive an instant confirmation via email and SMS.",
    category: "Appointments",
  },
  {
    question: "What happens if I need to reschedule my appointment?",
    answer:
      "You can reschedule your appointment up to 4 hours before the scheduled time through your dashboard. Simply select a new time slot and confirm. There are no charges for rescheduling if done within this timeframe.",
    category: "Appointments",
  },
  {
    question: "Are video consultations as effective as in-person visits?",
    answer:
      "Video consultations are effective for many conditions and follow-ups. Our doctors are trained in telemedicine and will recommend an in-person visit if they feel it's necessary for proper diagnosis or treatment.",
    category: "Online Consultations",
  },
  {
    question: "How are the doctors verified on your platform?",
    answer:
      "All doctors on our platform go through a rigorous verification process. We verify their medical licenses, professional experience, and credentials. We also collect and monitor patient feedback to ensure quality care.",
    category: "Doctors",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, net banking, UPI, and popular digital wallets. All payments are processed securely through our encrypted payment gateway.",
    category: "Payments",
  },
];

const ModernFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(faqData.map((item) => item.category))),
  ];

  const filteredFAQs = faqData.filter((faq) =>
    selectedCategory === "all" ? true : faq.category === selectedCategory,
  );

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about our medical services and
          platform
        </p>
      </motion.div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-[#30acda] text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="grid gap-4 max-w-3xl mx-auto">
        {filteredFAQs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-[#30acda]">
                  <FaQuestionCircle size={20} />
                </span>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
              </div>
              <span className="text-[#30acda] flex-shrink-0">
                {activeIndex === index ? (
                  <FaMinus size={16} />
                ) : (
                  <FaPlus size={16} />
                )}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-gray-100 dark:border-gray-700"
                >
                  <div className="px-6 py-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ModernFAQ;
