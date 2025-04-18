import {
	EDoctorConsultMode,
	EDoctorStatus,
	IFeaturedDoctor,
} from "@/types/doctor.d.types";
import { EProviderType } from "@/types/provider.d.types";

export const featuredDoctors: (IFeaturedDoctor & { type: EProviderType })[] = [
	{
		// Base Provider Properties
		id: "FDOC001",
		type: EProviderType.DOCTOR,
		firstName: "Emily",
		lastName: "Rodriguez",
		address: [
			{
				id: "FADD001",
				street: "123 Medical Drive",
				city: "Boston",
				state: "Massachusetts",
				country: "USA",
				postalCode: "02108",
			},
		],
		education: [
			{
				degree: "MD",
				institution: "Harvard Medical School",
				year: 2010,
			},
			{
				degree: "FACC",
				institution: "American College of Cardiology",
				year: 2012,
			},
		],
		contact: [
			{
				phone: ["+1-617-555-0123"],
				email: "emily.rodriguez@healthcare.com",
				website: "www.dremily.com",
			},
		],
		// Featured Doctor Properties
		specialization: ["Cardiology"],
		degree: ["MD", "FACC"],
		experience: 15,
		registrationNumber: "MED123456",
		profileImage:
			"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
		status: EDoctorStatus.ONLINE,
		consultMode: [EDoctorConsultMode.VIDEO, EDoctorConsultMode.CLINIC],
		isVerified: true,
		platform_id: "PLAT001",
		userId: "USR001",
		// Additional Featured Properties
		availableSlots: 12,
		consultationFee: 500,
		nextAvailable: "Today",
		featured: true,
		rating: 4.9,
		totalRatings: 482,
		isBookmarked: false,
		languages: ["English", "Spanish"],
		nextAvailableSlot: {
			date: "2025-04-10",
			time: "10:30",
		},
	},
	{
		id: "FDOC002",
		type: EProviderType.DOCTOR,
		firstName: "Michael",
		lastName: "Chen",
		address: [
			{
				id: "FADD002",
				street: "456 Healthcare Blvd",
				city: "San Francisco",
				state: "California",
				country: "USA",
				postalCode: "94105",
			},
		],
		education: [
			{
				degree: "MD",
				institution: "Stanford University School of Medicine",
				year: 2011,
			},
			{
				degree: "FAAP",
				institution: "American Academy of Pediatrics",
				year: 2013,
			},
		],
		contact: [
			{
				phone: ["+1-415-555-0123"],
				email: "michael.chen@healthcare.com",
				website: "www.drchen.com",
			},
		],
		specialization: ["Neurology", "Neurosurgery"],
		degree: ["MD", "PhD", "FAANS"],
		experience: 12,
		registrationNumber: "MED789012",
		profileImage:
			"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
		status: EDoctorStatus.ONLINE,
		consultMode: [EDoctorConsultMode.VIDEO],
		isVerified: true,
		platform_id: "PLAT002",
		userId: "USR002",
		availableSlots: 8,
		consultationFee: 600,
		nextAvailable: "Tomorrow",
		featured: true,
		rating: 4.8,
		totalRatings: 356,
		isBookmarked: false,
		languages: ["English", "Mandarin"],
		nextAvailableSlot: {
			date: "2025-04-11",
			time: "09:00",
		},
	},
	{
		id: "FDOC003",
		type: EProviderType.DOCTOR,
		firstName: "Sarah",
		lastName: "Thompson",
		address: [
			{
				id: "FADD003",
				street: "789 Pediatric Way",
				city: "Chicago",
				state: "Illinois",
				country: "USA",
				postalCode: "60601",
			},
		],
		education: [
			{
				degree: "MD",
				institution: "Yale School of Medicine",
				year: 2009,
			},
			{
				degree: "PhD",
				institution: "MIT",
				year: 2012,
			},
		],
		contact: [
			{
				phone: ["+1-312-555-0123"],
				email: "sarah.thompson@healthcare.com",
				website: "www.drthompson.com",
			},
		],
		specialization: ["Pediatrics", "Pediatric Cardiology"],
		degree: ["MD", "FAAP"],
		experience: 10,
		registrationNumber: "MED345678",
		profileImage:
			"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
		status: EDoctorStatus.ONLINE,
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.HOME_VISIT],
		isVerified: true,
		platform_id: "PLAT003",
		userId: "USR003",
		availableSlots: 15,
		consultationFee: 450,
		nextAvailable: "Today",
		featured: true,
		rating: 4.9,
		totalRatings: 289,
		isBookmarked: false,
		languages: ["English", "French"],
		nextAvailableSlot: {
			date: "2025-04-10",
			time: "14:00",
		},
	},
];

export default featuredDoctors;
