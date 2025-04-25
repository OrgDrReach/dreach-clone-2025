import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Settings, Bell, Globe, Clock } from "lucide-react";

const SystemPreferences: React.FC = () => {
	return (
		<Card className="overflow-hidden shadow-lg">
			<CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-white p-6">
				<CardTitle className="text-2xl flex items-center gap-2">
					<Settings /> System Preferences
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6 space-y-6">
				<div className="space-y-4">
					<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
						<div className="space-y-0.5">
							<Label className="text-base flex items-center gap-2">
								<Bell className="h-4 w-4" />
								Email Notifications
							</Label>
							<p className="text-sm text-muted-foreground">
								Receive email notifications for important updates
							</p>
						</div>
						<Switch defaultChecked />
					</div>

					<div className="space-y-3">
						<Label className="text-base flex items-center gap-2">
							<Globe className="h-4 w-4" />
							Language
						</Label>
						<Select defaultValue="en">
							<SelectTrigger>
								<SelectValue placeholder="Select language" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="en">English</SelectItem>
								<SelectItem value="es">Spanish</SelectItem>
								<SelectItem value="fr">French</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-3">
						<Label className="text-base flex items-center gap-2">
							<Clock className="h-4 w-4" />
							Time Zone
						</Label>
						<Select defaultValue="utc">
							<SelectTrigger>
								<SelectValue placeholder="Select timezone" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="utc">UTC (GMT+0)</SelectItem>
								<SelectItem value="est">EST (GMT-5)</SelectItem>
								<SelectItem value="pst">PST (GMT-8)</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default SystemPreferences;
