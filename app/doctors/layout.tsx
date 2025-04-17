import React from "react";
import { RNChildProp } from "@/@types/interface/Interface";
import { Metadata } from "next";
import { AppointmentProvider } from "@/components/contexts/AppointmentContext";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Dreach.in | Doctors",
  description:
    "Dreach.in is a platform for doctors and patients to connect and communicate.",
};

const layout: React.FC = ({ children }: RNChildProp) => {
  return (
    <main>
      <AppointmentProvider>
        <Toaster richColors closeButton position="bottom-right" />
        <div>{children}</div>
      </AppointmentProvider>
    </main>
  );
};

export default layout;
