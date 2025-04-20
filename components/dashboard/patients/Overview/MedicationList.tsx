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
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaPills, FaClock, FaExclamationCircle } from "react-icons/fa";

interface Medication {
	id: string;
	name: string;
	dosage: string;
	frequency: string;
	nextReminder: string;
}

interface MedicationListProps {
	medications: Medication[];
}

const MedicationList: React.FC<MedicationListProps> = ({ medications }) => {
	return (
		<Card className="shadow-lg hover:shadow-xl transition-all duration-300 ">
			<CardHeader className="bg-gradient-to-r  from-[#285b6d] to-[#31addb] text-white rounded-t-lg p-4 -mt-6">
				<CardTitle className="text-xl font-semibold flex items-center">
					<FaPills className="w-6 h-6 mr-2" />
					Medication Schedule
				</CardTitle>
			</CardHeader>
			<CardContent className="pt-6 overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="font-semibold text-indigo-900">
								Medication
							</TableHead>
							<TableHead className="font-semibold text-indigo-900">
								Dosage
							</TableHead>
							<TableHead className="font-semibold text-indigo-900">
								Frequency
							</TableHead>
							<TableHead className="font-semibold text-indigo-900">
								Next Reminder
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{medications.map((medication) => (
							<TableRow
								key={medication.id}
								className="hover:bg-[#d6f4ffc6] transition-colors duration-200">
								<TableCell className="font-medium text-blue-900">
									{medication.name}
								</TableCell>
								<TableCell>
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												<Badge
													variant="outline"
													className="bg-green-100 text-green-800 border-green-200 cursor-help">
													{medication.dosage}
												</Badge>
											</TooltipTrigger>
											<TooltipContent>
												<p>Prescribed dosage</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</TableCell>
								<TableCell className="text-gray-600">
									{medication.frequency}
								</TableCell>
								<TableCell>
									<div className="flex items-center space-x-2">
										<FaClock className="w-4 h-4 text-indigo-500" />
										<span className="text-indigo-600">
											{medication.nextReminder}
										</span>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<div className="px-6 py-4 bg-primary-200 rounded-b-lg">
				<p className="text-sm text-primary-800 flex items-center">
					<FaExclamationCircle className="w-4 h-4 mr-2 text-primary-500 flex-shrink-0" />
					<span>
						Always follow your doctor's instructions for medication use.
					</span>
				</p>
			</div>
		</Card>
	);
};

export default MedicationList;
