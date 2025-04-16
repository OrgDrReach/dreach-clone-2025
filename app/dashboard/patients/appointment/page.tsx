"use client";

import React, { Suspense, useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { Status, ProviderInfo } from "@/components/dashboard/patients/appointments";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Dynamically import client components with loading fallbacks
const DynamicReminders = dynamic(() => import('@/components/dashboard/patients/appointments/Reminders'), { 
  loading: () => <Skeleton className="h-[300px] w-full" />,
  ssr: false 
});
const DynamicUpcoming = dynamic(() => import('@/components/dashboard/patients/appointments/Upcoming'), { 
  loading: () => <Skeleton className="h-[300px] w-full" />,
  ssr: false 
});
const DynamicScheduled = dynamic(() => import('@/components/dashboard/patients/appointments/Scheduled'), { 
  loading: () => <Skeleton className="h-[300px] w-full" />,
  ssr: false 
});
const DynamicBooking = dynamic(() => import('@/components/dashboard/patients/appointments/Booking'), { 
  loading: () => <Skeleton className="h-[300px] w-full" />,
  ssr: false 
});
const DynamicHistory = dynamic(() => import('@/components/dashboard/patients/appointments/History'), { 
  loading: () => <Skeleton className="h-[300px] w-full" />,
  ssr: false 
});
const DynamicRatingSystem = dynamic(() => import('@/components/dashboard/patients/appointments/RatingSystem'), { 
  loading: () => <Skeleton className="h-[300px] w-full" />,
  ssr: false 
});

const AppointmentsPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState("upcoming");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading delay
		const timer = setTimeout(() => setIsLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	const handleRatingSubmit = (rating: number, feedback: string) => {
		console.log(`Rating: ${rating}, Feedback: ${feedback}`);
		// Here you would typically send this data to your backend
	};

	const pageVariants = {
		initial: { opacity: 0, y: 20 },
		in: { opacity: 1, y: 0 },
		out: { opacity: 0, y: -20 }
	};

	return (
		<motion.main
			className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-indigo-50"
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={{ duration: 0.5 }}
		>
			{isLoading ? (
				<Skeleton className="h-[600px] w-full" />
			) : (
				<div className="space-y-8">
					<h1 className="text-3xl font-bold text-indigo-800">Appointments</h1>
					<Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
						<TabsList className="flex mb-6 bg-indigo-100 p-1 rounded-lg shadow-md">
							{["upcoming", "scheduled", "history"].map((tab) => (
								<TabsTrigger
									key={tab}
									value={tab}
									className={cn(
										"flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all",
										"text-indigo-700 hover:bg-indigo-200",
										"data-[state=active]:bg-white data-[state=active]:text-indigo-800 data-[state=active]:shadow-sm"
									)}
								>
									{tab.charAt(0).toUpperCase() + tab.slice(1)}
								</TabsTrigger>
							))}
						</TabsList>
						
						<TabsContent value="upcoming">
							<div className="space-y-6">
								<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
									<div className="lg:col-span-2  rounded-lg  ">
										<Suspense fallback={<Skeleton className=" w-full" />}>
											<DynamicUpcoming />
										</Suspense>
									</div>
									<div className="bg-white rounded-lg shadow-md">
										<ProviderInfo
											name='Dr. Jane Smith'
											specialty='Cardiologist'
											bio='Dr. Jane Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions.'
											credentials={[
												"MD from Harvard Medical School",
												"Board Certified in Cardiovascular Disease",
												"Fellow of the American College of Cardiology",
											]}
											imageUrl='https://placehold.co/100x100'
										/>
									</div>
								</div>
								<div className="bg-white rounded-lg shadow-md ">
									<Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
										<DynamicBooking />
									</Suspense>
								</div>
							</div>
						</TabsContent>
						
						<TabsContent value="scheduled">
							<Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
								<DynamicScheduled />
							</Suspense>
						</TabsContent>
						<TabsContent value="history">
							<Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
								<DynamicHistory />
							</Suspense>
						</TabsContent>
					</Tabs>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="bg-white rounded-lg shadow-md ">
							<Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
								<DynamicReminders />
							</Suspense>
						</div>
						<div className="h-[300px] rounded-lg ">
							<Suspense fallback={<Skeleton className=" w-full h-[300px]" />}>
								<DynamicRatingSystem onSubmit={handleRatingSubmit} />
							</Suspense>
						</div>
					</div>
				</div>
			)}
		</motion.main>
	);
};

export default AppointmentsPage;
