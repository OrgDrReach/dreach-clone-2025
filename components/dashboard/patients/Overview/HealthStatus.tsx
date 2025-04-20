import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	FaHeartbeat,
	FaCheck,
	FaExclamation,
	FaExclamationTriangle,
} from "react-icons/fa";
import { motion } from "framer-motion";

type HealthStatus = "good" | "caution" | "concern";

interface HealthStatusProps {
	status: HealthStatus;
}

const getStatusConfig = (status: HealthStatus) => {
	switch (status) {
		case "good":
			return {
				color: "bg-emerald-500",
				textColor: "text-emerald-500",
				icon: FaCheck,
				gradient: "from-emerald-400 to-emerald-600",
				description: "Everything looks good!",
			};
		case "caution":
			return {
				color: "bg-amber-500",
				textColor: "text-amber-500",
				icon: FaExclamation,
				gradient: "from-amber-400 to-amber-600",
				description: "Requires attention",
			};
		case "concern":
			return {
				color: "bg-rose-500",
				textColor: "text-rose-500",
				icon: FaExclamationTriangle,
				gradient: "from-rose-400 to-rose-600",
				description: "Immediate attention needed",
			};
		default:
			return {
				color: "bg-gray-500",
				textColor: "text-gray-500",
				icon: FaHeartbeat,
				gradient: "from-gray-400 to-gray-600",
				description: "Status unknown",
			};
	}
};

const HealthStatus: React.FC<HealthStatusProps> = ({ status }) => {
	const config = getStatusConfig(status);
	const StatusIcon = config.icon;

	return (
		<Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-gray-500">
			<CardHeader
				className={`bg-gradient-to-r ${config.gradient} text-white p-4 -mt-6`}>
				<CardTitle className="text-lg font-semibold flex items-center gap-2">
					<FaHeartbeat className="w-4 h-4" />
					Health Status Monitor
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6">
				<div className="flex flex-col items-center space-y-6">
					<motion.div
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
						className="relative">
						<div
							className={`w-20 h-20 rounded-full ${config.color} bg-opacity-20 flex items-center justify-center`}>
							<div
								className={`w-14 h-14 rounded-full ${config.color} flex items-center justify-center animate-pulse`}>
								<StatusIcon className="w-7 h-7 text-white" />
							</div>
						</div>
					</motion.div>

					<div className="text-center space-y-3">
						<Badge
							variant="outline"
							className={`${config.textColor} font-semibold px-3 py-1 rounded-full border-gray-400`}>
							{status.charAt(0).toUpperCase() + status.slice(1)}
						</Badge>
						<p className={`text-sm ${config.textColor} font-medium`}>
							{config.description}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default HealthStatus;
