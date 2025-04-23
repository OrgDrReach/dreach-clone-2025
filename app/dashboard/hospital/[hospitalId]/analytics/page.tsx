"use client";

import React from "react";
import { HospitalAnalytics } from "@/components/dashboard/hospital/analytics";
import { motion } from "framer-motion";

const AnalyticsPage: React.FC = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto p-6 space-y-6">
			<div className="flex items-center justify-between mb-8">
				<h1 className="text-3xl font-bold">Hospital Analytics</h1>
				<div className="flex items-center space-x-2 text-sm text-gray-500">
					<span>Dashboard</span>
					<span>•</span>
					<span className="text-gray-900 dark:text-gray-100">Analytics</span>
				</div>
			</div>
			<HospitalAnalytics />
		</motion.main>
	);
};

export default AnalyticsPage;
