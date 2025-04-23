import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	AccountSettings,
	NotificationPreferences,
	LanguageSettings,
	SecuritySettings,
	DataSharingPreferences,
	ConsentManagement,
	DeviceSettings,
	HelpAndSupport,
} from "@/components/dashboard/patient/Settings";

const SettingsPage: React.FC = () => {
	return (
		<div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl space-y-6">
			<Tabs defaultValue="account" className="w-full">
				<TabsList className="grid w-full bg-[#125872] text-white grid-cols-3 lg:grid-cols-5 mb-6">
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="preferences">Preferences</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
					<TabsTrigger value="help">Help</TabsTrigger>
				</TabsList>

				<TabsContent value="account" className="space-y-4">
					<AccountSettings />
					<LanguageSettings />
				</TabsContent>

				<TabsContent value="notifications">
					<NotificationPreferences />
				</TabsContent>

				<TabsContent value="preferences" className="space-y-4">
					<DataSharingPreferences />
					<ConsentManagement />
					<DeviceSettings />
				</TabsContent>

				<TabsContent value="security">
					<SecuritySettings />
				</TabsContent>

				<TabsContent value="help">
					<HelpAndSupport />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default SettingsPage;
