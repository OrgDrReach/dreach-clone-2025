"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone, Mail, User } from "lucide-react";

interface PatientDetailsProps {
	patientId?: string;
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patientId }) => {
	// Mock patient data
	const patient = {
		id: "P001",
		name: "John Doe",
		age: 45,
		gender: "Male",
		dateOfBirth: "1980-05-15",
		address: "123 Main St, City, Country",
		phone: "+1234567890",
		email: "john.doe@email.com",
		bloodGroup: "O+",
		allergies: ["Penicillin", "Peanuts"],
		chronicConditions: ["Hypertension", "Diabetes"],
		status: "Admitted",
		admissionDate: "2025-04-20",
		ward: "Cardiology",
		roomNumber: "304",
		attendingDoctor: "Dr. Sarah Smith",
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-2xl font-bold">
						Patient Information
					</CardTitle>
					<Badge
						variant="outline"
						className={
							patient.status === "Admitted" ?
								"bg-blue-100 text-blue-800"
							:	"bg-green-100 text-green-800"
						}>
						{patient.status}
					</Badge>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<div className="flex items-center space-x-2">
								<User className="w-4 h-4 text-gray-500" />
								<span className="font-medium">Name:</span>
								<span>{patient.name}</span>
							</div>
							<div className="flex items-center space-x-2">
								<Calendar className="w-4 h-4 text-gray-500" />
								<span className="font-medium">Date of Birth:</span>
								<span>{patient.dateOfBirth}</span>
							</div>
							<div className="flex items-center space-x-2">
								<MapPin className="w-4 h-4 text-gray-500" />
								<span className="font-medium">Address:</span>
								<span>{patient.address}</span>
							</div>
						</div>
						<div className="space-y-4">
							<div className="flex items-center space-x-2">
								<Phone className="w-4 h-4 text-gray-500" />
								<span className="font-medium">Phone:</span>
								<span>{patient.phone}</span>
							</div>
							<div className="flex items-center space-x-2">
								<Mail className="w-4 h-4 text-gray-500" />
								<span className="font-medium">Email:</span>
								<span>{patient.email}</span>
							</div>
							<div className="flex items-center space-x-2">
								<Clock className="w-4 h-4 text-gray-500" />
								<span className="font-medium">Admission Date:</span>
								<span>{patient.admissionDate}</span>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Tabs defaultValue="medical" className="space-y-4">
				<TabsList>
					<TabsTrigger value="medical">Medical Information</TabsTrigger>
					<TabsTrigger value="admission">Admission Details</TabsTrigger>
					<TabsTrigger value="history">Medical History</TabsTrigger>
				</TabsList>

				<TabsContent value="medical" className="space-y-4">
					<Card>
						<CardContent className="pt-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<h3 className="font-semibold mb-2">Blood Group</h3>
									<p>{patient.bloodGroup}</p>
								</div>
								<div>
									<h3 className="font-semibold mb-2">Allergies</h3>
									<div className="flex gap-2">
										{patient.allergies.map((allergy) => (
											<Badge key={allergy} variant="secondary">
												{allergy}
											</Badge>
										))}
									</div>
								</div>
								<div>
									<h3 className="font-semibold mb-2">Chronic Conditions</h3>
									<div className="flex gap-2">
										{patient.chronicConditions.map((condition) => (
											<Badge key={condition} variant="secondary">
												{condition}
											</Badge>
										))}
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="admission">
					<Card>
						<CardContent className="pt-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<h3 className="font-semibold mb-2">Ward</h3>
									<p>{patient.ward}</p>
								</div>
								<div>
									<h3 className="font-semibold mb-2">Room Number</h3>
									<p>{patient.roomNumber}</p>
								</div>
								<div>
									<h3 className="font-semibold mb-2">Attending Doctor</h3>
									<p>{patient.attendingDoctor}</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="history">
					<Card>
						<CardContent className="pt-6">
							{/* Add medical history content here */}
							<p>Medical history records will be displayed here.</p>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>

			<div className="flex justify-end space-x-4">
				<Button variant="outline">Edit Details</Button>
				<Button variant="destructive">Discharge Patient</Button>
			</div>
		</div>
	);
};

export default PatientDetails;
