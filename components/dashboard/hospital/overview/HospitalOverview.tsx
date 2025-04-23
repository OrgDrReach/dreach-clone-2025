import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface HospitalOverviewProps {
	children?: React.ReactNode;
}

const LoadingSpinner = () => (
	<div className="flex items-center justify-center min-h-[200px]">
		<Loader2 className="h-8 w-8 animate-spin text-primary" />
	</div>
);

const HospitalOverview: React.FC<HospitalOverviewProps> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6">
			<Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
		</motion.div>
	);
};

export default HospitalOverview;
