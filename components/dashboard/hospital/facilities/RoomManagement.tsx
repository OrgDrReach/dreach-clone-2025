import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface Room {
	id: string;
	number: string;
	type: "ward" | "icu" | "operation" | "emergency" | "consultation";
	floor: string;
	capacity: number;
	occupied: number;
	status: "available" | "occupied" | "maintenance" | "reserved";
	lastCleaned: string;
	equipment: string[];
}

export const RoomManagement: React.FC = () => {
	const rooms: Room[] = [
		{
			id: "RM001",
			number: "101",
			type: "ward",
			floor: "1st Floor",
			capacity: 4,
			occupied: 3,
			status: "available",
			lastCleaned: "2025-04-24",
			equipment: ["Beds", "Monitors", "Oxygen Supply"],
		},
		// Add more rooms
	];

	const getStatusColor = (status: Room["status"]) => {
		const colors = {
			available: "bg-green-100 text-green-800",
			occupied: "bg-blue-100 text-blue-800",
			maintenance: "bg-yellow-100 text-yellow-800",
			reserved: "bg-purple-100 text-purple-800",
		};
		return colors[status];
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle>Room Management</CardTitle>
					<Button>Add Room</Button>
				</div>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Room</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Occupancy</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Last Cleaned</TableHead>
							<TableHead>Equipment</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{rooms.map((room) => (
							<TableRow key={room.id}>
								<TableCell>
									<div className="font-medium">{room.number}</div>
									<div className="text-sm text-muted-foreground">
										{room.floor}
									</div>
								</TableCell>
								<TableCell className="capitalize">{room.type}</TableCell>
								<TableCell>
									{room.occupied}/{room.capacity}
								</TableCell>
								<TableCell>
									<Badge className={getStatusColor(room.status)}>
										{room.status}
									</Badge>
								</TableCell>
								<TableCell>{room.lastCleaned}</TableCell>
								<TableCell>
									<div className="flex flex-wrap gap-1">
										{room.equipment.map((item, index) => (
											<Badge
												key={index}
												variant="secondary"
												className="text-xs">
												{item}
											</Badge>
										))}
									</div>
								</TableCell>
								<TableCell>
									<Button variant="outline" size="sm">
										Manage
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};
