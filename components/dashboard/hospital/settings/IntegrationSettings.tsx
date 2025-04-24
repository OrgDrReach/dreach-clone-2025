import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Link2, Database, Cloud, Key } from "lucide-react";

const IntegrationSettings: React.FC = () => {
	return (
		<Card className="overflow-hidden shadow-lg">
			<CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-white p-6">
				<CardTitle className="text-2xl flex items-center gap-2">
					<Link2 /> Integration Settings
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6 space-y-6">
				<div className="space-y-4">
					<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
						<div className="space-y-0.5">
							<Label className="text-base flex items-center gap-2">
								<Database className="h-4 w-4" />
								EHR Integration
							</Label>
							<p className="text-sm text-muted-foreground">
								Connect with Electronic Health Records system
							</p>
						</div>
						<Switch defaultChecked />
					</div>

					<div className="space-y-3">
						<Label className="text-base flex items-center gap-2">
							<Key className="h-4 w-4" />
							API Key
						</Label>
						<div className="flex gap-2">
							<Input
								type="password"
								value="************************"
								readOnly
								className="font-mono"
							/>
							<Button variant="outline">Regenerate</Button>
						</div>
					</div>

					<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
						<div className="space-y-0.5">
							<Label className="text-base flex items-center gap-2">
								<Cloud className="h-4 w-4" />
								Cloud Storage
							</Label>
							<p className="text-sm text-muted-foreground">
								Enable cloud storage for medical records
							</p>
						</div>
						<Switch defaultChecked />
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default IntegrationSettings;
