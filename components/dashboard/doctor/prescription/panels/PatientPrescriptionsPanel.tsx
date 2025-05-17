import React, { useState, useEffect } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { IPatientList } from "@/types/user.d.types";
import { Button } from "@/components/ui/button";
import {
	Eye,
	FileText,
	Edit2,
	Send,
	Check,
	X,
	Trash2,
	AlertCircle,
} from "lucide-react";
import { getPrescriptionsByPatientId } from "@/data/prescriptionData";
import { Input } from "@/components/ui/input";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CreatePrescriptionModal } from "../modals/CreatePrescriptionModal";
import { EPrescriptionStatus, IPrescription } from "@/types/doctor.d.types";

interface PatientPrescriptionsPanelProps {
	patient: IPatientList | null;
	searchTerm: string;
	prescriptions: IPrescription[];
	setPrescriptions: React.Dispatch<React.SetStateAction<IPrescription[]>>;
	onAddPrescription: () => void;
}

export const PatientPrescriptionsPanel: React.FC<
	PatientPrescriptionsPanelProps
> = ({
	patient,
	searchTerm,
	prescriptions,
	setPrescriptions,
	onAddPrescription,
}) => {
	const [editingId, setEditingId] = useState<number | null>(null);
	const [editForm, setEditForm] = useState<Partial<IPrescription>>({});
	const [prescriptionToDelete, setPrescriptionToDelete] = useState<
		number | null
	>(null);
	const [showAddModal, setShowAddModal] = useState(false);

	const filteredPrescriptions = prescriptions.filter((prescription) =>
		prescription.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleEdit = (prescription: IPrescription) => {
		setEditingId(prescription.id);
		setEditForm(prescription);
	};

	const handleSave = (id: number) => {
		setPrescriptions(
			prescriptions.map((p) =>
				p.id === id ?
					{
						...p,
						...editForm,
						status: EPrescriptionStatus.DRAFT, // Reset status to Draft after editing
					}
				:	p
			)
		);
		setEditingId(null);
		setEditForm({});
	};

	const handleCancel = () => {
		setEditingId(null);
		setEditForm({});
	};

	const handleSendToPatient = (id: number) => {
		setPrescriptions(
			prescriptions.map((p) => (p.id === id ? { ...p, status: EPrescriptionStatus.SENT } : p))
		);
	};

	const handleDelete = (id: number) => {
		setPrescriptions(prescriptions.filter((p) => p.id !== id));
		setPrescriptionToDelete(null);
	};

	const handleAddPrescription = (
		newPrescription: Omit<IPrescription, "id">
	) => {
		const prescription: IPrescription = {
			...newPrescription,
			id: Date.now(), // Generate a temporary ID
		};
		setPrescriptions([...prescriptions, prescription]);
		setShowAddModal(false);
	};

	if (!patient) {
		return (
			<div className="flex-1 flex items-center justify-center">
				<p className="text-gray-500 dark:text-gray-400">
					Select a patient to view their prescriptions
				</p>
			</div>
		);
	}

	return (
		<>
			<ScrollArea className="flex-1">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Date</TableHead>
							<TableHead>Medication</TableHead>
							<TableHead>Dosage</TableHead>
							<TableHead>Frequency</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Actions</TableHead>
							<TableHead>Send to Patient</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredPrescriptions.map((prescription) => (
							<TableRow key={prescription.id}>
								<TableCell>
									{editingId === prescription.id ?
										<Input
											value={editForm.date || ""}
											onChange={(e) =>
												setEditForm({ ...editForm, date: e.target.value })
											}
											className="w-32"
										/>
									:	prescription.date}
								</TableCell>
								<TableCell>
									{editingId === prescription.id ?
										<Input
											value={editForm.name || ""}
											onChange={(e) =>
												setEditForm({ ...editForm, name: e.target.value })
											}
										/>
									:	prescription.name}
								</TableCell>
								<TableCell>
									{editingId === prescription.id ?
										<Input
											value={editForm.dosage || ""}
											onChange={(e) =>
												setEditForm({ ...editForm, dosage: e.target.value })
											}
											className="w-24"
										/>
									:	prescription.dosage}
								</TableCell>
								<TableCell>
									{editingId === prescription.id ?
										<Input
											value={editForm.frequency || ""}
											onChange={(e) =>
												setEditForm({ ...editForm, frequency: e.target.value })
											}
										/>
									:	prescription.frequency}
								</TableCell>
								<TableCell>
									<Badge
										variant={
											prescription.status === "Sent" ? "success" : "secondary"
										}>
										{prescription.status || "Draft"}
									</Badge>
								</TableCell>
								<TableCell>
									{editingId === prescription.id ?
										<div className="flex gap-2">
											<Button
												variant="outline"
												size="sm"
												onClick={() => handleSave(prescription.id)}
												className="text-green-600">
												<Check className="h-4 w-4" />
											</Button>
											<Button
												variant="outline"
												size="sm"
												onClick={handleCancel}
												className="text-red-600">
												<X className="h-4 w-4" />
											</Button>
										</div>
									:	<div className="flex gap-2">
											<Button
												variant="outline"
												size="sm"
												onClick={() => handleEdit(prescription)}>
												<Edit2 className="h-4 w-4 mr-1" />
												Edit
											</Button>
											<Button
												variant="outline"
												size="sm"
												onClick={() => setPrescriptionToDelete(prescription.id)}
												className="text-red-600"
												disabled={prescription.status === "Sent"}>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									}
								</TableCell>
								<TableCell>
									<Button
										variant="outline"
										size="sm"
										onClick={() => handleSendToPatient(prescription.id)}
										disabled={prescription.status === "Sent"}
										className={
											prescription.status === "Sent" ?
												"text-gray-400"
											:	"text-blue-600"
										}>
										<Send className="h-4 w-4 mr-1" />
										{prescription.status === "Sent" ? "Sent" : "Send"}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</ScrollArea>

			<AlertDialog
				open={prescriptionToDelete !== null}
				onOpenChange={() => setPrescriptionToDelete(null)}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle className="flex items-center gap-2">
							<AlertCircle className="h-5 w-5 text-red-500" />
							Confirm Deletion
						</AlertDialogTitle>
						<AlertDialogDescription>
							Are you sure you want to delete this prescription? This action
							cannot be undone.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							className="bg-red-600 hover:bg-red-700 text-white"
							onClick={() =>
								prescriptionToDelete && handleDelete(prescriptionToDelete)
							}>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<CreatePrescriptionModal
				isOpen={showAddModal}
				onClose={() => setShowAddModal(false)}
				onSave={handleAddPrescription}
				patient={patient}
			/>
		</>
	);
};
