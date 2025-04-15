import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
	FaCalendar,
	FaClock,
	FaUser,
	FaEnvelope,
	FaPhone,
	FaNotesMedical,
} from "react-icons/fa";

import { useDoctorStore } from "@/lib/stores/doctorStore";
import { Provider, EProviderType } from "@/types/provider.d.types";
import { IDoctor, EDoctorConsultMode } from "@/types/doctor.d.types";
import {
	EAppointmentMode,
	EAppointmentStatus,
} from "@/types/appointment.d.types";
import { doctors as mockDoctors } from "@/data/doctorData";

// Add this helper function at the top of the file
const mapConsultModeToAppointmentMode = (
	consultMode: EDoctorConsultMode
): EAppointmentMode => {
	switch (consultMode) {
		case EDoctorConsultMode.VIDEO_CONSULT:
			return EAppointmentMode.VIDEO;
		case EDoctorConsultMode.HOME_VISIT:
			return EAppointmentMode.HOME_VISIT;
		case EDoctorConsultMode.CLINIC:
		case EDoctorConsultMode.HYBRID:
			return EAppointmentMode.IN_PERSON;
		default:
			return EAppointmentMode.IN_PERSON; // Default fallback
	}
};

// Enhanced Zod schema with consultation mode and reason
const BookingSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, { message: "Name must be at least 2 characters" }),
	email: z.string().trim().email({ message: "Invalid email address" }),
	phone: z
		.string()
		.trim()
		.regex(/^[6-9]\d{9}$/, { message: "Invalid 10-digit phone number" }),
	date: z.string().refine(
		(val) => {
			const selectedDate = new Date(val);
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			return selectedDate >= today;
		},
		{ message: "Date must be today or in the future" }
	),
	time: z.string().refine(
		(val) => {
			const [hours, minutes] = val.split(":").map(Number);
			if (hours === undefined || minutes === undefined) return false;
			const selectedTime = new Date();
			selectedTime.setHours(hours, minutes, 0, 0);
			const now = new Date();
			return selectedTime > now;
		},
		{ message: "Invalid time selected" }
	),
	consultMode: z.enum([
		EDoctorConsultMode.CLINIC,
		EDoctorConsultMode.VIDEO_CONSULT,
		EDoctorConsultMode.HOME_VISIT,
	]),
	reason: z
		.string()
		.min(10, { message: "Please provide a brief reason" })
		.max(500),
});

type BookingFormData = z.infer<typeof BookingSchema>;

interface AppointmentBookingModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedDoctor?: Provider & IDoctor;
}

export const AppointmentBookingModal: React.FC<
	AppointmentBookingModalProps
