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
			className="container mx-auto p-6 space-y-6">
			<div className="flex items-center justify-between mb-8">
				<h1 className="text-3xl font-bold">Doctor Management</h1>
				<div className="flex items-center space-x-2 text-sm text-gray-500">
					<span>Dashboard</span>
					<span>•</span>
					<span className="text-gray-900 dark:text-gray-100">Doctors</span>
				</div>
			</div>
			<DoctorManagement />
		</motion.main>
	);
};

export default DoctorsPage;
