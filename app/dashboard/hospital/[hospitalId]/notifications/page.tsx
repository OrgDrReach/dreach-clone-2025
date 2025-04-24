"use client";

import React from "react";
import { NotificationCenter } from "@/components/dashboard/hospital/notifications/NotificationCenter";

interface NotificationsPageProps {
	params: {
		hospitalId: string;
	};
}

const NotificationsPage: React.FC<NotificationsPageProps> = ({ params }) => {
	return (
		<main className="container mx-auto p-6 space-y-6">
			<div className="flex items-center justify-between mb-8">
				<div>
					<h1 className="text-3xl font-bold">Notifications</h1>
					<p className="text-muted-foreground">
						Manage and monitor all hospital notifications and alerts
					</p>
				</div>
			</div>
			<NotificationCenter />
		</main>
	);
};

export default NotificationsPage;
