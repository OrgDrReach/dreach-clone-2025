import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HelpCenter: React.FC = () => {
	return (
		<Card className="space-y-4 border-2 border-gray-300 dark:border-gray-600 shadow-md transition-all duration-300">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
					Help Center Overview
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-gray-600 dark:text-gray-300">
					Welcome to our Help Center. Here you'll find resources, guides, and
					support to help you make the most of our healthcare platform.
				</p>
			</CardContent>
		</Card>
	);
};

export default HelpCenter;
