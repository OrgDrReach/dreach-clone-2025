"use client";

import React from "react";
import ReportManagement from "@/components/dashboard/hospital/reports/ReportManagement";
import { motion } from "framer-motion";

const ReportsPage: React.FC = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto p-6 space-y-6">
			<div className="flex items-center justify-between mb-8">
				<h1 className="text-3xl font-bold">Hospital Reports</h1>
				<div className="flex items-center space-x-2 text-sm text-gray-500">
					<span>Dashboard</span>
					<span>•</span>
					<span className="text-gray-900 dark:text-gray-100">Reports</span>
				</div>
			</div>
			<ReportManagement />
		</motion.main>
	);
};

export default ReportsPage;
