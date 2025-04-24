import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Building, AlertTriangle } from "lucide-react";

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
		// Add more mock data
	];

	const getPriorityColor = (priority: EmergencyContact["priority"]) => {
		const colors = {
			high: "bg-red-100 text-red-800",
			medium: "bg-yellow-100 text-yellow-800",
			low: "bg-blue-100 text-blue-800",
		};
		return colors[priority];
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Emergency Contacts</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{contacts.map((contact) => (
						<Card key={contact.id} className="p-4">
							<div className="space-y-2">
								<div className="flex items-center space-x-2">
									<Building className="h-4 w-4" />
									<h3 className="font-medium">{contact.name}</h3>
								</div>
								<p className="text-sm text-muted-foreground">{contact.role}</p>
								<div className="flex items-center space-x-2">
									<Phone className="h-4 w-4" />
									<span className="text-sm">{contact.phone}</span>
								</div>
								<div className="flex items-center space-x-2">
									<Mail className="h-4 w-4" />
									<span className="text-sm">{contact.email}</span>
								</div>
								<div className="flex justify-between items-center pt-2">
									<Button variant="outline" size="sm">
										Contact
									</Button>
									<div
										className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(contact.priority)}`}>
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
