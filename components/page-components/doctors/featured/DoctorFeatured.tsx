"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import {
	FaStar,
	FaVideo,
	FaUserMd,
	FaClock,
	FaLanguage,
	FaUsers,
} from "react-icons/fa";

import {
	IFeaturedDoctor,
	IDoctor,
	EDoctorStatus,
} from "@/types/doctor.d.types";
import { AppointmentBookingModal } from "../booking/AppointmentBookingModal";
import ImageViewer from "@/components/images/ImageViewer";
import { useDoctorStore } from "@/lib/stores/doctorStore";
import { featuredDoctors } from "@/data/featuredDoctorData";
import {
	EProviderType,
	IBaseProvider,
	IContactInfo,
	Provider,
} from "@/types/provider.d.types";

// Add type conversion helper function
const convertToProviderDoctor = (featuredDoctor: IFeaturedDoctor): Provider => {
	// Extract first contact info or create default
	const contactInfo: IContactInfo = featuredDoctor.contact[0] || {
		phone: [],
		email: "",
		website: undefined,
		emergencyContact: undefined,
	};

	// Create base doctor object
	const doctorData: IBaseProvider & IDoctor = {
		id: featuredDoctor.id,
		type: EProviderType.DOCTOR,
		name: `${featuredDoctor.firstName} ${featuredDoctor.lastName}`,
		platform_id: featuredDoctor.platform_id,
		userId: featuredDoctor.userId,
		firstName: featuredDoctor.firstName,
		lastName: featuredDoctor.lastName,
		specialization: featuredDoctor.specialization,
		degree: featuredDoctor.degree,
		experience: featuredDoctor.experience,
		registrationNumber: featuredDoctor.registrationNumber,
		clinic: featuredDoctor.clinic,
		availability: featuredDoctor.availability,
		profileImage: featuredDoctor.profileImage,
		isVerified: featuredDoctor.isVerified,
		status: featuredDoctor.status,
		consultMode: featuredDoctor.consultMode,
		address: featuredDoctor.address,
		contact: contactInfo,
		rating: featuredDoctor.rating,
		operatingHours: {
			regular: {
				startTime: "09:00",
				endTime: "17:00",
			},
		},
		languages: featuredDoctor.languages || [],
		consultationFee: featuredDoctor.consultationFee,
		education: featuredDoctor.education || [
			{
				degree: featuredDoctor.degree[0] || "",
				institution: "Not specified",
				year: new Date().getFullYear() - featuredDoctor.experience,
			},
		],
	};

	return doctorData;
};

const DoctorFeatured = () => {
	const [selectedDoctor, setSelectedDoctor] = useState<IFeaturedDoctor | null>(
		null
	);
	const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
	const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const { fetchDoctors } = useDoctorStore();

	const handleBookNow = useCallback((doctor: IFeaturedDoctor) => {
		setSelectedDoctor(doctor);
		setIsBookingModalOpen(true);
	}, []);

	const handleCloseBooking = useCallback(() => {
		setSelectedDoctor(null);
		setIsBookingModalOpen(false);
	}, []);

	const handleImageClick = useCallback((imageSrc: string) => {
		setSelectedImage(imageSrc);
		setIsImageViewerOpen(true);
	}, []);

	return (
		<div className="py-12 px-4 sm:px-6 lg:px-8 relative">
			<Toaster richColors closeButton position="bottom-right" />

			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-10">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
							Featured Specialists
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Book appointments with our top-rated doctors
						</p>
					</div>
					<button className="inline-flex items-center px-4 py-2 border border-[#30acda] rounded-lg text-[#30acda] hover:bg-brand-light transition-all duration-200 font-medium">
						View All
						<svg
							className="w-4 h-4 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{featuredDoctors.map((doctor, index) => (
						<motion.div
							key={doctor.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.4,
								delay: index * 0.1,
								ease: "easeOut",
							}}
							whileHover={{ y: -5, scale: 1.02 }}
							className="bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-strong transition-all duration-400 overflow-hidden border border-gray-100/20 dark:border-gray-700/30">
							<div className="relative h-48 overflow-hidden group">
								<div
									className="cursor-pointer relative w-full h-full"
									onClick={() => handleImageClick(doctor.profileImage || "")}>
									<Image
										src={doctor.profileImage || "/websiteImages/dr-shantanu.png"}
										alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
										className="object-cover transform group-hover:scale-110 transition-transform duration-400"
										priority={index < 4} // Prioritize loading for first 4 images
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
										<span className="text-white text-sm px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full">
											Click to expand
										</span>
									</div>
								</div>
								{doctor.status === EDoctorStatus.ONLINE && (
									<div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-xs text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center shadow-soft animate-pulse-soft">
										<div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
										<FaVideo className="mr-1.5" />
										Online
									</div>
								)}
							</div>

							<div className="p-5">
								<div className="mb-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
										Dr. {doctor.firstName} {doctor.lastName}
									</h3>
									<p className="text-[#30acda] dark:text-[#30acda] font-medium flex items-center">
										<span className="w-2 h-2 bg-[#30acda] dark:bg-[#30acda] rounded-full mr-2"></span>
										{doctor.specialization[0]}
									</p>
								</div>

								<div className="space-y-3 mb-4">
									<div className="flex items-center justify-between text-sm">
										<div className="flex items-center text-gray-600 dark:text-gray-300">
											<FaUserMd className="mr-2 text-gray-400" />
											<span>{doctor.experience} years</span>
										</div>
										<div className="flex items-center text-gray-600 dark:text-gray-300">
											<FaUsers className="mr-2 text-gray-400" />
											<span>{doctor.totalRatings}+ patients</span>
										</div>
									</div>

									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<FaStar className="text-yellow-400 mr-1" />
											<span className="font-medium">{doctor.rating}</span>
										</div>
										<div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
											<FaLanguage className="mr-1 text-gray-400" />
											{doctor.languages?.slice(0, 2).join(", ")}
										</div>
									</div>

									<div className="flex items-center justify-between">
										<div className="text-green-600 dark:text-green-400 font-medium text-sm flex items-center">
											<FaClock className="mr-2" />
											Next: {doctor.nextAvailable}
										</div>
										<div className="text-gray-900 dark:text-white font-semibold">
											₹{doctor.consultationFee}
										</div>
									</div>
								</div>

								<button
									onClick={() => handleBookNow(doctor)}
									className="w-full bg-[#30acda] hover:bg-brand-secondary text-white font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group shadow-sm hover:shadow-md">
									<span>Book Appointment</span>
									<svg
										className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 7l5 5m0 0l-5 5m5-5H6"
										/>
									</svg>
								</button>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<ImageViewer
				isOpen={isImageViewerOpen}
				onClose={() => setIsImageViewerOpen(false)}>
				{selectedImage && (
					<Image
						src={selectedImage}
						alt="Doctor profile"
						width={800}
						height={600}
						className="max-w-full max-h-[85vh] object-contain rounded-lg"
						priority
					/>
				)}
			</ImageViewer>

			<AppointmentBookingModal
				isOpen={isBookingModalOpen}
				onClose={handleCloseBooking}
				selectedDoctor={
					selectedDoctor ? convertToProviderDoctor(selectedDoctor) : undefined
				}
			/>
		</div>
	);
};

export default DoctorFeatured;
