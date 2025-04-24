import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Settings, Save } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface NotificationSetting {
	id: string;
	category: string;
	enabled: boolean;
	channel: "email" | "sms" | "in-app" | "all";
	priority: "high" | "medium" | "low";
	recipients: string[];
}

export const NotificationSettings: React.FC = () => {
	const settings: NotificationSetting[] = [
		{
			id: "emergency",
			category: "Emergency Alerts",
			enabled: true,
			channel: "all",
			priority: "high",
			recipients: ["All Staff", "Emergency Response Team"],
		},
		{
			id: "maintenance",
			category: "Maintenance Notifications",
			enabled: true,
			channel: "email",
			priority: "medium",
			recipients: ["Maintenance Staff", "Department Heads"],
		},
		// Add more settings
	];

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="flex items-center gap-2">
						<Settings className="h-5 w-5" />
						Notification Settings
					</CardTitle>
					<Button className="flex items-center gap-2">
						<Save className="h-4 w-4" />
						Save Changes
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					{settings.map((setting) => (
						<div
							key={setting.id}
							className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-4">
							<div className="flex items-center justify-between">
								<div className="space-y-1">
									<h3 className="font-medium">{setting.category}</h3>
									<p className="text-sm text-gray-500">
										Recipients: {setting.recipients.join(", ")}
									</p>
								</div>
								<Switch
									id={`${setting.id}-toggle`}
									checked={setting.enabled}
									onCheckedChange={() => {}}
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor={`${setting.id}-channel`}>
										Notification Channel
									</Label>
									<Select defaultValue={setting.channel}>
										<SelectTrigger id={`${setting.id}-channel`}>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="email">Email</SelectItem>
											<SelectItem value="sms">SMS</SelectItem>
											<SelectItem value="in-app">In-App</SelectItem>
											<SelectItem value="all">All Channels</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<Label htmlFor={`${setting.id}-priority`}>
										Priority Level
									</Label>
									<Select defaultValue={setting.priority}>
										<SelectTrigger id={`${setting.id}-priority`}>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="high">High</SelectItem>
											<SelectItem value="medium">Medium</SelectItem>
											<SelectItem value="low">Low</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};
