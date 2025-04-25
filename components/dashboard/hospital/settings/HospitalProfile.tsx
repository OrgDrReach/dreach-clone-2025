import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const HospitalProfile: React.FC = () => {
	return (
		<Card className="overflow-hidden shadow-lg">
			<CardHeader className="bg-gradient-to-r from-[#125872] to-[#0e465a] text-white p-6">
				<CardTitle className="text-2xl flex items-center gap-2">
					<Building2 /> Hospital Profile
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6 space-y-6">
				<div className="flex items-center gap-4">
					<Avatar className="h-24 w-24 border-4 border-white shadow-xl">
						<AvatarImage src="/hospital-logo.png" alt="Hospital logo" />
						<AvatarFallback>H</AvatarFallback>
					</Avatar>
					<Button variant="outline">Change Logo</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="hospitalName">Hospital Name</Label>
						<Input id="hospitalName" placeholder="Enter hospital name" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="licenseNumber">License Number</Label>
						<Input id="licenseNumber" placeholder="Enter license number" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Email Address</Label>
						<div className="relative">
							<Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
							<Input
								id="email"
								type="email"
								className="pl-10"
								placeholder="hospital@example.com"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="phone">Phone Number</Label>
						<div className="relative">
							<Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
							<Input
								id="phone"
								type="tel"
								className="pl-10"
								placeholder="+1 (555) 000-0000"
							/>
						</div>
					</div>

					<div className="space-y-2 md:col-span-2">
						<Label htmlFor="address">Address</Label>
						<div className="relative">
							<MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
							<Input
								id="address"
								className="pl-10"
								placeholder="Enter hospital address"
							/>
						</div>
					</div>
				</div>

				<Button className="w-full">Save Changes</Button>
			</CardContent>
		</Card>
	);
};

export default HospitalProfile;
