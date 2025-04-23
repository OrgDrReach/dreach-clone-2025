"use client";
import React, { useState } from "react";
import {
	PersonalInformation,
	MedicalHistory,
	HealthGoals,
	InsuranceInformation,
	ContactPreferences,
	ProfilePicture,
	Bio,
	LanguagePreferences,
	SecuritySettings,
	AppointmentHistory,
} from "@/components/dashboard/patient/profile";
import { Button } from "@/components/ui/button";
import { Edit2, Save } from "lucide-react";

const ProfilePage: React.FC = () => {
	const [isEditing, setIsEditing] = useState(false);

	// Mock data - in a real application, this would come from your backend
	const personalInfo = {
		name: "John Doe",
		dateOfBirth: "1990-01-01",
		phoneNumber: "+1 234 567 8900",
		email: "john.doe@example.com",
		emergencyContact: {
			name: "Jane Doe",
			relationship: "Spouse",
			phoneNumber: "+1 987 654 3210",
		},
	};

	const medicalHistory = {
		conditions: ["Asthma", "Hypertension"],
		medications: ["Albuterol", "Lisinopril"],
		allergies: ["Peanuts", "Penicillin"],
	};

	const insuranceInfo = {
		insuranceName: "HealthCare Inc.",
		insuranceId: "HC123456789",
		policyDetails: "Full coverage",
	};

	const appointmentHistory = [
		{
			id: 1,
			date: "2023-06-15",
			time: "10:00 AM",
			doctor: "Dr. Smith",
			department: "Cardiology",
			status: "completed" as const,
		},
		{
			id: 2,
			date: "2023-07-01",
			time: "2:30 PM",
			doctor: "Dr. Johnson",
			department: "Pulmonology",
			status: "upcoming" as const,
		},
		{
			id: 3,
			date: "2023-05-20",
			time: "11:15 AM",
			doctor: "Dr. Brown",
			department: "General Practice",
			status: "cancelled" as const,
		},
	];

	return (
		<main className="p-4 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-lg min-h-screen">
			<div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">
					Patient Profile
				</h1>
				<Button
					onClick={() => setIsEditing(!isEditing)}
					className={`${isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} text-white`}>
					{isEditing ?
						<>
							<Save className="mr-2 h-4 w-4" /> Save Changes
						</>
					:	<>
							<Edit2 className="mr-2 h-4 w-4" /> Edit Profile
						</>
					}
				</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<ProfilePicture />
				<PersonalInformation {...personalInfo} />
				<MedicalHistory {...medicalHistory} />
				<HealthGoals />
				<InsuranceInformation {...insuranceInfo} />
				<ContactPreferences />
				<Bio />
				<LanguagePreferences />
				<SecuritySettings />
				<AppointmentHistory appointments={appointmentHistory} />
			</div>
		</main>
	);
};

export default ProfilePage;
