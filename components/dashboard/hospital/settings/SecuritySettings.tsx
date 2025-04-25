import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield, Key, Lock } from "lucide-react";

const SecuritySettings: React.FC = () => {
	return (
		<Card className="overflow-hidden shadow-lg">
			<CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-white p-6">
				<CardTitle className="text-2xl flex items-center gap-2">
					<Shield /> Security Settings
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6 space-y-6">
				<div className="space-y-4">
					<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
						<div className="space-y-0.5">
							<Label className="text-base flex items-center gap-2">
								<Key className="h-4 w-4" />
								Two-Factor Authentication
							</Label>
							<p className="text-sm text-muted-foreground">
								Secure your account with 2FA
							</p>
						</div>
						<Switch />
					</div>

					<div className="flex items-center justify-between p-4 bg-muted rounded-lg">
						<div className="space-y-0.5">
							<Label className="text-base flex items-center gap-2">
								<Lock className="h-4 w-4" />
								Automatic Logout
							</Label>
							<p className="text-sm text-muted-foreground">
								After 30 minutes of inactivity
							</p>
						</div>
						<Switch />
					</div>

					<div className="p-4 bg-muted rounded-lg">
						<h3 className="font-semibold mb-2">Password Requirements</h3>
						<ul className="space-y-1 text-sm text-muted-foreground">
							<li>• Minimum 8 characters long</li>
							<li>• At least one uppercase letter</li>
							<li>• At least one number</li>
							<li>• At least one special character</li>
						</ul>
					</div>

					<Button className="w-full">Update Security Settings</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default SecuritySettings;
