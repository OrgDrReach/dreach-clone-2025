"use client";
import Image from "next/image";
import React from "react";
import Header from "@/components/auth/login/header";
import Img from "@/public/websiteImages/registerpageImage.webp";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Register = () => {
	const handleGoogleSignIn = () => {
		signIn("google", {
			callbackUrl: "/auth/complete-profile",
			redirect: true,
		});
	};

	return (
		<section className="min-h-screen flex flex-col bg-[#d8eaee] dark:bg-[#1F2C3B]">
			<Header />
			<div className="flex-1 flex justify-center items-center xl:space-x-20 space-x-0 lg:space-x-6 p-4">
				<div className="hidden lg:block">
					<Image
						src={Img}
						alt="Register Page Image"
						className="w-96 opacity-90 transition-opacity hover:opacity-100"
						priority
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
				</div>
				<div className="w-full max-w-md">
					<div className="bg-offer rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
						<h2 className="text-3xl font-bold text-center text-orange-400 mb-8">
							Create Account
						</h2>
						<div className="space-y-6">
							<button
								onClick={handleGoogleSignIn}
								type="button"
								className="w-full flex items-center justify-center gap-3 px-4 py-3 text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#31addb] transition-all duration-200 hover:scale-[1.02]">
								<FcGoogle className="w-5 h-5" />
								<span>Continue with Google</span>
							</button>
							<p className="text-center text-white">
								Already have an account?{" "}
								<Link
									href="/auth/login"
									className="text-orange-400 hover:text-orange-500 transition-colors duration-200">
									Login
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
