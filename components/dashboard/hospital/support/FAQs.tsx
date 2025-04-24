import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const FAQs: React.FC = () => {
	const faqs = [
		{
			question: "How do I reset my password?",
			answer:
				"To reset your password, click on the 'Forgot Password' link on the login page. Follow the instructions sent to your registered email address.",
		},
		{
			question: "How can I manage patient appointments?",
			answer:
				"Navigate to the Appointments section in the dashboard. You can view, schedule, reschedule, or cancel appointments from there.",
		},
		{
			question: "What should I do if the system is not responding?",
			answer:
				"First, try refreshing your browser. If the issue persists, contact technical support through the help desk.",
		},
		{
			question: "How do I generate reports?",
			answer:
				"Go to the Reports section, select the type of report you need, set the date range, and click Generate.",
		},
	];

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Frequently Asked Questions</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="relative mb-6">
						<Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
						<Input placeholder="Search FAQs..." className="pl-10" />
					</div>

					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger>{faq.question}</AccordionTrigger>
								<AccordionContent>{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</CardContent>
			</Card>
		</div>
	);
};
