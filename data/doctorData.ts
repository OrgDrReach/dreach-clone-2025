import {
	EDayOfWeek,
	EDoctorConsultMode,
	EDoctorStatus,
	EClinicRole,
} from "@/types/doctor.d.types";
import { EProviderType, Provider } from "@/types/provider.d.types";

export const doctors: Provider[] = [
	{
		// Base Provider Properties
		id: "DOC001",
		type: EProviderType.DOCTOR,
		name: "Dr. John Smith",
		address: [
			{
				id: "ADD001",
				street: "123 Medical Drive",
				city: "Boston",
				state: "Massachusetts",
				country: "USA",
				postalCode: "02108",
			},
		],
		contact: {
			phone: ["+1-617-555-0123", "+1-617-555-0124"],
			email: "john.smith@healthcare.com",
			website: "www.drjohnsmith.com",
			emergencyContact: "+1-617-555-0125",
		},
		operatingHours: {
			regular: {
				startTime: "09:00",
				endTime: "17:00",
			},
			weekends: {
				startTime: "10:00",
				endTime: "14:00",
			},
		},
		rating: 4.8,
		reviews: [
			{
				id: "REV001",
				userId: "USR001",
				rating: 5,
				comment: "Excellent doctor, very thorough and professional",
				createdAt: new Date("2025-03-15"),
				verifiedVisit: true, // Added required property
			},
		],
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		languages: ["English"],
		education: [
			{
				degree: "MD",
				institution: "Harvard Medical School",
				year: 2008,
			},
			{
				degree: "FACC",
				institution: "American College of Cardiology",
				year: 2010,
			},
		],

		// Doctor Specific Properties
		platform_id: "PLAT001",
		userId: "USR001",
		firstName: "John",
		lastName: "Smith",
		specialization: ["Cardiology", "Internal Medicine"],
		degree: ["MD", "FACC"],
		experience: 15,
		registrationNumber: "MED123456",
		clinic: [
			{
				id: "CLN001",
				name: "Boston Heart Clinic",
				address: [
					{
						id: "CLNADD001",
						street: "123 Medical Drive",
						city: "Boston",
						state: "Massachusetts",
						country: "USA",
						postalCode: "02108",
					},
				],
				contact: [
					{
						phone: ["+1-617-555-0123"],
						email: "clinic@bostonheart.com",
						website: "www.bostonheartclinic.com",
					},
				],
				role: EClinicRole.DOCTOR,
				startDate: new Date("2020-01-01"),
			},
		],
		availability: [
			{
				day: [EDayOfWeek.MONDAY, EDayOfWeek.WEDNESDAY, EDayOfWeek.FRIDAY],
				slots: [
					{
						startTime: "09:00",
						endTime: "13:00",
						isBooked: false,
					},
					{
						startTime: "14:00",
						endTime: "17:00",
						isBooked: false,
					},
				],
				clinicId: "CLN001",
			},
		],
		profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO],
	},
	{
		// Second Doctor
		id: "DOC002",
		type: EProviderType.DOCTOR,
		name: "Dr. Sarah Johnson",
		address: [
			{
				id: "ADD002",
				street: "456 Healthcare Avenue",
				city: "San Francisco",
				state: "California",
				country: "USA",
				postalCode: "94105",
			},
		],
		contact: {
			phone: ["+1-415-555-0123"],
			email: "sarah.johnson@healthcare.com",
			website: "www.drsarahjohnson.com",
		},
		operatingHours: {
			regular: {
				startTime: "08:00",
				endTime: "16:00",
			},
		},
		rating: 4.9,
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		languages: ["English", "Spanish"],
		education: [
			{
				degree: "MD",
				institution: "Stanford University School of Medicine",
				year: 2010,
			},
			{
				degree: "FAAP",
				institution: "American Academy of Pediatrics",
				year: 2012,
			},
		],

		// Doctor Specific Properties
		platform_id: "PLAT002",
		userId: "USR002",
		firstName: "Sarah",
		lastName: "Johnson",
		specialization: ["Pediatrics", "Neonatology"],
		degree: ["MD", "FAAP"],
		experience: 12,
		registrationNumber: "MED789012",
		clinic: [
			{
				id: "CLN002",
				name: "SF Children's Clinic",
				address: [
					{
						id: "CLNADD002",
						street: "456 Healthcare Avenue",
						city: "San Francisco",
						state: "California",
						country: "USA",
						postalCode: "94105",
					},
				],
				contact: [
					{
						phone: ["+1-415-555-0123"],
						email: "clinic@sfchildren.com",
						website: "www.sfchildrensclinic.com",
					},
				],
				role: EClinicRole.DOCTOR,
				startDate: new Date("2019-01-01"),
			},
		],
		availability: [
			{
				day: [EDayOfWeek.TUESDAY, EDayOfWeek.THURSDAY],
				slots: [
					{
						startTime: "08:00",
						endTime: "16:00",
						isBooked: false,
					},
				],
				clinicId: "CLN002",
			},
		],
		profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
		consultMode: [
			EDoctorConsultMode.CLINIC,
			EDoctorConsultMode.VIDEO,
			EDoctorConsultMode.HOME_VISIT,
		],
	},
	{
		id: "DOC003",
		type: EProviderType.DOCTOR,
		name: "Dr. Michael Chen",
		address: [
			{
				id: "ADD003",
				street: "789 Beacon Street",
				city: "Boston",
				state: "Massachusetts",
				country: "USA",
				postalCode: "02115",
			},
		],
		contact: {
			phone: ["+1-617-555-0126"],
			email: "michael.chen@healthcare.com",
			website: "www.drmichaelchen.com",
		},
		operatingHours: {
			regular: {
				startTime: "08:30",
				endTime: "16:30",
			},
		},
		rating: 4.7,
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		languages: ["English", "Mandarin"],
		education: [
			{
				degree: "MD",
				institution: "Yale School of Medicine",
				year: 2012,
			},
			{
				degree: "PhD",
				institution: "MIT",
				year: 2015,
			},
		],
		platform_id: "PLAT003",
		userId: "USR003",
		firstName: "Michael",
		lastName: "Chen",
		specialization: ["Neurology", "Sleep Medicine"],
		degree: ["MD", "PhD"],
		experience: 10,
		registrationNumber: "MED234567",
		clinic: [
			{
				id: "CLN003",
				name: "Boston Neurology Center",
				address: [
					{
						id: "CLNADD003",
						street: "789 Beacon Street",
						city: "Boston",
						state: "Massachusetts",
						country: "USA",
						postalCode: "02115",
					},
				],
				contact: [
					{
						phone: ["+1-617-555-0126"],
						email: "contact@bostonneurology.com",
						website: "www.bostonneurology.com",
					},
				],
				role: EClinicRole.DOCTOR,
				startDate: new Date("2021-03-15"),
			},
		],
		availability: [
			{
				day: [EDayOfWeek.MONDAY, EDayOfWeek.TUESDAY, EDayOfWeek.THURSDAY],
				slots: [
					{
						startTime: "08:30",
						endTime: "16:30",
						isBooked: false,
					},
				],
				clinicId: "CLN003",
			},
		],
		profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO],
	},
	{
		id: "DOC004",
		type: EProviderType.DOCTOR,
		name: "Dr. Emily Rodriguez",
		address: [
			{
				id: "ADD004",
				street: "456 Commonwealth Avenue",
				city: "Boston",
				state: "Massachusetts",
				country: "USA",
				postalCode: "02215",
			},
		],
		contact: {
			phone: ["+1-617-555-0127"],
			email: "emily.rodriguez@healthcare.com",
			website: "www.dremilyr.com",
		},
		operatingHours: {
			regular: {
				startTime: "09:30",
				endTime: "17:30",
			},
		},
		rating: 4.9,
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		languages: ["English", "Spanish"],
		education: [
			{
				degree: "MD",
				institution: "Columbia University",
				year: 2014,
			},
			{
				degree: "FAAD",
				institution: "American Academy of Dermatology",
				year: 2016,
			},
		],
		platform_id: "PLAT004",
		userId: "USR004",
		firstName: "Emily",
		lastName: "Rodriguez",
		specialization: ["Dermatology"],
		degree: ["MD", "FAAD"],
		experience: 8,
		registrationNumber: "MED345678",
		clinic: [
			{
				id: "CLN004",
				name: "Boston Skin Institute",
				address: [
					{
						id: "CLNADD004",
						street: "456 Commonwealth Avenue",
						city: "Boston",
						state: "Massachusetts",
						country: "USA",
						postalCode: "02215",
					},
				],
				contact: [
					{
						phone: ["+1-617-555-0127"],
						email: "info@bostonskin.com",
						website: "www.bostonskin.com",
					},
				],
				role: EClinicRole.DOCTOR,
				startDate: new Date("2022-01-10"),
			},
		],
		availability: [
			{
				day: [EDayOfWeek.TUESDAY, EDayOfWeek.WEDNESDAY, EDayOfWeek.FRIDAY],
				slots: [
					{
						startTime: "09:30",
						endTime: "17:30",
						isBooked: false,
					},
				],
				clinicId: "CLN004",
			},
		],
		profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO],
	},
	{
		id: "DOC005",
		type: EProviderType.DOCTOR,
		name: "Dr. David Park",
		address: [
			{
				id: "ADD005",
				street: "890 Market Street",
				city: "San Francisco",
				state: "California",
				country: "USA",
				postalCode: "94102",
			},
		],
		contact: {
			phone: ["+1-415-555-0124"],
			email: "david.park@healthcare.com",
			website: "www.drdavidpark.com",
		},
		operatingHours: {
			regular: {
				startTime: "09:00",
				endTime: "17:00",
			},
		},
		rating: 4.8,
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		languages: ["English", "Korean"],
		education: [
			{
				degree: "MD",
				institution: "UCSF School of Medicine",
				year: 2010,
			},
			{
				degree: "FAAOS",
				institution: "American Academy of Orthopaedic Surgeons",
				year: 2012,
			},
		],
		platform_id: "PLAT005",
		userId: "USR005",
		firstName: "David",
		lastName: "Park",
		specialization: ["Orthopedics", "Sports Medicine"],
		degree: ["MD", "FAAOS"],
		experience: 12,
		registrationNumber: "MED456789",
		clinic: [
			{
				id: "CLN005",
				name: "SF Sports Medicine",
				address: [
					{
						id: "CLNADD005",
						street: "890 Market Street",
						city: "San Francisco",
						state: "California",
						country: "USA",
						postalCode: "94102",
					},
				],
				contact: [
					{
						phone: ["+1-415-555-0124"],
						email: "info@sfsportsmedicine.com",
						website: "www.sfsportsmedicine.com",
					},
				],
				role: EClinicRole.DOCTOR,
				startDate: new Date("2020-06-15"),
			},
		],
		availability: [
			{
				day: [EDayOfWeek.MONDAY, EDayOfWeek.WEDNESDAY, EDayOfWeek.FRIDAY],
				slots: [
					{
						startTime: "09:00",
						endTime: "17:00",
						isBooked: false,
					},
				],
				clinicId: "CLN005",
			},
		],
		profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO],
	},
];
