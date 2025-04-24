"use client";

import React from "react";
import { FacilityManagement } from "@/components/dashboard/hospital/facilities";
import { motion } from "framer-motion";

interface FacilitiesPageProps {
	params: {
		hospitalId: string;
	};
}

export default function FacilitiesPage({ params }: FacilitiesPageProps) {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto p-6 space-y-6">
			<div className="flex items-center justify-between mb-8">
				<div className={`flex flex-col space-y-2`}>
					<h1 className="text-3xl font-bold">Facility Management</h1>
					<p className="text-muted-foreground">
						Monitor and manage your hospital facilities, equipment, and
						infrastructure.
					</p>
				</div>
				<div className="flex items-center space-x-2 text-sm text-gray-500">
					<span>Dashboard</span>
					<span>•</span>
					<span className="text-gray-900 dark:text-gray-100">Facilities</span>
				</div>
			</div>
			<FacilityManagement />
		</motion.main>
	);
}
