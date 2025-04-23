"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { FaChartLine, FaTable } from "react-icons/fa";
import { motion } from "framer-motion";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface LabResult {
	date: string;
	bloodPressure: number;
	glucoseLevel: number;
}

interface LabResultsProps {
	results: LabResult[];
}

const LabResults: React.FC<LabResultsProps> = ({ results }) => {
	const [view, setView] = useState<"chart" | "table">("chart");

	const data = {
		labels: results.map((result) => result.date),
		datasets: [
			{
				label: "Blood Pressure",
				data: results.map((result) => result.bloodPressure),
				borderColor: "rgb(18, 88, 114)",
				backgroundColor: "rgba(18, 88, 114, 0.5)",
				tension: 0.4,
			},
			{
				label: "Glucose Level",
				data: results.map((result) => result.glucoseLevel),
				borderColor: "rgb(51, 135, 191)",
				backgroundColor: "rgba(51, 135, 191, 0.5)",
				tension: 0.4,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
				labels: {
					padding: 20,
					font: {
						size: 12,
						weight: "bold" as const,
					},
				},
			},
			tooltip: {
				mode: "index" as const,
				intersect: false,
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				padding: 12,
				titleFont: {
					size: 14,
					weight: "bold" as const,
				},
				bodyFont: {
					size: 13,
				},
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: true,
					color: "rgba(0, 0, 0, 0.1)",
				},
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
		interaction: {
			mode: "nearest" as const,
			axis: "x" as const,
			intersect: false,
		},
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-gray-500">
				<CardHeader className="bg-gradient-to-r from-[#285b6d] to-[#31addb] text-white rounded-t-lg p-4 -mt-6">
					<div className="flex items-center justify-between">
						<CardTitle className="text-xl font-semibold flex items-center">
							<FaChartLine className="w-6 h-6 mr-2" />
							Lab Results
						</CardTitle>
						<Tabs
							value={view}
							onValueChange={(value) => setView(value as "chart" | "table")}
							className="w-[200px]">
							<TabsList className="bg-[#285b6d] backdrop-blur-sm">
								<TabsTrigger value="chart" className="text-white data-[state=active]:bg-white/20">
									Chart View
								</TabsTrigger>
								<TabsTrigger value="table" className="text-white data-[state=active]:bg-white/20">
									Table View
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>
				</CardHeader>
				<CardContent className="pt-6">
					{view === "chart" ?
						<div className="h-[400px]">
							<Line options={options} data={data} />
						</div>
					:	<div className="rounded-lg border">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Date</TableHead>
										<TableHead>Blood Pressure</TableHead>
										<TableHead>Glucose Level</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{results.map((result, index) => (
										<TableRow key={result.date}>
											<TableCell>{result.date}</TableCell>
											<TableCell>{result.bloodPressure}</TableCell>
											<TableCell>{result.glucoseLevel}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					}
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default LabResults;
