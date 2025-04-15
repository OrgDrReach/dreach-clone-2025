"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import {
  BarChart3,
  Calendar,
  FolderArchive,
  Pill,
  Microscope,
  CreditCard,
  MessageSquare,
  Store,
} from "lucide-react";

interface DashboardDataItem {
  icon: ReactNode;
  id: number;
  title: string;
  description: string;
}

const dashboardData: DashboardDataItem[] = [
  {
    id: 1,
    title: "Overview",
    description: "Track your health metrics at a glance",
    icon: (
      <BarChart3
        className="w-8 h-8 text-[#125872] dark:text-[#31addb] group-hover:text-[#31addb] transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 2,
    title: "Appointments",
    description: "Schedule and manage your visits",
    icon: (
      <Calendar
        className="w-8 h-8 text-[#125872] dark:text-[#31addb] group-hover:text-[#31addb] transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 3,
    title: "Medical Records",
    description: "Access your health history",
    icon: (
      <FolderArchive
        className="w-8 h-8 text-[#125872] dark:text-[#31addb] group-hover:text-[#31addb] transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 4,
    title: "Prescriptions",
    description: "View and manage medications",
    icon: (
      <Pill
        className="w-8 h-8 text-[#125872] dark:text-[#31addb] group-hover:text-[#31addb] transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 5,
    title: "Lab Results",
    description: "Check your test results",
    icon: (
      <Microscope
        className="w-8 h-8 text-[#125872] dark:text-[#31addb] group-hover:text-[#31addb] transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 6,
    title: "Billing",
    description: "Manage payments and insurance",
    icon: (
      <CreditCard
        className="w-8 h-8 text-[#125872] dark:text-[#31addb] group-hover:text-[#31addb] transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 7,
    title: "Messages",
    description: "Communicate with your care team",
    icon: (
      <MessageSquare
        className="w-8 h-8 text-[#125872] dark:text-[#31addb] group-hover:text-[#31addb] transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 8,
    title: "Pharmacy",
    description: "Order and track medications",
    icon: (
      <Store
        className="w-8 h-8 text-[#125872] dark:text-[#31addb] group-hover:text-[#31addb] transition-colors duration-300"
        strokeWidth={1.5}
      />
    ),
  },
];

const ServiceContext: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstElementChild as HTMLElement;
    if (!scrollContent) return;

    const scrollWidth = scrollContent.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;

    const animateScroll = () => {
      if (scrollContainer.scrollLeft >= scrollWidth - containerWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      requestAnimationFrame(animateScroll);
    };

    const animationId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 px-4 lg:px-24">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 shadow-lg">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#125872] to-[#31addb] dark:from-[#31addb] dark:to-[#125872] text-transparent bg-clip-text">
            Patient Dashboard
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Your comprehensive health management hub - everything you need in
            one place
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardData.map((info) => (
              <div
                key={info.id}
                className="group p-6 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-slate-100/80 dark:bg-slate-700/50 group-hover:bg-[#125872]/10 dark:group-hover:bg-[#31addb]/10 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">
                    {info.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div ref={scrollRef} className="overflow-hidden">
            <div className="flex gap-4">
              {[...dashboardData, ...dashboardData].map((info, index) => (
                <div
                  key={`${info.id}-${index}`}
                  className="flex-shrink-0 w-48 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-2 rounded-full bg-slate-100/80 dark:bg-slate-700/50">
                      {info.icon}
                    </div>
                    <h3 className="font-medium text-slate-800 dark:text-slate-100">
                      {info.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContext;
