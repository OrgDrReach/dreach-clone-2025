import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";

export const TechnicalSupport: React.FC = () => {
	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Technical Support Center</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* System Status */}
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">System Status</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{[
										{ name: "EMR System", status: "operational" },
										{ name: "Appointment System", status: "operational" },
										{ name: "Billing System", status: "maintenance" },
										{ name: "Lab Integration", status: "operational" },
									].map((system) => (
										<div
											key={system.name}
											className="flex items-center justify-between">
											<span>{system.name}</span>
											<Badge
												variant={
													system.status === "operational" ?
														"success"
													:	"warning"
												}>
												{system.status}
											</Badge>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Quick Actions */}
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Quick Actions</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<Button className="w-full justify-start">
										Report Technical Issue
									</Button>
									<Button className="w-full justify-start" variant="outline">
										Request Training
									</Button>
									<Button className="w-full justify-start" variant="outline">
										System Documentation
									</Button>
									<Button className="w-full justify-start" variant="outline">
										Contact IT Support
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
