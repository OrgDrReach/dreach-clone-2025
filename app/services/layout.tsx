import React from "react";
import { RNChildProp } from "@/@types/interface/Interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dreach.in | Services",
  description:
    "Find the best medical services for your health needs. Book an appointment with experienced doctors and get quality care at home or in-clinic.",
};

export default function Layout({ children }: RNChildProp) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
