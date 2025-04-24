import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const TicketManagement: React.FC = () => {
	const tickets = [
		{
			id: "TK-001",
			subject: "System Access Issue",
			department: "IT",
			priority: "High",
			status: "Open",
			created: "2025-04-23",
		},
		{
			id: "TK-002",
			subject: "Billing System Error",
			department: "Finance",
			priority: "Medium",
			status: "In Progress",
			created: "2025-04-22",
		},
		{
			id: "TK-003",
			subject: "Patient Data Import",
			department: "Records",
			priority: "Low",
			status: "Resolved",
			created: "2025-04-21",
		},
	];

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<CardTitle>Support Tickets</CardTitle>
					<Button>Create New Ticket</Button>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Ticket ID</TableHead>
								<TableHead>Subject</TableHead>
								<TableHead>Department</TableHead>
								<TableHead>Priority</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Created</TableHead>
								<TableHead>Action</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{tickets.map((ticket) => (
								<TableRow key={ticket.id}>
									<TableCell>{ticket.id}</TableCell>
									<TableCell>{ticket.subject}</TableCell>
									<TableCell>{ticket.department}</TableCell>
									<TableCell>
										<Badge
											variant={
												ticket.priority === "High" ? "destructive"
												: ticket.priority === "Medium" ?
													"warning"
												:	"secondary"
											}>
											{ticket.priority}
										</Badge>
									</TableCell>
									<TableCell>
										<Badge
											variant={
												ticket.status === "Open" ? "destructive"
												: ticket.status === "In Progress" ?
													"warning"
												:	"success"
											}>
											{ticket.status}
										</Badge>
									</TableCell>
									<TableCell>{ticket.created}</TableCell>
									<TableCell>
										<Button variant="outline" size="sm">
											View Details
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
};
