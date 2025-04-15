import {
	EDayOfWeek,
	EDoctorConsultMode,
	EDoctorStatus,
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
			},
		],
		availability: [
			{
				day: [EDayOfWeek.MONDAY, EDayOfWeek.WEDNESDAY, EDayOfWeek.FRIDAY],
				slots: [
					{
						startTime: "09:00",
						endTime: "13:00",
					},
					{
						startTime: "14:00",
						endTime: "17:00",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO_CONSULT],
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

		// Doctor Specific Properties
		platform_id: "PLAT002",
		userId: "USR002",
		firstName: "Sarah",
		lastName: "Johnson",
		// phone: [4155550123],
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
			},
		],
		availability: [
			{
				day: [EDayOfWeek.TUESDAY, EDayOfWeek.THURSDAY],
				slots: [
					{
						startTime: "08:00",
						endTime: "16:00",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
		consultMode: [
			EDoctorConsultMode.CLINIC,
			EDoctorConsultMode.VIDEO_CONSULT,
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
			},
		],
		availability: [
			{
				day: [EDayOfWeek.MONDAY, EDayOfWeek.TUESDAY, EDayOfWeek.THURSDAY],
				slots: [
					{
						startTime: "08:30",
						endTime: "16:30",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO_CONSULT],
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
			},
		],
		availability: [
			{
				day: [EDayOfWeek.TUESDAY, EDayOfWeek.WEDNESDAY, EDayOfWeek.FRIDAY],
				slots: [
					{
						startTime: "09:30",
						endTime: "17:30",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO_CONSULT],
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
			},
		],
		availability: [
			{
				day: [EDayOfWeek.MONDAY, EDayOfWeek.WEDNESDAY, EDayOfWeek.FRIDAY],
				slots: [
					{
						startTime: "09:00",
						endTime: "17:00",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO_CONSULT],
	},
	{
		id: "DOC006",
		type: EProviderType.DOCTOR,
		name: "Dr. Lisa Wong",
		address: [
			{
				id: "ADD006",
				street: "567 Union Street",
				city: "San Francisco",
				state: "California",
				country: "USA",
				postalCode: "94133",
			},
		],
		contact: {
			phone: ["+1-415-555-0125"],
			email: "lisa.wong@healthcare.com",
			website: "www.drlisawong.com",
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
		platform_id: "PLAT006",
		userId: "USR006",
		firstName: "Lisa",
		lastName: "Wong",
		specialization: ["Obstetrics", "Gynecology"],
		degree: ["MD", "FACOG"],
		experience: 15,
		registrationNumber: "MED567890",
		clinic: [
			{
				id: "CLN006",
				name: "Bay Area Women's Health",
				address: [
					{
						id: "CLNADD006",
						street: "567 Union Street",
						city: "San Francisco",
						state: "California",
						country: "USA",
						postalCode: "94133",
					},
				],
				contact: [
					{
						phone: ["+1-415-555-0125"],
						email: "info@bawomenshealth.com",
						website: "www.bawomenshealth.com",
					},
				],
			},
		],
		availability: [
			{
				day: [EDayOfWeek.TUESDAY, EDayOfWeek.THURSDAY, EDayOfWeek.SATURDAY],
				slots: [
					{
						startTime: "08:00",
						endTime: "16:00",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO_CONSULT],
	},
	{
		id: "DOC007",
		type: EProviderType.DOCTOR,
		name: "Dr. Rajesh Mohanty",
		address: [
			{
				id: "ADD007",
				street: "42 College Square",
				city: "Cuttack",
				state: "Odisha",
				country: "India",
				postalCode: "753003",
			},
		],
		contact: {
			phone: ["+91-671-2555000"],
			email: "dr.rajesh@healthcare.com",
			website: "www.drrajeshmohanty.com",
		},
		operatingHours: {
			regular: {
				startTime: "10:00",
				endTime: "20:00",
			},
		},
		rating: 4.8,
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		platform_id: "PLAT007",
		userId: "USR007",
		firstName: "Rajesh",
		lastName: "Mohanty",
		specialization: ["General Medicine", "Diabetology"],
		degree: ["MBBS", "MD"],
		experience: 20,
		registrationNumber: "MCI123456",
		clinic: [
			{
				id: "CLN007",
				name: "Mohanty Clinic",
				address: [
					{
						id: "CLNADD007",
						street: "42 College Square",
						city: "Cuttack",
						state: "Odisha",
						country: "India",
						postalCode: "753003",
					},
				],
				contact: [
					{
						phone: ["+91-671-2555000"],
						email: "mohantyclinic@gmail.com",
						website: "www.mohantyclinic.com",
					},
				],
			},
		],
		availability: [
			{
				day: [
					EDayOfWeek.MONDAY,
					EDayOfWeek.TUESDAY,
					EDayOfWeek.WEDNESDAY,
					EDayOfWeek.THURSDAY,
					EDayOfWeek.FRIDAY,
				],
				slots: [
					{
						startTime: "10:00",
						endTime: "14:00",
					},
					{
						startTime: "17:00",
						endTime: "20:00",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
		consultMode: [
			EDoctorConsultMode.CLINIC,
			EDoctorConsultMode.VIDEO_CONSULT,
			EDoctorConsultMode.HOME_VISIT,
		],
	},
	{
		id: "DOC008",
		type: EProviderType.DOCTOR,
		name: "Dr. Priya Patra",
		address: [
			{
				id: "ADD008",
				street: "15 Mangalabag",
				city: "Cuttack",
				state: "Odisha",
				country: "India",
				postalCode: "753001",
			},
		],
		contact: {
			phone: ["+91-671-2555001"],
			email: "dr.priya@healthcare.com",
			website: "www.drpriyapatra.com",
		},
		operatingHours: {
			regular: {
				startTime: "09:00",
				endTime: "19:00",
			},
		},
		rating: 4.9,
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		platform_id: "PLAT008",
		userId: "USR008",
		firstName: "Priya",
		lastName: "Patra",
		specialization: ["Pediatrics", "Child Health"],
		degree: ["MBBS", "MD", "DCH"],
		experience: 15,
		registrationNumber: "MCI234567",
		clinic: [
			{
				id: "CLN008",
				name: "Little Stars Children's Clinic",
				address: [
					{
						id: "CLNADD008",
						street: "15 Mangalabag",
						city: "Cuttack",
						state: "Odisha",
						country: "India",
						postalCode: "753001",
					},
				],
				contact: [
					{
						phone: ["+91-671-2555001"],
						email: "littlestars@gmail.com",
						website: "www.littlestarsclinic.com",
					},
				],
			},
		],
		availability: [
			{
				day: [
					EDayOfWeek.MONDAY,
					EDayOfWeek.TUESDAY,
					EDayOfWeek.WEDNESDAY,
					EDayOfWeek.FRIDAY,
				],
				slots: [
					{
						startTime: "09:00",
						endTime: "13:00",
					},
					{
						startTime: "16:00",
						endTime: "19:00",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO_CONSULT],
	},
	{
		id: "DOC009",
		type: EProviderType.DOCTOR,
		name: "Dr. Sanjay Mishra",
		address: [
			{
				id: "ADD009",
				street: "78 Link Road",
				city: "Cuttack",
				state: "Odisha",
				country: "India",
				postalCode: "753012",
			},
		],
		contact: {
			phone: ["+91-671-2555002"],
			email: "dr.sanjay@healthcare.com",
			website: "www.drsanjaymishra.com",
		},
		operatingHours: {
			regular: {
				startTime: "11:00",
				endTime: "20:00",
			},
		},
		rating: 4.7,
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		platform_id: "PLAT009",
		userId: "USR009",
		firstName: "Sanjay",
		lastName: "Mishra",
		specialization: ["Cardiology"],
		degree: ["MBBS", "MD", "DM"],
		experience: 18,
		registrationNumber: "MCI345678",
		clinic: [
			{
				id: "CLN009",
				name: "Heart Care Center",
				address: [
					{
						id: "CLNADD009",
						street: "78 Link Road",
						city: "Cuttack",
						state: "Odisha",
						country: "India",
						postalCode: "753012",
					},
				],
				contact: [
					{
						phone: ["+91-671-2555002"],
						email: "heartcare@gmail.com",
						website: "www.heartcarecuttack.com",
					},
				],
			},
		],
		availability: [
			{
				day: [EDayOfWeek.MONDAY, EDayOfWeek.WEDNESDAY, EDayOfWeek.SATURDAY],
				slots: [
					{
						startTime: "11:00",
						endTime: "14:00",
					},
					{
						startTime: "17:00",
						endTime: "20:00",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
		consultMode: [EDoctorConsultMode.CLINIC, EDoctorConsultMode.VIDEO_CONSULT],
	},
	{
		id: "DOC010",
		type: EProviderType.DOCTOR,
		name: "Dr. Sunita Rath",
		address: [
			{
				id: "ADD010",
				street: "234 Badambadi",
				city: "Cuttack",
				state: "Odisha",
				country: "India",
				postalCode: "753009",
			},
		],
		contact: {
			phone: ["+91-671-2555003"],
			email: "dr.sunita@healthcare.com",
			website: "www.drsunitarath.com",
		},
		operatingHours: {
			regular: {
				startTime: "10:00",
				endTime: "18:00",
			},
		},
		rating: 4.8,
		isVerified: true,
		status: EDoctorStatus.ONLINE,
		platform_id: "PLAT010",
		userId: "USR010",
		firstName: "Sunita",
		lastName: "Rath",
		specialization: ["Gynecology", "Obstetrics"],
		degree: ["MBBS", "MS", "DNB"],
		experience: 16,
		registrationNumber: "MCI456789",
		clinic: [
			{
				id: "CLN010",
				name: "Maternity Care Center",
				address: [
					{
						id: "CLNADD010",
						street: "234 Badambadi",
						city: "Cuttack",
						state: "Odisha",
						country: "India",
						postalCode: "753009",
					},
				],
				contact: [
					{
						phone: ["+91-671-2555003"],
						email: "maternitycenter@gmail.com",
						website: "www.maternitycenter.com",
					},
				],
			},
		],
		availability: [
			{
				day: [EDayOfWeek.TUESDAY, EDayOfWeek.THURSDAY, EDayOfWeek.FRIDAY],
				slots: [
					{
						startTime: "10:00",
						endTime: "13:00",
					},
					{
						startTime: "15:00",
						endTime: "18:00",
					},
				],
			},
		],
		profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
		consultMode: [
			EDoctorConsultMode.CLINIC,
			EDoctorConsultMode.VIDEO_CONSULT,
			EDoctorConsultMode.HOME_VISIT,
		],
	},
];
