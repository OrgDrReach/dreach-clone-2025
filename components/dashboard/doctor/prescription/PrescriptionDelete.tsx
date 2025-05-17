import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { IPrescription } from "@/types/doctor.d.types";

interface PrescriptionDeleteConfirmProps {
	prescription: IPrescription;
	onConfirm: () => void;
	onClose: () => void;
}

const PrescriptionDeleteConfirm: React.FC<PrescriptionDeleteConfirmProps> = ({
	prescription,
	onConfirm,
	onClose,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
			<motion.div
				initial={{ scale: 0.95 }}
				animate={{ scale: 1 }}
				className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
				<div className="flex justify-between items-center p-4 border-b">
					<h2 className="text-xl font-semibold text-red-600 flex items-center gap-2">
						<AlertTriangle className="text-red-600" size={24} />
						Confirm Deletion
					</h2>
					<button
						onClick={onClose}
						className="p-1 hover:bg-gray-100 rounded-full transition-colors">
						<X size={20} />
					</button>
				</div>

				<div className="p-4 space-y-4">
					<div className="text-gray-600">
						<p className="mb-2">
							Are you sure you want to delete the prescription for:
						</p>
						<div className="bg-gray-50 p-3 rounded-md">
							<p className="font-semibold text-gray-800">{prescription.name}</p>
							<p className="text-sm text-gray-600">
								Dosage: {prescription.dosage}
							</p>
							<p className="text-sm text-gray-600">
								Frequency: {prescription.frequency}
							</p>
						</div>
					</div>

					<div className="bg-yellow-50 border border-yellow-100 rounded-md p-3 text-sm text-yellow-800">
						This action cannot be undone. The prescription will be permanently
						deleted.
					</div>

					<div className="flex gap-4 pt-4">
						<button
							type="button"
							onClick={onClose}
							className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
							Cancel
						</button>
						<button
							type="button"
							onClick={onConfirm}
							className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
							Delete Prescription
						</button>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default PrescriptionDeleteConfirm;
