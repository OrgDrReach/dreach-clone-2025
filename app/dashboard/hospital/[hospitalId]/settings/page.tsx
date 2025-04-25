"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SystemSettings } from "@/components/dashboard/hospital/settings";
import {
	Building2,
	Users,
	Shield,
	Settings,
	Link2,
	Lock,
	Database,
} from "lucide-react";

const SettingsPage: React.FC = () => {
	return (
		<main className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">Hospital Settings</h1>

			<Tabs defaultValue="profile" className="space-y-6">
				<TabsList className="bg-muted h-auto p-1 flex flex-wrap gap-1">
					<TabsTrigger
						value="profile"
						className="data-[state=active]:bg-background flex items-center gap-2">
						<Building2 className="h-4 w-4" />
						Profile
					</TabsTrigger>
					<TabsTrigger
						value="users"
						className="data-[state=active]:bg-background flex items-center gap-2">
						<Users className="h-4 w-4" />
						Users
					</TabsTrigger>
					<TabsTrigger
						value="access"
						className="data-[state=active]:bg-background flex items-center gap-2">
						<Shield className="h-4 w-4" />
						Access Control
					</TabsTrigger>
					<TabsTrigger
						value="preferences"
						className="data-[state=active]:bg-background flex items-center gap-2">
						<Settings className="h-4 w-4" />
						Preferences
					</TabsTrigger>
					<TabsTrigger
						value="integrations"
						className="data-[state=active]:bg-background flex items-center gap-2">
						<Link2 className="h-4 w-4" />
						Integrations
					</TabsTrigger>
					<TabsTrigger
						value="security"
						className="data-[state=active]:bg-background flex items-center gap-2">
						<Lock className="h-4 w-4" />
						Security
					</TabsTrigger>
					<TabsTrigger
						value="backup"
						className="data-[state=active]:bg-background flex items-center gap-2">
						<Database className="h-4 w-4" />
						Backup
					</TabsTrigger>
				</TabsList>

				<TabsContent value="profile" className="mt-6">
					<SystemSettings section="profile" />
				</TabsContent>

				<TabsContent value="users" className="mt-6">
					<SystemSettings section="users" />
				</TabsContent>

				<TabsContent value="access" className="mt-6">
					<SystemSettings section="access" />
				</TabsContent>

				<TabsContent value="preferences" className="mt-6">
					<SystemSettings section="preferences" />
				</TabsContent>

				<TabsContent value="integrations" className="mt-6">
					<SystemSettings section="integrations" />
				</TabsContent>

				<TabsContent value="security" className="mt-6">
					<SystemSettings section="security" />
				</TabsContent>

				<TabsContent value="backup" className="mt-6">
					<SystemSettings section="backup" />
				</TabsContent>
			</Tabs>
		</main>
	);
};

export default SettingsPage;
