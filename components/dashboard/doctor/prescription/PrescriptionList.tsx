import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Plus,
	Search,
	FileText,
	CalendarDays,
	User2,
	Stethoscope,
} from "lucide-react";
import PrescriptionEditModal from "./PrescriptionModal";
import PrescriptionDeleteConfirm from "./PrescriptionDelete";
import PrescriptionCreateModal from "./CreatePrescription";
import { EPrescriptionStatus, IPrescription } from "@/types/doctor.d.types";

const PrescriptionList = () => {
	const [prescriptions, setPrescriptions] = useState<IPrescription[]>([
		{
			id: 1,
			name: "Amoxicillin",
			dosage: "500mg",
			frequency: "Three times daily",
			disease: "Bacterial Infection",
			labReportRequired: true,
			patientName: "John Doe",
			patientId: "PT001",
			date: "2025-04-30",
			notes: "Take after food. Avoid alcohol.",
			status: EPrescriptionStatus.ACTIVE,
		},
		{
			id: 2,
			name: "Metformin",
			dosage: "500mg",
			frequency: "Twice daily",
			disease: "Diabetes",
			labReportRequired: false,
			patientName: "Jane Smith",
			patientId: "PT002",
			date: "2025-04-28",
			notes: "Monitor blood sugar levels regularly.",
			status: EPrescriptionStatus.ACTIVE,
		},
	]);

	const [selectedPrescription, setSelectedPrescription] =
		useState<IPrescription | null>(null);
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredPrescriptions = prescriptions.filter(
		(p) =>
			p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			(p.disease?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
			p.patientName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="space-y-6 p-4">
			<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
				<div className="relative w-full sm:w-96">
					<Search
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
						size={20}
					/>
					<input
						type="text"
						placeholder="Search by medicine, disease or patient..."
						className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition dark:bg-gray-800 dark:border-gray-700 dark:text-white"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
					onClick={() => setShowCreateModal(true)}>
					<Plus size={20} />
					<span>New Prescription</span>
				</motion.button>
			</div>

			<AnimatePresence>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					{filteredPrescriptions.map((prescription) => (
						<motion.div
							key={prescription.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{prescription.name}
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-300">
										{prescription.dosage} - {prescription.frequency}
									</p>
								</div>
								<span
									className={`px-3 py-1 rounded-full text-xs font-medium ${
										prescription.status === "Active" ?
											"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
										: prescription.status === "Inactive" ?
											"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
										:	"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
									}`}>
									{prescription.status}
								</span>
							</div>

							<div className="space-y-2">
								<div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
									<Stethoscope size={16} />
									<span className="text-sm">{prescription.disease}</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
									<User2 size={16} />
									<span className="text-sm">{prescription.patientName}</span>
								</div>
								<div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
									<CalendarDays size={16} />
									<span className="text-sm">{prescription.date}</span>
								</div>
								{prescription.labReportRequired && (
									<div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
										<FileText size={16} />
										<span className="text-sm">Lab report required</span>
									</div>
								)}
							</div>

							<div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
								<p>{prescription.notes}</p>
							</div>

							<div className="mt-4 flex justify-end gap-2">
								<button
									onClick={() => {
										setSelectedPrescription(prescription);
										setShowEditModal(true);
									}}
									className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
									Edit
								</button>
								<button
									onClick={() => {
										setSelectedPrescription(prescription);
										setShowDeleteConfirm(true);
									}}
									className="px-3 py-1 text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
									Delete
								</button>
							</div>
						</motion.div>
					))}
				</div>
			</AnimatePresence>

			{showEditModal && selectedPrescription && (
				<PrescriptionEditModal
					prescription={selectedPrescription}
					onSave={(updated) => {
						setPrescriptions((prev) =>
							prev.map((p) => (p.id === updated.id ? updated : p))
						);
						setShowEditModal(false);
						setSelectedPrescription(null);
					}}
					onClose={() => {
						setShowEditModal(false);
						setSelectedPrescription(null);
					}}
				/>
			)}

			{showDeleteConfirm && selectedPrescription && (
				<PrescriptionDeleteConfirm
					prescription={selectedPrescription}
					onConfirm={() => {
						setPrescriptions((prev) =>
							prev.filter((p) => p.id !== selectedPrescription.id)
						);
						setShowDeleteConfirm(false);
						setSelectedPrescription(null);
					}}
					onClose={() => {
						setShowDeleteConfirm(false);
						setSelectedPrescription(null);
					}}
				/>
			)}

			{showCreateModal && (
				<PrescriptionCreateModal
					onSave={(newPrescription) => {
						setPrescriptions((prev) => [
							...prev,
							{ ...newPrescription, id: prev.length + 1 },
						]);
						setShowCreateModal(false);
					}}
					onClose={() => setShowCreateModal(false)}
				/>
			)}
		</div>
	);
};

export default PrescriptionList;
