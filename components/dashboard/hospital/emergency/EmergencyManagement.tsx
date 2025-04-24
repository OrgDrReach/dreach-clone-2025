"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmergencyDashboard } from "./EmergencyDashboard";
import { PatientTriage } from "./PatientTriage";
import { BedAvailability } from "./BedAvailability";
import { StaffAssignment } from "./StaffAssignment";
import { EmergencyContacts } from "./EmergencyContacts";
import { AmbulanceTracking } from "./AmbulanceTracking";
import { EmergencyProtocols } from "./EmergencyProtocols";

const EmergencyManagement: React.FC = () => {
	return (
		<Card>
			<CardContent className="p-6">
				<Tabs defaultValue="dashboard" className="space-y-6">
					<TabsList className="grid grid-cols-2 lg:grid-cols-7 gap-4  text-white bg-sky-400 dark:bg-sky-800">
						<TabsTrigger value="dashboard">Dashboard</TabsTrigger>
						<TabsTrigger value="triage">Triage</TabsTrigger>
						<TabsTrigger value="beds">Beds</TabsTrigger>
						<TabsTrigger value="staff">Staff</TabsTrigger>
						<TabsTrigger value="contacts">Contacts</TabsTrigger>
						<TabsTrigger value="ambulance">Ambulance</TabsTrigger>
						<TabsTrigger value="protocols">Protocols</TabsTrigger>
					</TabsList>

					<TabsContent value="dashboard">
						<EmergencyDashboard />
					</TabsContent>
					<TabsContent value="triage">
						<PatientTriage />
					</TabsContent>
					<TabsContent value="beds">
						<BedAvailability />
					</TabsContent>
					<TabsContent value="staff">
						<StaffAssignment />
					</TabsContent>
					<TabsContent value="contacts">
						<EmergencyContacts />
					</TabsContent>
					<TabsContent value="ambulance">
						<AmbulanceTracking />
					</TabsContent>
					<TabsContent value="protocols">
						<EmergencyProtocols />
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
};

export default EmergencyManagement;
