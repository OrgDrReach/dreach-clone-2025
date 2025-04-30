"use client";

import React from "react";
import { HospitalPerformance } from "@/components/dashboard/hospital/performance";
import { motion } from "framer-motion";

const PerformancePage: React.FC = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto p-6 space-y-6 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
			<div className="flex items-center justify-between mb-8">
				<h1 className="text-3xl font-bold">Hospital Performance</h1>
				<div className="flex items-center space-x-2 text-sm text-gray-500">
					<span>Dashboard</span>
					<span>•</span>
					<span className="text-gray-900 dark:text-gray-100">Performance</span>
				</div>
			</div>
			<HospitalPerformance />
		</motion.main>
	);
};

export default PerformancePage;
