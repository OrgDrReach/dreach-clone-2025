"use client";
import React from "react";
import HospitalProfile from "./HospitalProfile";
import UserManagement from "./UserManagement";
import AccessControl from "./AccessControl";
import SystemPreferences from "./SystemPreferences";
import IntegrationSettings from "./IntegrationSettings";
import SecuritySettings from "./SecuritySettings";
import BackupManagement from "./BackupManagement";

interface SystemSettingsProps {
	section: string;
}

const SystemSettings: React.FC<SystemSettingsProps> = ({ section }) => {
	const renderSection = () => {
		switch (section) {
			case "profile":
				return <HospitalProfile />;
			case "users":
				return <UserManagement />;
			case "access":
				return <AccessControl />;
			case "preferences":
				return <SystemPreferences />;
			case "integrations":
				return <IntegrationSettings />;
			case "security":
				return <SecuritySettings />;
			case "backup":
				return <BackupManagement />;
			default:
				return <HospitalProfile />;
		}
	};

	return <div className="space-y-6">{renderSection()}</div>;
};

export default SystemSettings;
