import { create } from "zustand";
import { doctors as mockDoctors } from "@/data/doctorData";
import { IDoctor, EDoctorStatus } from "@/types/doctor.d.types";
import { Provider, EProviderType } from "@/types/provider.d.types";
import { devtools } from "zustand/middleware";
import axios from "axios";
import {
	Appointment as AppointmentType,
	EAppointmentMode,
	EAppointmentStatus,
} from "@/types/appointment.d.types";

// Interface for appointment booking parameters
interface AppointmentParams {
	patientId: string;
	providerId: string;
	dateTime: Date;
	mode: EAppointmentMode;
	reason?: string;
	notes?: string;
}

interface DoctorState {
	doctors: Provider[];
	filteredDoctors: Provider[];
	loading: boolean;
	error: string | null;

	// Actions
	fetchDoctors: (specialty?: string) => Promise<void>;
	searchDoctors: (searchInput: string | Provider[]) => void;
	bookAppointment: (
		appointment: AppointmentParams
	) => Promise<AppointmentType | null>;
}

interface DoctorStore {
	doctors: (Provider & IDoctor)[];
	filteredDoctors: (Provider & IDoctor)[];
	isLoading: boolean;
	error: string | null;
	fetchDoctors: () => Promise<void>;
	searchDoctors: (searchInput: string | Provider[]) => void;
	addDoctor: (doctor: Provider & IDoctor) => Promise<void>;
	bookAppointment: (
		appointment: AppointmentParams
	) => Promise<AppointmentType | null>;
}

export const useDoctorState = create<DoctorState>()(
	devtools(
		(set, get) => ({
			doctors: [],
			filteredDoctors: [],
			loading: false,
			error: null,

			fetchDoctors: async (specialty?: string) => {
				set({ loading: true, error: null });
				try {
					const response = await axios.get("/api/doctors", {
						params: {
							specialty,
							type: EProviderType.DOCTOR,
							status: EDoctorStatus.ONLINE,
						},
					});

					const doctors = response.data.filter(
						(provider: Provider) => provider.type === EProviderType.DOCTOR
					);

					set({
						doctors,
						filteredDoctors: doctors,
						loading: false,
					});
				} catch (error) {
					set({
						error:
							error instanceof Error ?
								error.message
							:	"Failed to fetch doctors",
						loading: false,
					});
				}
			},

			searchDoctors: (searchInput: string | Provider[]) => {
				if (typeof searchInput === "string") {
					const { doctors } = get();
					const filtered = doctors.filter((doctor: Provider) => {
						const doctorData = doctor as Provider & IDoctor;
						return (
							doctorData.name
								.toLowerCase()
								.includes(searchInput.toLowerCase()) ||
							doctorData.specialization.some((spec) =>
								spec.toLowerCase().includes(searchInput.toLowerCase())
							)
						);
					});
					set({ filteredDoctors: filtered });
				} else {
					set({ filteredDoctors: searchInput, loading: false, error: null });
				}
			},

			bookAppointment: async (params: AppointmentParams) => {
				set({ loading: true, error: null });
				try {
					const appointmentData: AppointmentType = {
						...params,
						id: crypto.randomUUID(),
						status: EAppointmentStatus.SCHEDULED,
						providerType: EProviderType.DOCTOR,
						service: params.mode, // Set service to match the appointment mode
					};

					const response = await axios.post(
						"/api/appointments",
						appointmentData
					);
					set({ loading: false });
					return response.data;
				} catch (error) {
					set({
						error:
							error instanceof Error ?
								error.message
							:	"Failed to book appointment",
						loading: false,
					});
					return null;
				}
			},
		}),
		{ name: "DoctorStore" }
	)
);

export const useDoctorStore = create<DoctorStore>((set) => ({
	doctors: [],
	filteredDoctors: [],
	isLoading: false,
	error: null,
	fetchDoctors: async () => {
		set({ isLoading: true, error: null });
		try {
			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 1000));
			set({ doctors: mockDoctors as (Provider & IDoctor)[], isLoading: false });
		} catch (error) {
			set({ error: "Failed to fetch doctors", isLoading: false });
		}
	},
	/**
	 * Search for doctors based on the given search input.
	 * @param {string | Provider[]} searchInput - The search input string or an array of Provider objects to filter by.
	 * @returns {Promise<void>} - A promise that resolves when the search is complete.
	 */
	searchDoctors: async (searchInput: string | Provider[]) => {
		set({ isLoading: true, error: null });
		try {
			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 1000));
			set({ filteredDoctors: searchInput as (Provider & IDoctor)[], isLoading: false });
		} catch (error) {
			set({ error: "Failed to search doctors", isLoading: false });
		}
	},

	bookAppointment: async (params: AppointmentParams) => {
		set({ isLoading: true, error: null });
		try {
			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 1000));
			set({ isLoading: false });
			
			const appointment: AppointmentType = {
				id: crypto.randomUUID(),
				patientId: params.patientId,
				providerId: params.providerId,
				providerType: EProviderType.DOCTOR,
				dateTime: params.dateTime,
				service: params.mode,
				status: EAppointmentStatus.SCHEDULED,
				reason: params.reason,
				notes: params.notes
			};
			return appointment;
		} catch (error) {
			set({ error: "Failed to book appointment", isLoading: false });
			return null;
		}
	},

	addDoctor: async (doctor: Provider & IDoctor) => {
		set({ isLoading: true, error: null });
		try {
			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 1000));
			set((state) => ({
				doctors: [
					...state.doctors,
					{ ...doctor, id: `DOC${state.doctors.length + 1}` },
				],
				isLoading: false,
			}));
		} catch (error) {
			set({ error: "Failed to add doctor", isLoading: false });
		}
	},
}));
