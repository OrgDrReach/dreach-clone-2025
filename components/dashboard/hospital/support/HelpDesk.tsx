import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const HelpDesk: React.FC = () => {
	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Hospital Help Desk</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4 mb-6">
						<Input placeholder="Search for help topics..." className="flex-1" />
						<Button>
							<Search className="h-4 w-4 mr-2" />
							Search
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{[
							"System Navigation",
							"Patient Management",
							"Appointments",
							"Billing Support",
							"Technical Issues",
							"Emergency Support",
						].map((topic) => (
							<Button
								key={topic}
								variant="outline"
								className="h-24 flex flex-col items-center justify-center text-center p-4">
								<span className="font-semibold">{topic}</span>
								<span className="text-sm text-muted-foreground mt-1">
									Get help with {topic.toLowerCase()}
								</span>
							</Button>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
