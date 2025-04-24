"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpDesk } from "./HelpDesk";
import { TechnicalSupport } from "./TechnicalSupport";
import { UserGuides } from "./UserGuides";
import { FAQs } from "./FAQs";
import { TicketManagement } from "./TicketManagement";
import { ContactSupport } from "./ContactSupport";
import { FeedbackSystem } from "./FeedbackSystem";

const SupportSystem: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6">
			<Card>
				<CardContent className="p-6">
					<Tabs defaultValue="helpdesk" className="w-full">
						<TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-4">
							<TabsTrigger value="helpdesk">Help Desk</TabsTrigger>
							<TabsTrigger value="technical">Technical</TabsTrigger>
							<TabsTrigger value="guides">Guides</TabsTrigger>
							<TabsTrigger value="faqs">FAQs</TabsTrigger>
							<TabsTrigger value="tickets">Tickets</TabsTrigger>
							<TabsTrigger value="contact">Contact</TabsTrigger>
							<TabsTrigger value="feedback">Feedback</TabsTrigger>
						</TabsList>

						<TabsContent value="helpdesk">
							<HelpDesk />
						</TabsContent>
						<TabsContent value="technical">
							<TechnicalSupport />
						</TabsContent>
						<TabsContent value="guides">
							<UserGuides />
						</TabsContent>
						<TabsContent value="faqs">
							<FAQs />
						</TabsContent>
						<TabsContent value="tickets">
							<TicketManagement />
						</TabsContent>
						<TabsContent value="contact">
							<ContactSupport />
						</TabsContent>
						<TabsContent value="feedback">
							<FeedbackSystem />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default SupportSystem;
