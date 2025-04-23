"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DoctorsList: React.FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Doctors List</CardTitle>
			</CardHeader>
			<CardContent>{/* Add doctors list implementation */}</CardContent>
		</Card>
	);
};
