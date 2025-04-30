"use client";

import React from "react";
import { motion } from "framer-motion";
import { DoctorManagement } from "@/components/dashboard/hospital/doctors/DoctorManagement";

const DoctorsPage: React.FC = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="max-w-[1920px] mx-auto p-4 lg:p-6 min-h-screen rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
			<header className="mb-8">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<h1 className="text-2xl sm:text-3xl font-bold">Doctor Management</h1>
					<nav className="flex items-center space-x-2 text-sm text-gray-500">
						<span>Dashboard</span>
						<span className="text-gray-400">•</span>
						<span className="text-gray-900 dark:text-gray-100">Doctors</span>
					</nav>
				</div>
				<p className="mt-2 text-gray-500 dark:text-gray-400">
					Manage doctors, schedules, and performance metrics
				</p>
			</header>

			{/* Content */}
			<div className="mb-8">
				<DoctorManagement />
			</div>
		</motion.main>
	);
};

export default DoctorsPage;
