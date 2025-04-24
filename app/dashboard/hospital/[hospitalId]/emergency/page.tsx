"use client";

import React from "react";
import { motion } from "framer-motion";
import { EmergencyManagement } from "@/components/dashboard/hospital/emergency";
import { Card, CardContent } from "@/components/ui/card";

const PharmacyPage: React.FC = () => {
	return (
		<motion.main
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto p-6 space-y-6">
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-3xl font-bold tracking-tight">
					Emergency Management System
				</h1>
			</div>

			<Card className="border-none shadow-none bg-transparent">
				<CardContent className="p-0">
					<EmergencyManagement />
				</CardContent>
			</Card>
		</motion.main>
	);
};

export default PharmacyPage;
