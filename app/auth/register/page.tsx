import Register from "@/components/auth/register/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth.config";

export const metadata: Metadata = {
	title: "Dreach.in | Register",
	description:
		"Create an account on Dreach.in. Register now and connect with doctors, dentists, vets, and other healthcare professionals.",
};

const RegisterPage = async () => {
	const session = await getServerSession(authOptions);

	if (session) {
		redirect("/dashboard");
	}

	return <Register />;
};

export default RegisterPage;
