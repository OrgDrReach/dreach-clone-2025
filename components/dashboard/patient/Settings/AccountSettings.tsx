"use client";

import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Camera,
	Mail,
	Lock,
	User,
	Phone,
	Shield,
	Bell,
	Calendar,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const AccountSettings: React.FC = () => {
	const [notifications, setNotifications] = useState({
		email: true,
		sms: false,
		appointments: true,
	});

	return (
		<Card className="overflow-hidden shadow-lg">
			<CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-primary-foreground p-6 -mt-6">
				<div className="flex items-start justify-between">
					<div className="flex items-center space-x-4">
						<Avatar className="h-16 w-16 border-2 border-white/50 shadow-lg">
							<AvatarImage
								src="/avatar-placeholder.png"
								alt="Profile picture"
							/>
							<AvatarFallback className="text-black dark:text-white">
								JP
							</AvatarFallback>
						</Avatar>
						<div>
							<CardTitle className="text-2xl font-bold">
								Account Settings
							</CardTitle>
							<CardDescription className="text-primary-foreground/80 mt-1">
								Manage your profile and preferences
							</CardDescription>
						</div>
					</div>
					<Button variant="secondary" size="sm" className="shadow-lg">
						Save Changes
					</Button>
				</div>
			</CardHeader>

			<Tabs defaultValue="profile" className="p-6">
				<TabsList className="grid grid-cols-3 gap-4 bg-muted/50 p-1">
					<TabsTrigger
						value="profile"
						className="data-[state=active]:bg-white dark:data-[state=active]:bg-secondary">
						<User className="w-4 h-4 mr-2" /> Profile
					</TabsTrigger>
					<TabsTrigger
						value="security"
						className="data-[state=active]:bg-white dark:data-[state=active]:bg-secondary">
						<Shield className="w-4 h-4 mr-2" /> Security
					</TabsTrigger>
					<TabsTrigger
						value="notifications"
						className="data-[state=active]:bg-white dark:data-[state=active]:bg-secondary">
						<Bell className="w-4 h-4 mr-2" /> Notifications
					</TabsTrigger>
				</TabsList>

				<TabsContent value="profile" className="space-y-6 mt-6">
					<div className="relative group w-fit mx-auto">
						<Avatar className="h-32 w-32 group-hover:opacity-75 transition-opacity border-2 border-muted">
							<AvatarImage
								src="/avatar-placeholder.png"
								alt="Profile picture"
							/>
							<AvatarFallback>JP</AvatarFallback>
						</Avatar>
						<Button
							variant="secondary"
							size="icon"
							className="absolute bottom-0 right-0 rounded-full shadow-lg">
							<Camera className="h-4 w-4" />
						</Button>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="fullName">Full Name</Label>
							<Input id="fullName" placeholder="John Doe" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email Address</Label>
							<Input
								id="email"
								type="email"
								placeholder="john.doe@example.com"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">Phone Number</Label>
							<Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="dob">Date of Birth</Label>
							<Input id="dob" type="date" />
						</div>
					</div>
				</TabsContent>

				<TabsContent value="security" className="space-y-6 mt-6">
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="current-password">Current Password</Label>
							<Input id="current-password" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="new-password">New Password</Label>
							<Input id="new-password" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirm-password">Confirm New Password</Label>
							<Input id="confirm-password" type="password" />
						</div>
						<Button className="w-full">Update Password</Button>
					</div>
				</TabsContent>

				<TabsContent value="notifications" className="space-y-6 mt-6">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label className="text-base">Email Notifications</Label>
								<p className="text-sm text-muted-foreground">
									Receive email about your account activity
								</p>
							</div>
							<Switch
								checked={notifications.email}
								onCheckedChange={(checked) =>
									setNotifications((prev) => ({ ...prev, email: checked }))
								}
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label className="text-base">SMS Notifications</Label>
								<p className="text-sm text-muted-foreground">
									Receive text messages for important updates
								</p>
							</div>
							<Switch
								checked={notifications.sms}
								onCheckedChange={(checked) =>
									setNotifications((prev) => ({ ...prev, sms: checked }))
								}
							/>
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label className="text-base">Appointment Reminders</Label>
								<p className="text-sm text-muted-foreground">
									Get notified about upcoming appointments
								</p>
							</div>
							<Switch
								checked={notifications.appointments}
								onCheckedChange={(checked) =>
									setNotifications((prev) => ({
										...prev,
										appointments: checked,
									}))
								}
							/>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</Card>
	);
};

export default AccountSettings;
