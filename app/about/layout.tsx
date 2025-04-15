import React from "react";
import { RNChildProp } from "@/@types/interface/Interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dreach.in | About Us",
  description:
    "Dreach.in is a healthcare technology company that provides a platform for doctors and patients to connect and communicate. Learn more about our mission, vision, and values.",
};

export default function Layout({ children }: RNChildProp) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
