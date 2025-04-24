import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, PlusCircle } from "lucide-react";

interface Announcement {
	id: string;
	title: string;
	message: string;
	department: string;
	priority: "urgent" | "important" | "normal";
	createdAt: string;
	expiresAt?: string;
}

export const StaffAnnouncements: React.FC = () => {
	const announcements: Announcement[] = [
		{
			id: "1",
			title: "Updated COVID-19 Protocol",
			message: "New safety measures implemented for all staff members",
			department: "All Departments",
			priority: "urgent",
			createdAt: "2025-04-24T08:00:00",
			expiresAt: "2025-05-24T08:00:00",
		},
		// Add more mock announcements
	];

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="flex items-center gap-2">
						<Users className="h-5 w-5" />
						Staff Announcements
					</CardTitle>
					<Button className="flex items-center gap-2">
						<PlusCircle className="h-4 w-4" />
						New Announcement
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[400px]">
					<div className="space-y-4">
						{announcements.map((announcement) => (
							<div
								key={announcement.id}
								className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3">
								<div className="flex items-center justify-between">
									<h3 className="font-medium">{announcement.title}</h3>
									<Badge
										variant={
											announcement.priority === "urgent" ? "destructive"
											: announcement.priority === "important" ?
												"warning"
											:	"secondary"
										}>
										{announcement.priority}
									</Badge>
								</div>
								<p className="text-sm text-gray-600 dark:text-gray-300">
									{announcement.message}
								</p>
								<div className="flex items-center justify-between text-sm text-gray-500">
									<span>{announcement.department}</span>
									<span>
										Posted:{" "}
										{new Date(announcement.createdAt).toLocaleDateString()}
									</span>
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</CardContent>
		</Card>
	);
};
