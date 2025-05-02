import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Building } from "lucide-react";

interface EmergencyContact {
	id: string;
	name: string;
	role: string;
	phone: string;
	email: string;
	department: string;
	priority: "high" | "medium" | "low";
}

export const EmergencyContacts: React.FC = () => {
	const contacts: EmergencyContact[] = [
		{
			id: "EC001",
			name: "Dr. Robert Chen",
			role: "Emergency Department Head",
			phone: "+1-555-0123",
			email: "robert.chen@hospital.com",
			department: "Emergency",
			priority: "high",
		},
		{
			id: "EC002",
			name: "Nurse Elaine Parks",
			role: "Trauma Response Nurse",
			phone: "+1-555-0456",
			email: "elaine.parks@hospital.com",
			department: "Trauma",
			priority: "medium",
		},
		{
			id: "EC003",
			name: "Dr. Alan Green",
			role: "On-call Physician",
			phone: "+1-555-0789",
			email: "alan.green@hospital.com",
			department: "General",
			priority: "low",
		},
	];

	const getCardStyle = (priority: EmergencyContact["priority"]) => {
		const styles = {
			high: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
			medium: "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100",
			low: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
		};
		return styles[priority];
	};

	return (
		<Card className="shadow-lg rounded-xl">
			<CardHeader>
				<CardTitle className="text-xl font-bold">Emergency Contacts</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{contacts.map((contact) => (
						<Card
							key={contact.id}
							className={`p-4 rounded-xl shadow-md transition-transform hover:scale-[1.02] ${getCardStyle(
								contact.priority
							)}`}
						>
							<div className="space-y-2">
								<div className="flex items-center space-x-2">
									<Building className="h-4 w-4" />
									<h3 className="font-semibold">{contact.name}</h3>
								</div>
								<p className="text-sm">{contact.role}</p>
								<div className="flex items-center space-x-2">
									<Phone className="h-4 w-4" />
									<span className="text-sm">{contact.phone}</span>
								</div>
								<div className="flex items-center space-x-2">
									<Mail className="h-4 w-4" />
									<span className="text-sm">{contact.email}</span>
								</div>
								<div className="flex justify-between items-center pt-3">
									<Button variant="outline" size="sm" className="rounded-md border-2">
										Contact
									</Button>
									<div className="px-2 py-1 rounded-full text-xs font-medium bg-white/30 backdrop-blur-md">
										{contact.priority} priority
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
