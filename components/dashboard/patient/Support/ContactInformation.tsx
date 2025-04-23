import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	PhoneIcon,
	EnvelopeIcon,
	MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactInformation: React.FC = () => {
	return (
		<Card className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg hover:shadow-xl transition-all duration-300">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">Need Assistance?</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						{ icon: PhoneIcon, text: "+91 1234678967" },
						{ icon: EnvelopeIcon, text: "support@patientdashboard.com" },
						{
							icon: MapPinIcon,
							text: "123 Health Street, Medical City, 12345",
						},
					].map(({ icon: Icon, text }, index) => (
						<div
							key={index}
							className="flex items-center space-x-3 bg-white/20 p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/30 cursor-pointer">
							<Icon className="h-6 w-6" />
							<span className="text-lg font-medium">{text}</span>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ContactInformation;
