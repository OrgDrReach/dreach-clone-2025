import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Monitor } from "lucide-react";

interface SystemNotification {
	id: string;
	message: string;
	type: "update" | "security" | "performance" | "error";
	timestamp: string;
}

export const SystemNotifications: React.FC = () => {
	const notifications: SystemNotification[] = [
		{
			id: "1",
			message: "System update scheduled for maintenance window",
			type: "update",
			timestamp: "2025-04-24T09:00:00",
		},
		// Add more mock notifications
	];

	const getNotificationColor = (type: SystemNotification["type"]) => {
		const colors = {
			update: "bg-blue-100 text-blue-800",
			security: "bg-red-100 text-red-800",
			performance: "bg-yellow-100 text-yellow-800",
			error: "bg-orange-100 text-orange-800",
		};
		return colors[type];
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Monitor className="h-5 w-5" />
					System Notifications
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[400px]">
					<div className="space-y-4">
						{notifications.map((notification) => (
							<div
								key={notification.id}
								className="p-4 bg-gray-50 rounded-lg space-y-2">
								<div className="flex items-center justify-between">
									<Badge className={getNotificationColor(notification.type)}>
										{notification.type}
									</Badge>
									<span className="text-sm text-gray-500">
										{new Date(notification.timestamp).toLocaleString()}
									</span>
								</div>
								<p className="text-sm">{notification.message}</p>
							</div>
						))}
					</div>
				</ScrollArea>
			</CardContent>
		</Card>
	);
};
