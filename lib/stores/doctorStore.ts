import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import { IDoctor, EDoctorStatus } from "@/types/doctor.d.types";
import { Provider, EProviderType } from "@/types/provider.d.types";
import {
  Appointment as AppointmentType,
  EAppointmentMode,
  EAppointmentStatus,
} from "@/types/appointment.d.types";

interface DoctorState {
  doctors: Provider[];
  filteredDoctors: Provider[];
  loading: boolean;
  error: string | null;

  // Actions
  fetchDoctors: (specialty?: string) => Promise<void>;
  searchDoctors: (searchInput: string | Provider[]) => void;
  bookAppointment: (
    appointment: AppointmentParams,
  ) => Promise<AppointmentType | null>;
}

// Interface for appointment booking parameters
interface AppointmentParams {
  patientId: string;
  providerId: string;
  dateTime: Date;
  mode: EAppointmentMode;
  reason?: string;
  notes?: string;
}

export const useDoctorStore = create<DoctorState>()(
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
            (provider: Provider) => provider.type === EProviderType.DOCTOR,
          );

          set({
            doctors,
            filteredDoctors: doctors,
            loading: false,
          });
        } catch (error) {
          set({
            error:
              error instanceof Error
                ? error.message
                : "Failed to fetch doctors",
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
                spec.toLowerCase().includes(searchInput.toLowerCase()),
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
          };

          const response = await axios.post(
            "/api/appointments",
            appointmentData,
          );
          set({ loading: false });
          return response.data;
        } catch (error) {
          set({
            error:
              error instanceof Error
                ? error.message
                : "Failed to book appointment",
            loading: false,
          });
          return null;
        }
      },
    }),
    { name: "DoctorStore" },
  ),
);
