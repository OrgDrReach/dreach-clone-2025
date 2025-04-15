"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Provider, EProviderType } from "@/types/provider.d.types";
import {
  Appointment,
  EAppointmentStatus,
  EAppointmentMode,
  EPaymentStatus,
} from "@/types/appointment.d.types";

interface IAppointmentContextType {
  loading: boolean;
  selectedProvider: Provider | null;
  setSelectedProvider: (provider: Provider | null) => void;
  bookAppointment: (details: IAppointmentDetails) => Promise<void>;
}

interface IAppointmentDetails {
  patientId: string;
  providerId: string;
  providerType: EProviderType;
  dateTime: Date;
  mode: EAppointmentMode;
  reason?: string;
  notes?: string;
  payment?: {
    amount: number;
    method?: string;
  };
}

export const AppointmentContext = createContext<IAppointmentContextType>({
  loading: false,
  selectedProvider: null,
  setSelectedProvider: () => {},
  bookAppointment: async () => {},
});

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(
    null,
  );

  const bookAppointment = async (
    details: IAppointmentDetails,
  ): Promise<void> => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Add your actual API call here

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppointmentContext.Provider
      value={{
        loading,
        selectedProvider,
        setSelectedProvider,
        bookAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error(
      "useAppointment must be used within an AppointmentProvider",
    );
  }
  return context;
};

export type { IAppointmentDetails };
