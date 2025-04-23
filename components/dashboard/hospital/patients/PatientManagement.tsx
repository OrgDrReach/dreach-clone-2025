"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PatientList from "./PatientList";
import PatientRegistration from "./PatientRegistration";
import PatientDetails from "./PatientDetails";
import AdmissionHistory from "./AdmissionHistory";
import MedicalRecords from "./MedicalRecords";
import TreatmentPlans from "./TreatmentPlans";
import DischargeManagement from "./DischargeManagement";
import PatientTracking from "./PatientTracking";

const PatientManagement: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6">
			<Card>
				<CardContent className="p-6">
					<Tabs defaultValue="list" className="w-full">
						<TabsList className="grid grid-cols-4 lg:grid-cols-8 gap-4">
							<TabsTrigger value="list">Patient List</TabsTrigger>
							<TabsTrigger value="registration">Registration</TabsTrigger>
							<TabsTrigger value="details">Details</TabsTrigger>
							<TabsTrigger value="admission">Admissions</TabsTrigger>
							<TabsTrigger value="records">Records</TabsTrigger>
							<TabsTrigger value="treatment">Treatment</TabsTrigger>
							<TabsTrigger value="discharge">Discharge</TabsTrigger>
							<TabsTrigger value="tracking">Tracking</TabsTrigger>
						</TabsList>

						<TabsContent value="list">
							<PatientList />
						</TabsContent>
						<TabsContent value="registration">
							<PatientRegistration />
						</TabsContent>
						<TabsContent value="details">
							<PatientDetails />
						</TabsContent>
						<TabsContent value="admission">
							<AdmissionHistory />
						</TabsContent>
						<TabsContent value="records">
							<MedicalRecords />
						</TabsContent>
						<TabsContent value="treatment">
							<TreatmentPlans />
						</TabsContent>
						<TabsContent value="discharge">
							<DischargeManagement />
						</TabsContent>
						<TabsContent value="tracking">
							<PatientTracking />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default PatientManagement;
