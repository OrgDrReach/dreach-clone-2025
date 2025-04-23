"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, FileText, X } from "lucide-react";

interface Qualification {
	id: string;
	type: "degree" | "specialization" | "certification";
	title: string;
	institution: string;
	year: number;
	documentUrl: string;
	status: "pending" | "verified" | "rejected";
	verificationDate?: string;
	verifiedBy?: string;
	comments?: string;
}

export const QualificationVerification: React.FC = () => {
	const [selectedDoc, setSelectedDoc] = React.useState<Qualification | null>(
		null
	);
	const [isDialogOpen, setIsDialogOpen] = React.useState(false);

	// Mock data - Replace with actual API call
	const qualifications: Qualification[] = [
		{
			id: "1",
			type: "degree",
			title: "Doctor of Medicine (MD)",
			institution: "Harvard Medical School",
			year: 2018,
			documentUrl: "/path/to/document.pdf",
			status: "pending",
		},
		{
			id: "2",
			type: "specialization",
			title: "Cardiology Fellowship",
			institution: "Mayo Clinic",
			year: 2020,
			documentUrl: "/path/to/document.pdf",
			status: "verified",
			verificationDate: "2023-12-01",
			verifiedBy: "Admin",
		},
		{
			id: "3",
			type: "certification",
			title: "Advanced Cardiac Life Support",
			institution: "American Heart Association",
			year: 2022,
			documentUrl: "/path/to/document.pdf",
			status: "rejected",
			comments: "Document expired",
		},
	];

	const getStatusBadge = (status: Qualification["status"]) => {
		const styles = {
			pending:
				"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
			verified:
				"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
			rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
		};
		return styles[status];
	};

	const handleVerify = async (id: string, action: "verify" | "reject") => {
		// Implement verification logic
		console.log(`${action} qualification ${id}`);
		setIsDialogOpen(false);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Qualification Verification</CardTitle>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[400px]">
					<Table>
						<TableHeader>
							<TableRow className="bg-slate-50 dark:bg-slate-800">
								<TableHead className="font-semibold">Type</TableHead>
								<TableHead className="font-semibold">Title</TableHead>
								<TableHead className="font-semibold">Institution</TableHead>
								<TableHead className="font-semibold">Year</TableHead>
								<TableHead className="font-semibold">Status</TableHead>
								<TableHead className="font-semibold">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{qualifications.map((qual) => (
								<TableRow
									key={qual.id}
									className="hover:bg-slate-50 dark:hover:bg-slate-800">
									<TableCell className="capitalize">{qual.type}</TableCell>
									<TableCell>{qual.title}</TableCell>
									<TableCell>{qual.institution}</TableCell>
									<TableCell>{qual.year}</TableCell>
									<TableCell>
										<Badge className={getStatusBadge(qual.status)}>
											{qual.status}
										</Badge>
									</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<Button
												variant="ghost"
												size="sm"
												onClick={() => {
													setSelectedDoc(qual);
													setIsDialogOpen(true);
												}}>
												<FileText className="h-4 w-4" />
												<span className="ml-2">View</span>
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</ScrollArea>

				<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
					{selectedDoc && (
						<DialogContent className="max-w-2xl">
							<DialogHeader>
								<DialogTitle>Verify Qualification</DialogTitle>
							</DialogHeader>
							<div className="py-4">
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div>
										<p className="text-sm font-medium">Type</p>
										<p className="capitalize">{selectedDoc.type}</p>
									</div>
									<div>
										<p className="text-sm font-medium">Title</p>
										<p>{selectedDoc.title}</p>
									</div>
									<div>
										<p className="text-sm font-medium">Institution</p>
										<p>{selectedDoc.institution}</p>
									</div>
									<div>
										<p className="text-sm font-medium">Year</p>
										<p>{selectedDoc.year}</p>
									</div>
								</div>

								<div className="border rounded-lg p-4 mb-4">
									{/* Document preview would go here */}
									<p className="text-center text-gray-500">Document Preview</p>
								</div>

								{selectedDoc.status === "pending" && (
									<div className="flex justify-end gap-2">
										<Button
											variant="destructive"
											onClick={() => handleVerify(selectedDoc.id, "reject")}>
											<X className="h-4 w-4 mr-2" />
											Reject
										</Button>
										<Button
											variant="default"
											onClick={() => handleVerify(selectedDoc.id, "verify")}>
											<Check className="h-4 w-4 mr-2" />
											Verify
										</Button>
									</div>
								)}
							</div>
						</DialogContent>
					)}
				</Dialog>
			</CardContent>
		</Card>
	);
};
