import { create } from "zustand";
import { doctors as mockDoctors } from "@/data/doctorData";
import { IDoctor } from "@/types/doctor.d.types";
import { Provider } from "@/types/provider.d.types";

interface DoctorStore {
	doctors: (Provider & IDoctor)[];
	isLoading: boolean;
	error: string | null;
	fetchDoctors: () => Promise<void>;
	addDoctor: (doctor: Provider & IDoctor) => Promise<void>;
}

export const useDoctorStore = create<DoctorStore>((set) => ({
	doctors: [],
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
