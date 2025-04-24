import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BellPlus, Edit, Trash2 } from "lucide-react";

interface CustomNotification {
	id: string;
	title: string;
	message: string;
	category: string;
	recipients: string[];
	schedule: "immediate" | "scheduled" | "recurring";
	createdAt: string;
	nextTrigger?: string;
	status: "active" | "paused" | "completed";
}

export const CustomNotifications: React.FC = () => {
	const notifications: CustomNotification[] = [
		{
			id: "1",
			title: "Staff Meeting Reminder",
			message: "Monthly staff meeting in Conference Room A",
			category: "Staff",
			recipients: ["All Medical Staff", "Administration"],
			schedule: "recurring",
			createdAt: "2025-04-24T08:00:00",
			nextTrigger: "2025-05-01T09:00:00",
			status: "active",
		},
		// Add more mock notifications
	];

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="flex items-center gap-2">
						<BellPlus className="h-5 w-5" />
						Custom Notifications
					</CardTitle>
					<Button className="flex items-center gap-2">
						Create Notification
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[400px]">
					<div className="space-y-4">
						{notifications.map((notification) => (
							<div
								key={notification.id}
								className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3">
								<div className="flex items-center justify-between">
									<h3 className="font-medium">{notification.title}</h3>
									<div className="flex items-center gap-2">
										<Badge
											variant={
												notification.status === "active" ? "default"
												: notification.status === "paused" ?
													"secondary"
												:	"outline"
											}>
											{notification.status}
										</Badge>
										<Button variant="ghost" size="icon">
											<Edit className="h-4 w-4" />
										</Button>
										<Button variant="ghost" size="icon">
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									{notification.message}
								</p>
								<div className="flex flex-wrap gap-2">
									{notification.recipients.map((recipient) => (
										<Badge key={recipient} variant="outline">
											{recipient}
										</Badge>
									))}
								</div>
								<div className="flex items-center justify-between text-sm">
									<span className="text-gray-500">
										Schedule: {notification.schedule}
									</span>
									{notification.nextTrigger && (
										<span className="text-gray-500">
											Next:{" "}
											{new Date(notification.nextTrigger).toLocaleString()}
										</span>
									)}
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</CardContent>
		</Card>
	);
};
