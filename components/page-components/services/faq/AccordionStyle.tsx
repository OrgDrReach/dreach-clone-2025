"use client";

import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";

interface Question {
  id: number;
  title: string;
  details: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Why choose our medical for your family?",
    category: "General",
    details:
      "We provide comprehensive family healthcare with a personal touch. Our experienced medical professionals are dedicated to delivering quality care, using state-of-the-art technology while maintaining a warm, family-friendly environment.",
  },
  {
    id: 2,
    title: "What makes us different from others?",
    category: "Services",
    details:
      "Our unique approach combines cutting-edge medical expertise with personalized care. We offer flexible scheduling, telemedicine options, and a patient-first philosophy that ensures every family member receives the attention they deserve.",
  },
  {
    id: 3,
    title: "Trusted & experienced senior care & love",
    category: "Care",
    details:
      "Our senior care specialists bring decades of experience in geriatric medicine. We understand the unique needs of elderly patients and provide compassionate, comprehensive care that includes regular check-ups, medication management, and lifestyle guidance.",
  },
  {
    id: 4,
    title: "How to get appointment for emergency cases?",
    category: "Appointments",
    details:
      "For emergencies, we offer 24/7 priority scheduling. Simply call our emergency hotline or use our online booking system marked 'Emergency'. We ensure urgent cases are seen promptly, with minimal waiting time.",
  },
];

const categories = Array.from(new Set(questions.map((q) => q.category)));

// Memoized Category Button
const CategoryButton = memo(
  ({
    category,
    isSelected,
    onClick,
  }: {
    category: string;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`
      px-4 py-1.5 text-xs font-medium rounded-full
      transition-all duration-300
      ${
        isSelected
          ? "bg-[#2AA7F5] text-white shadow-sm"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300"
      }
    `}
    >
      {category}
    </button>
  ),
);

CategoryButton.displayName = "CategoryButton";

// Memoized FAQ Item
const FAQItem = memo(
  ({
    question,
    isActive,
    onToggle,
  }: {
    question: Question;
    isActive: boolean;
    onToggle: () => void;
  }) => (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`
      border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden
      transition-all duration-300
      ${
        isActive
          ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700"
          : "bg-white dark:bg-slate-900"
      }
    `}
    >
      <button
        onClick={onToggle}
        className={`
        w-full flex items-center justify-between p-4 text-left
        transition-all duration-300
        ${
          isActive
            ? "text-[#2AA7F5]"
            : "text-gray-900 dark:text-white hover:text-[#2AA7F5]"
        }
      `}
      >
        <span className="font-medium pr-4">{question.title}</span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300
          ${isActive ? "rotate-180 text-[#2AA7F5]" : "text-gray-400"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="overflow-hidden"
          >
            <div className="p-4 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
              {question.details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ),
);

FAQItem.displayName = "FAQItem";

export default function ModernFAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setActiveId(null); // Reset active question when searching
  }, []);

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
    setActiveId(null); // Reset active question when changing category
  }, []);

  const toggleQuestion = useCallback((id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  }, []);

  const filteredQuestions = React.useMemo(
    () =>
      questions.filter((question) => {
        const matchesSearch =
          question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          question.details.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "All" || question.category === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    [searchTerm, selectedCategory],
  );

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="relative mb-6 group">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 
          text-gray-400 group-focus-within:text-[#2AA7F5] transition-colors"
        />
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full h-10 pl-10 pr-4 text-sm rounded-lg border border-gray-200 
                   dark:border-gray-700 dark:bg-slate-800 dark:text-white
                   focus:ring-2 focus:ring-[#2AA7F5] focus:border-transparent
                   transition-all duration-200"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", ...categories].map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => handleCategorySelect(category)}
          />
        ))}
      </div>

      {/* FAQ List */}
      <motion.div layout className="space-y-3">
        <AnimatePresence mode="wait">
          {filteredQuestions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-8 text-gray-500"
            >
              No matching questions found
            </motion.div>
          ) : (
            filteredQuestions.map((question) => (
              <FAQItem
                key={question.id}
                question={question}
                isActive={activeId === question.id}
                onToggle={() => toggleQuestion(question.id)}
              />
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
