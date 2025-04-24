import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Database, Calendar, Download, Clock } from "lucide-react";

const BackupManagement: React.FC = () => {
	return (
		<Card className="overflow-hidden shadow-lg">
			<CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-white p-6">
				<CardTitle className="text-2xl flex items-center gap-2">
					<Database /> Backup Management
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6 space-y-6">
				<div className="space-y-4">
					<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
						<div className="space-y-0.5">
							<Label className="text-base flex items-center gap-2">
								<Clock className="h-4 w-4" />
								Automatic Backups
							</Label>
							<p className="text-sm text-muted-foreground">
								Schedule regular automatic backups
							</p>
						</div>
						<Switch defaultChecked />
					</div>

					<div className="space-y-3">
						<Label className="text-base flex items-center gap-2">
							<Calendar className="h-4 w-4" />
							Backup Frequency
						</Label>
						<Select defaultValue="daily">
							<SelectTrigger>
								<SelectValue placeholder="Select backup frequency" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="daily">Daily</SelectItem>
								<SelectItem value="weekly">Weekly</SelectItem>
								<SelectItem value="monthly">Monthly</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-3">
						<Label>Last Backup</Label>
						<div className="p-4 bg-muted rounded-lg">
							<p className="text-sm">April 23, 2025 - 11:30 PM</p>
							<p className="text-sm text-muted-foreground">Size: 2.5 GB</p>
						</div>
					</div>

					<Button className="w-full flex items-center gap-2">
						<Download className="h-4 w-4" />
						Backup Now
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default BackupManagement;
