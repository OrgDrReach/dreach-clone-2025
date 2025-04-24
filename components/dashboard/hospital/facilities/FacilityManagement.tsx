"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfrastructureStatus } from "./InfrastructureStatus";
import { MaintenanceSchedule } from "./MaintenanceSchedule";
import { EquipmentTracking } from "./EquipmentTracking";
import { RoomManagement } from "./RoomManagement";
import { UtilityMonitoring } from "./UtilityMonitoring";
import { SecuritySystem } from "./SecuritySystem";
import { SanitationTracking } from "./SanitationTracking";

const FacilityManagement: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="space-y-6">
			<Card>
				<CardContent className="p-6">
					<Tabs defaultValue="infrastructure" className="w-full">
						<TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-4">
							<TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
							<TabsTrigger value="maintenance">Maintenance</TabsTrigger>
							<TabsTrigger value="equipment">Equipment</TabsTrigger>
							<TabsTrigger value="rooms">Rooms</TabsTrigger>
							<TabsTrigger value="utilities">Utilities</TabsTrigger>
							<TabsTrigger value="security">Security</TabsTrigger>
							<TabsTrigger value="sanitation">Sanitation</TabsTrigger>
						</TabsList>

						<TabsContent value="infrastructure">
							<InfrastructureStatus />
						</TabsContent>
						<TabsContent value="maintenance">
							<MaintenanceSchedule />
						</TabsContent>
						<TabsContent value="equipment">
							<EquipmentTracking />
						</TabsContent>
						<TabsContent value="rooms">
							<RoomManagement />
						</TabsContent>
						<TabsContent value="utilities">
							<UtilityMonitoring />
						</TabsContent>
						<TabsContent value="security">
							<SecuritySystem />
						</TabsContent>
						<TabsContent value="sanitation">
							<SanitationTracking />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default FacilityManagement;
