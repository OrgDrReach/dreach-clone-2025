"use client";

import React, { useState } from "react";
import PlanOverview from "@/components/dashboard/patients/TreatmentPlan/PlanOverview";
import MedicationPlans from "@/components/dashboard/patients/TreatmentPlan/MedicationPlans";
import TherapyPlans from "@/components/dashboard/patients/TreatmentPlan/TherapyPlans";
import DietaryPlans from "@/components/dashboard/patients/TreatmentPlan/DietaryPlans";
import ExercisePlans from "@/components/dashboard/patients/TreatmentPlan/ExercisePlans";
import MentalHealthPlans from "@/components/dashboard/patients/TreatmentPlan/MentalHealthPlans";
import ProgressTracking from "@/components/dashboard/patients/TreatmentPlan/ProgressTracking";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, Activity, Utensils, Dumbbell, Brain } from "lucide-react";
import Confetti from "react-confetti";

const TreatmentPlanPage: React.FC = () => {
	const [showConfetti, setShowConfetti] = useState(false);
	const [activeTab, setActiveTab] = useState("overview");

	// Mock data for demonstration
	const mockData = {
		goals: [
			{
				id: "1",
				description: "Reduce blood pressure to below 130/80 mmHg",
				status: "In Progress" as const,
				progress: 60,
			},
			{
				id: "2",
				description: "Achieve HbA1c level of 7% or lower",
				status: "Not Started" as const,
				progress: 0,
			},
			{
				id: "3",
				description: "Increase daily physical activity to 30 minutes",
				status: "Achieved" as const,
				progress: 100,
			},
			{
				id: "4",
				description: "Maintain a balanced diet with reduced sodium intake",
				status: "In Progress" as const,
				progress: 75,
			},
		],
		outcomes: [
			{
				id: "1",
				description: "Improved cardiovascular health",
				timeline: "6 months",
			},
			{ id: "2", description: "Better glucose control", timeline: "3 months" },
			{
				id: "3",
				description: "Weight reduction of 5-10%",
				timeline: "6-12 months",
			},
			{
				id: "4",
				description: "Enhanced overall well-being and quality of life",
				timeline: "Ongoing",
			},
		],
		medicationPlans: [
			{
				id: "1",
				name: "Lisinopril",
				dosage: "10mg",
				frequency: "Once daily",
				duration: "Ongoing",
				status: "Active" as const,
			},
			{
				id: "2",
				name: "Metformin",
				dosage: "500mg",
				frequency: "Twice daily",
				duration: "3 months",
				status: "Active" as const,
			},
			{
				id: "3",
				name: "Atorvastatin",
				dosage: "20mg",
				frequency: "Once daily at bedtime",
				duration: "6 months",
				status: "Upcoming" as const,
			},
			{
				id: "4",
				name: "Aspirin",
				dosage: "81mg",
				frequency: "Once daily",
				duration: "Completed",
				status: "Completed" as const,
			},
		],
		therapyPlans: [
			{
				id: "1",
				name: "Lower Back Pain Rehabilitation",
				date: "2023-06-01",
				type: "Physical" as const,
				status: "Active" as const,
				goals: [
					"Reduce lower back pain intensity",
					"Improve core strength and stability",
					"Increase flexibility in lower back and hips",
				],
				objectives: [
					"Complete daily stretching routine",
					"Perform core strengthening exercises 3 times per week",
					"Gradually increase walking distance to 30 minutes per day",
				],
			},
			{
				id: "2",
				name: "Hand Dexterity Improvement",
				date: "2023-07-15",
				type: "Occupational" as const,
				status: "Upcoming" as const,
				goals: [
					"Improve fine motor skills",
					"Increase hand strength",
					"Enhance ability to perform daily tasks independently",
				],
				objectives: [
					"Practice handwriting exercises for 15 minutes daily",
					"Use therapy putty for hand strengthening exercises",
					"Perform daily living tasks with affected hand under supervision",
				],
			},
			{
				id: "3",
				name: "Speech Clarity Enhancement",
				date: "2023-05-01",
				type: "Speech" as const,
				status: "Completed" as const,
				goals: [
					"Improve speech clarity and articulation",
					"Increase confidence in verbal communication",
					"Enhance breath support for speech",
				],
				objectives: [
					"Practice articulation exercises daily",
					"Engage in conversation practice with a partner for 30 minutes per day",
					"Perform breathing exercises to support speech production",
				],
			},
		],
		dietaryPlans: [
			{
				id: "1",
				name: "Mediterranean Diet Plan",
				date: "2023-06-15",
				type: "Heart Health" as const,
				status: "Active" as const,
				goals: [
					"Reduce risk of heart disease",
					"Lower blood pressure",
					"Improve cholesterol levels",
				],
				objectives: [
					"Increase consumption of fruits, vegetables, and whole grains",
					"Replace saturated fats with healthy fats like olive oil",
					"Limit red meat intake to once or twice a week",
				],
			},
			{
				id: "2",
				name: "Diabetes-Friendly Meal Plan",
				date: "2023-07-01",
				type: "Diabetes Management" as const,
				status: "Upcoming" as const,
				goals: [
					"Maintain stable blood sugar levels",
					"Promote weight loss",
					"Reduce risk of diabetes complications",
				],
				objectives: [
					"Control carbohydrate intake at each meal",
					"Include lean proteins and healthy fats in meals",
					"Increase fiber intake to 25-30 grams per day",
				],
			},
			{
				id: "3",
				name: "Weight Loss Nutrition Plan",
				date: "2023-05-01",
				type: "Weight Loss" as const,
				status: "Completed" as const,
				goals: [
					"Achieve a healthy BMI",
					"Improve overall nutrition",
					"Establish sustainable eating habits",
				],
				objectives: [
					"Create a calorie deficit of 500 calories per day",
					"Increase protein intake to support muscle mass",
					"Implement portion control strategies",
				],
			},
		],
		exercisePlans: [
			{
				id: "1",
				name: "Cardiovascular Endurance Program",
				date: "2023-06-15",
				type: "Cardio" as const,
				status: "Active" as const,
				goals: [
					"Improve overall cardiovascular health",
					"Increase stamina and endurance",
					"Support weight management goals",
				],
				objectives: [
					"Engage in 30 minutes of moderate-intensity cardio 5 days a week",
					"Gradually increase duration to 45-60 minutes over 8 weeks",
					"Incorporate a variety of activities (walking, cycling, swimming)",
				],
			},
			{
				id: "2",
				name: "Strength Training Regimen",
				date: "2023-07-01",
				type: "Strength" as const,
				status: "Upcoming" as const,
				goals: [
					"Build lean muscle mass",
					"Improve bone density",
					"Enhance overall body strength",
				],
				objectives: [
					"Perform full-body strength training 3 times per week",
					"Focus on compound exercises (squats, deadlifts, push-ups)",
					"Gradually increase weights as strength improves",
				],
			},
			{
				id: "3",
				name: "Flexibility and Mobility Routine",
				date: "2023-05-01",
				type: "Mobility" as const,
				status: "Completed" as const,
				goals: [
					"Improve overall flexibility",
					"Enhance joint mobility",
					"Reduce risk of injury during other activities",
				],
				objectives: [
					"Perform daily stretching routine targeting major muscle groups",
					"Incorporate yoga or Pilates sessions 2-3 times per week",
					"Use foam rolling for myofascial release after workouts",
				],
			},
		],
		mentalHealthPlans: [
			{
				id: "1",
				name: "Cognitive Behavioral Therapy",
				date: "2023-06-15",
				type: "Therapy" as const,
				status: "Active" as const,
				goals: [
					"Reduce symptoms of anxiety and depression",
					"Develop coping strategies for stress",
					"Improve overall emotional well-being",
				],
				objectives: [
					"Attend weekly therapy sessions",
					"Complete daily thought records",
					"Practice relaxation techniques twice daily",
				],
			},
			{
				id: "2",
				name: "Mindfulness-Based Stress Reduction",
				date: "2023-07-01",
				type: "Mindfulness" as const,
				status: "Upcoming" as const,
				goals: [
					"Increase awareness of present moment experiences",
					"Reduce reactivity to stressful situations",
					"Improve overall quality of life",
				],
				objectives: [
					"Attend 8-week MBSR course",
					"Practice daily meditation for 20 minutes",
					"Incorporate mindful breathing into daily routine",
				],
			},
			{
				id: "3",
				name: "Stress Management Workshop",
				date: "2023-05-01",
				type: "Stress Management" as const,
				status: "Completed" as const,
				goals: [
					"Identify personal stress triggers",
					"Learn effective stress management techniques",
					"Develop a personalized stress reduction plan",
				],
				objectives: [
					"Attend 4-week stress management workshop",
					"Complete stress journal for 30 days",
					"Implement at least 3 new stress reduction strategies",
				],
			},
		],
		progressTracking: {
			goals: [
				{
					id: "1",
					description: "Reduce blood pressure",
					progress: 60,
					milestones: [
						{ id: "1-1", description: "Start medication", completed: true },
						{ id: "1-2", description: "Reduce sodium intake", completed: true },
						{ id: "1-3", description: "Reach 130/85 mmHg", completed: false },
						{
							id: "1-4",
							description: "Maintain for 1 month",
							completed: false,
						},
					],
				},
				{
					id: "2",
					description: "Improve HbA1c levels",
					progress: 40,
					milestones: [
						{
							id: "2-1",
							description: "Start diabetes management plan",
							completed: true,
						},
						{ id: "2-2", description: "Reach 7.5% HbA1c", completed: false },
						{ id: "2-3", description: "Reach 7.0% HbA1c", completed: false },
						{
							id: "2-4",
							description: "Maintain for 3 months",
							completed: false,
						},
					],
				},
				// Add more goals as needed
			],
			progressData: [
				{ date: "2023-01", progress: 10 },
				{ date: "2023-02", progress: 25 },
				{ date: "2023-03", progress: 40 },
				{ date: "2023-04", progress: 55 },
				{ date: "2023-05", progress: 70 },
				{ date: "2023-06", progress: 85 },
			],
		},
		planStatus: "In Progress" as const,
	};

	const overallProgress =
		mockData.goals.reduce((acc, goal) => acc + goal.progress, 0) /
		mockData.goals.length;

	const handleCelebrateProgress = () => {
		setShowConfetti(true);
		setTimeout(() => setShowConfetti(false), 5000);
	};

	const tabContent = {
		overview: (
			<PlanOverview
				goals={mockData.goals}
				outcomes={mockData.outcomes}
				planStatus={mockData.planStatus}
			/>
		),
		progress: (
			<ProgressTracking
				goals={mockData.progressTracking.goals}
				progressData={mockData.progressTracking.progressData}
			/>
		),
		medications: <MedicationPlans plans={mockData.medicationPlans} />,
		therapy: <TherapyPlans plans={mockData.therapyPlans} />,
		diet: <DietaryPlans plans={mockData.dietaryPlans} />,
		exercise: <ExercisePlans plans={mockData.exercisePlans} />,
		mentalHealth: <MentalHealthPlans plans={mockData.mentalHealthPlans} />,
	};

	return (
		<main className="p-6 rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 dark:from-gray-900 dark:to-blue-900">
			<motion.h1
				className="text-4xl font-bold mb-6 text-sky-800"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				Your Treatment Plan
			</motion.h1>

			<motion.div
				className="mb-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}>
				<Card className="bg-white bg-opacity-70 backdrop-blur-sm">
					<CardHeader>
						<CardTitle className="text-2xl font-bold text-sky-700">
							Overall Progress
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Progress value={overallProgress} className="h-4 mb-2" />
						<div className="flex justify-between items-center">
							<span className="text-lg font-semibold">
								{overallProgress.toFixed(1)}% Complete
							</span>
							<Button
								onClick={handleCelebrateProgress}
								className="bg-sky-700 hover:bg-sky-600 text-white">
								Celebrate Progress!
							</Button>
						</div>
					</CardContent>
				</Card>
			</motion.div>

			<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
				<TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2 mb-6 text-white bg-sky-400 dark:bg-sky-800">
					<TabsTrigger value="overview" className={`text-white data-[state=active]:text-black`}>
						Overview
					</TabsTrigger>
					<TabsTrigger value="progress" className={`text-white data-[state=active]:text-black`}>
						Progress
					</TabsTrigger>
					<TabsTrigger value="medications" className={`text-white data-[state=active]:text-black`}>
						<Pill className="mr-2" />
						Medications
					</TabsTrigger>
					<TabsTrigger value="therapy" className={`text-white data-[state=active]:text-black`}>
						<Activity className="mr-2" />
						Therapy
					</TabsTrigger>
					<TabsTrigger value="diet" className={`text-white data-[state=active]:text-black`}>
						<Utensils className="mr-2" />
						Diet
					</TabsTrigger>
					<TabsTrigger value="exercise" className={`text-white data-[state=active]:text-black`}>
						<Dumbbell className="mr-2" />
						Exercise
					</TabsTrigger>
					<TabsTrigger value="mentalHealth" className={`text-white data-[state=active]:text-black`}>
						<Brain className="mr-2" />
						Mental Health
					</TabsTrigger>
				</TabsList>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}>
						<TabsContent value={activeTab}>
							{tabContent[activeTab as keyof typeof tabContent]}
						</TabsContent>
					</motion.div>
				</AnimatePresence>
			</Tabs>

			{showConfetti && (
				<Confetti
					width={window.innerWidth}
					height={window.innerHeight}
					recycle={false}
					numberOfPieces={500}
				/>
			)}
		</main>
	);
};

export default TreatmentPlanPage;
