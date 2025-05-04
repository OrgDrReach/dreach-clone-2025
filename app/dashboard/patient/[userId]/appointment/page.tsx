"use client";

// import React, { useState, useEffect } from "react";
// import {
// 	Status,
// 	ProviderInfo,
// 	Reminders,
// 	Upcoming,
// 	Scheduled,
// 	History,
// 	RatingSystem,
// } from "@/components/dashboard/patient/appointments";

// import { motion } from "framer-motion";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { cn } from "@/lib/utils";

// const AppointmentsPage: React.FC = () => {
// 	const [activeTab, setActiveTab] = useState("upcoming");

// 	const handleRatingSubmit = (rating: number, feedback: string) => {
// 		console.log(`Rating: ${rating}, Feedback: ${feedback}`);
// 		// Send to backend if needed
// 	};

// 	const pageVariants = {
// 		initial: { opacity: 0, y: 20 },
// 		in: { opacity: 1, y: 0 },
// 		out: { opacity: 0, y: -20 },
// 	};

// 	return (
// 		<motion.main
// 			className="px-4 py-8 bg-white dark:bg-gray-950/80 rounded-xl border-gray-500"
// 			initial="initial"
// 			animate="in"
// 			exit="out"
// 			variants={pageVariants}
// 			transition={{ duration: 0.5 }}>
// 			<div className="space-y-8">
// 				<h1 className="text-3xl font-bold text-indigo-800">Appointments</h1>

// 				<Tabs
// 					value={activeTab} // controlled Tabs
// 					onValueChange={setActiveTab}
// 					className="w-full">
// 					<TabsList className="flex mb-6 bg-indigo-100 dark:bg-[#125872]/50 p-1 rounded-lg shadow-md">
// 						{["upcoming", "scheduled", "history"].map((tab) => (
// 							<TabsTrigger
// 								key={tab}
// 								value={tab}
// 								className={cn(
// 									"flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all",
// 									"text-indigo-700 hover:bg-indigo-200 hover:text-white dark:hover:text-black",
// 									"data-[state=active]:bg-white data-[state=active]:text-indigo-800 data-[state=active]:shadow-sm"
// 								)}>
// 								{tab.charAt(0).toUpperCase() + tab.slice(1)}
// 							</TabsTrigger>
// 						))}
// 					</TabsList>

// 					<TabsContent value="upcoming">
// 						<div className="space-y-6">
// 							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// 								<div className="lg:col-span-2 rounded-lg">
// 									<Upcoming />
// 								</div>
// 								<div className="rounded-lg shadow-md">
// 									<ProviderInfo
// 										name="Dr. Jane Smith"
// 										specialty="Cardiologist"
// 										bio="Dr. Jane Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions."
// 										credentials={[
// 											"MD from Harvard Medical School",
// 											"Board Certified in Cardiovascular Disease",
// 											"Fellow of the American College of Cardiology",
// 										]}
// 										imageUrl="https://placehold.co/100x100"
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 					</TabsContent>

// 					<TabsContent value="scheduled">
// 						<Scheduled />
// 					</TabsContent>

// 					<TabsContent value="history">
// 						<History />
// 					</TabsContent>
// 				</Tabs>
// 			</div>
// 		</motion.main>
// 	);
// };

// export default AppointmentsPage;

import React, { useState } from "react";
import {
	Status,
	ProviderInfo,
	Reminders,
	Upcoming,
	Scheduled,
	History,
	RatingSystem,
} from "@/components/dashboard/patient/appointments";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const AppointmentsPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState("upcoming");
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className={`container mx-auto px-4 py-8 bg-white dark:bg-gray-950/80 rounded-xl border-gray-500`}>
			<div className={`flex flex-col space-y-8`}>
				{/* Header Section */}
				<div className={`flex items-center justify-between`}>
					<h1 className="text-3xl font-bold text-indigo-800">
						Appointments Page
					</h1>
					<div className={`flex items-center space-x-2 text-sm text-gray-500`}>
						<span>Dashboard</span>
						<span>•</span>
						<span className="text-gray-900 dark:text-gray-100">
							Appointments
						</span>
					</div>
				</div>

				{/* Body */}
				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className={`w-full`}>
					<TabsList className="flex mb-6 bg-indigo-100 dark:bg-[#125872]/50 p-1 rounded-lg shadow-md">
						{["upcoming", "scheduled", "history"].map((tab) => (
							<TabsTrigger
								key={tab}
								value={tab}
								className={cn(
									"flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all",
									"text-indigo-700 hover:bg-indigo-200 hover:text-white dark:hover:text-black",
									"data-[state=active]:bg-white data-[state=active]:text-indigo-800 data-[state=active]:shadow-sm"
								)}>
								{tab.charAt(0).toUpperCase() + tab.slice(1)}
							</TabsTrigger>
						))}
					</TabsList>
					<TabsContent value="upcoming">
						<div className="space-y-6">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
								<div className="lg:col-span-2 rounded-lg">
									<Upcoming />
								</div>
								<div className="rounded-lg shadow-md">
									<ProviderInfo
										name="Dr. Jane Smith"
										specialty="Cardiologist"
										bio="Dr. Jane Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions."
										credentials={[
											"MD from Harvard Medical School",
											"Board Certified in Cardiovascular Disease",
											"Fellow of the American College of Cardiology",
										]}
										imageUrl="https://placehold.co/100x100"
									/>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="scheduled">
						<Scheduled />
					</TabsContent>

					<TabsContent value="history">
						<History />
					</TabsContent>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default AppointmentsPage;
