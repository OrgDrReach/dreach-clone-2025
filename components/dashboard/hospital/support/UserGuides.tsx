import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FileText, Video, Book } from "lucide-react";

export const UserGuides: React.FC = () => {
	const guides = [
		{
			category: "Getting Started",
			items: [
				"System Overview",
				"Basic Navigation",
				"User Roles and Permissions",
				"Profile Setup",
			],
		},
		{
			category: "Patient Management",
			items: [
				"Patient Registration",
				"Medical Records",
				"Appointment Scheduling",
				"Billing Procedures",
			],
		},
		{
			category: "Administrative Tasks",
			items: [
				"Staff Management",
				"Resource Allocation",
				"Report Generation",
				"System Configuration",
			],
		},
	];

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>User Guides & Documentation</CardTitle>
				</CardHeader>
				<CardContent>
					<Accordion type="single" collapsible className="w-full">
						{guides.map((guide, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger>{guide.category}</AccordionTrigger>
								<AccordionContent>
									<div className="space-y-2 pl-4">
										{guide.items.map((item, itemIndex) => (
											<div
												key={itemIndex}
												className="flex items-center justify-between py-2">
												<span>{item}</span>
												<div className="space-x-2">
													<Button size="sm" variant="outline">
														<FileText className="h-4 w-4 mr-2" />
														PDF
													</Button>
													<Button size="sm" variant="outline">
														<Video className="h-4 w-4 mr-2" />
														Video
													</Button>
												</div>
											</div>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</CardContent>
			</Card>
		</div>
	);
};
