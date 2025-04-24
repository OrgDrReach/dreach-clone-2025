import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Shield, Users, Lock } from "lucide-react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface AccessRole {
	role: string;
	permissions: {
		view: boolean;
		create: boolean;
		edit: boolean;
		delete: boolean;
	};
}

const AccessControl: React.FC = () => {
	const roles: AccessRole[] = [
		{
			role: "Administrator",
			permissions: {
				view: true,
				create: true,
				edit: true,
				delete: true,
			},
		},
		{
			role: "Doctor",
			permissions: {
				view: true,
				create: true,
				edit: false,
				delete: false,
			},
		},
		{
			role: "Nurse",
			permissions: {
				view: true,
				create: false,
				edit: false,
				delete: false,
			},
		},
	];

	return (
		<Card className="overflow-hidden shadow-lg">
			<CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-white p-6">
				<CardTitle className="text-2xl flex items-center gap-2">
					<Shield /> Access Control
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6 space-y-6">
				<div className="space-y-4">
					<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
						<div className="space-y-0.5">
							<Label className="text-base flex items-center gap-2">
								<Lock className="h-4 w-4" />
								Role-Based Access Control
							</Label>
							<p className="text-sm text-muted-foreground">
								Enable role-based access control for users
							</p>
						</div>
						<Switch defaultChecked />
					</div>

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Role</TableHead>
								<TableHead>View</TableHead>
								<TableHead>Create</TableHead>
								<TableHead>Edit</TableHead>
								<TableHead>Delete</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{roles.map((role) => (
								<TableRow key={role.role}>
									<TableCell className="font-medium">{role.role}</TableCell>
									<TableCell>
										<Switch checked={role.permissions.view} />
									</TableCell>
									<TableCell>
										<Switch checked={role.permissions.create} />
									</TableCell>
									<TableCell>
										<Switch checked={role.permissions.edit} />
									</TableCell>
									<TableCell>
										<Switch checked={role.permissions.delete} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
};

export default AccessControl;
