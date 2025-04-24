import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const ContactSupport: React.FC = () => {
	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Contact Support Team</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card>
							<CardContent className="pt-6">
								<div className="flex flex-col items-center text-center">
									<Phone className="h-12 w-12 mb-4 text-primary" />
									<h3 className="text-lg font-semibold mb-2">Phone Support</h3>
									<p className="text-muted-foreground mb-4">
										Available 24/7 for emergency support
									</p>
									<Button className="w-full">Call: +1 (555) 123-4567</Button>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="pt-6">
								<div className="flex flex-col items-center text-center">
									<Mail className="h-12 w-12 mb-4 text-primary" />
									<h3 className="text-lg font-semibold mb-2">Email Support</h3>
									<p className="text-muted-foreground mb-4">
										Response within 24 hours
									</p>
									<Button variant="outline" className="w-full">
										support@hospital.com
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="pt-6">
								<div className="flex flex-col items-center text-center">
									<MessageCircle className="h-12 w-12 mb-4 text-primary" />
									<h3 className="text-lg font-semibold mb-2">Live Chat</h3>
									<p className="text-muted-foreground mb-4">
										Instant support during business hours
									</p>
									<Button variant="secondary" className="w-full">
										Start Chat
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
