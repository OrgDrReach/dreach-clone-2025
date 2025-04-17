import Login from "@/components/auth/login/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dreach.in | Login",
  description:
    "Login to your Dreach.in account. Access your patient dashboard, view medical records, book appointments, and communicate with healthcare professionals securely.",
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return <Login />;
}
