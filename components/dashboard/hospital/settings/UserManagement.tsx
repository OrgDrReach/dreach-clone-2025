import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus } from "lucide-react";

interface User {
	id: string;
	name: string;
	email: string;
	role: string;
	status: "active" | "inactive" | "pending";
	lastActive: string;
}

const UserManagement: React.FC = () => {
	const users: User[] = [
		{
			id: "1",
			name: "Dr. Sarah Johnson",
			email: "sarah.j@hospital.com",
			role: "Doctor",
			status: "active",
			lastActive: "2 minutes ago",
		},
		{
			id: "2",
			name: "John Smith",
			email: "john.s@hospital.com",
			role: "Nurse",
			status: "active",
			lastActive: "1 hour ago",
		},
		{
			id: "3",
			name: "Emily Davis",
			email: "emily.d@hospital.com",
			role: "Administrator",
			status: "pending",
			lastActive: "1 day ago",
		},
	];

	const getStatusColor = (status: User["status"]) => {
		const colors = {
			active: "bg-green-100 text-green-800",
			inactive: "bg-gray-100 text-gray-800",
			pending: "bg-yellow-100 text-yellow-800",
		};
		return colors[status];
	};

	return (
		<Card className="overflow-hidden shadow-lg">
			<CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-white p-6">
				<div className="flex justify-between items-center">
					<CardTitle className="text-2xl flex items-center gap-2">
						<Users /> User Management
					</CardTitle>
					<Button variant="secondary" size="sm" className="gap-2">
						<UserPlus className="h-4 w-4" /> Add User
					</Button>
				</div>
			</CardHeader>
			<CardContent className="p-6">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Role</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Last Active</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id}>
								<TableCell>
									<div>
										<div className="font-medium">{user.name}</div>
										<div className="text-sm text-muted-foreground">
											{user.email}
										</div>
									</div>
								</TableCell>
								<TableCell>{user.role}</TableCell>
								<TableCell>
									<Badge className={getStatusColor(user.status)}>
										{user.status}
									</Badge>
								</TableCell>
								<TableCell>{user.lastActive}</TableCell>
								<TableCell>
									<Button variant="outline" size="sm">
										Edit
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};

export default UserManagement;