> = ({ isOpen, onClose, selectedDoctor: initialDoctor }) => {
	const { bookAppointment } = useDoctorStore();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [selectedDoctor, setSelectedDoctor] = useState<
		(Provider & IDoctor) | null
	>(initialDoctor || null);

	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm<BookingFormData>({
		resolver: zodResolver(BookingSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			date: "",
			time: "",
			consultMode: EDoctorConsultMode.CLINIC,
			reason: "",
		},
	});

	// Animation variants
	const modalVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
		exit: { opacity: 0, scale: 0.95 },
	};

	useEffect(() => {
		if (isOpen) {
			reset();
			setSelectedDoctor(initialDoctor || null);
		}
	}, [isOpen, initialDoctor, reset]);

	const onSubmit = async (data: BookingFormData): Promise<void> => {
		if (!selectedDoctor) {
			toast.error("Please select a doctor");
			return;
		}

		setIsSubmitting(true);
		try {
			const appointmentData = {
				patientId: "MOCK_PATIENT_ID", // Replace with actual patient ID
				providerId: selectedDoctor.id,
				dateTime: new Date(`${data.date}T${data.time}`),
				mode: mapConsultModeToAppointmentMode(data.consultMode),
				reason: data.reason,
				notes: `Appointment booked with ${selectedDoctor.name} for ${data.consultMode} consultation`,
			};

			const result = await bookAppointment(appointmentData);

			if (result) {
				toast.success("Appointment booked successfully!", {
					description: `Booked with ${selectedDoctor.name} on ${data.date} at ${data.time}`,
				});
				reset();
				onClose();
			} else {
				throw new Error("Booking failed");
			}
		} catch (error) {
			console.error("Booking error:", error);
			toast.error("Failed to book appointment", {
				description: "Please try again later.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const selectedConsultMode = watch("consultMode");

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={modalVariants}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
					<motion.div
						className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-auto relative flex flex-col max-h-[90vh]"
						variants={modalVariants}>
						{/* Fixed Header */}
						<div className="p-6 border-b border-gray-200 dark:border-gray-700">
							<div className="flex justify-between items-center">
								<h2 className="text-2xl font-bold bg-[#30ACDA] bg-clip-text text-transparent">
									Book Appointment
								</h2>
								<button
									onClick={onClose}
									className="rounded-full p-2 hover:bg-[#30acda]/10 transition-colors">
									✕
								</button>
							</div>

							{selectedDoctor && (
								<div className="mt-4 p-4 bg-gradient-to-br from-[#30acda]/10 to-[#2e5566]/10 rounded-xl">
									<div className="flex items-center gap-4">
										<img
											src={selectedDoctor.profileImage}
											alt={selectedDoctor.name}
											className="w-16 h-16 rounded-full object-cover border-2 border-white"
										/>
										<div>
											<h3 className="font-semibold text-lg">
												{selectedDoctor.name}
											</h3>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												{selectedDoctor.specialization.join(", ")}
											</p>
										</div>
									</div>
								</div>
							)}
						</div>

						{/* Scrollable Content */}
						<div className="flex-1 overflow-y-auto">
							<div className="px-6">
								<form
									id="appointment-form"
									onSubmit={handleSubmit(onSubmit)}
									className="py-6 space-y-6">
									{/* Form Fields */}
									<div className="space-y-4">
										{[
											{ icon: FaUser, label: "Full Name", field: "name" },
											{ icon: FaEnvelope, label: "Email", field: "email" },
											{ icon: FaPhone, label: "Phone", field: "phone" },
											{
												icon: FaCalendar,
												label: "Date",
												field: "date",
												type: "date",
											},
											{
												icon: FaClock,
												label: "Time",
												field: "time",
												type: "time",
											},
										].map(({ icon: Icon, label, field, type }) => (
											<div key={field} className="space-y-1">
												<label className="text-sm font-medium text-gray-700 dark:text-gray-300">
													{label}
												</label>
												<div className="relative">
													<Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
													<input
														type={type || "text"}
														{...register(field as keyof BookingFormData)}
														className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
														focus:ring-2 focus:ring-[#30acda] focus:border-transparent
														dark:bg-gray-700 dark:text-white"
													/>
												</div>
												{errors[field as keyof BookingFormData] && (
													<p className="text-sm text-red-500">
														{errors[field as keyof BookingFormData]?.message}
													</p>
												)}
											</div>
										))}

										{/* Consultation Mode */}
										<div className="space-y-1">
											<label className="text-sm font-medium text-gray-700 dark:text-gray-300">
												Consultation Mode
											</label>
											<select
												{...register("consultMode")}
												className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
												focus:ring-2 focus:ring-[#30acda] focus:border-transparent
												dark:bg-gray-700 dark:text-white">
												{Object.values(EDoctorConsultMode).map((mode) => (
													<option key={mode} value={mode}>
														{mode.replace("_", " ")}
													</option>
												))}
											</select>
										</div>

										{/* Reason for Visit */}
										<div className="space-y-1">
											<label className="text-sm font-medium text-gray-700 dark:text-gray-300">
												Reason for Visit
											</label>
											<div className="relative">
												<FaNotesMedical className="absolute left-3 top-3 text-gray-400" />
												<textarea
													{...register("reason")}
													className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
													focus:ring-2 focus:ring-[#30acda] focus:border-transparent
													dark:bg-gray-700 dark:text-white min-h-[100px]"
												/>
											</div>
											{errors.reason && (
												<p className="text-sm text-red-500">
													{errors.reason.message}
												</p>
											)}
										</div>
									</div>
								</form>
							</div>
						</div>

						{/* Fixed Footer */}
						<div className="p-6 border-t border-gray-200 dark:border-gray-700 mt-auto">
							<button
								type="submit"
								form="appointment-form" // Add this ID to your form
								disabled={isSubmitting}
								className="w-full bg-gradient-to-r from-[#2e5566] to-[#30acda] text-white py-3 rounded-xl
								hover:from-[#2e5566]/90 hover:to-[#30acda]/90 transition-all duration-300
								disabled:opacity-50 disabled:cursor-not-allowed">
								{isSubmitting ? "Booking..." : "Confirm Booking"}
							</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AppointmentBookingModal;
