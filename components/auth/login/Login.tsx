"use client";
import Header from "@/components/auth/login/header";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Img from "@/public/websiteImages/registerpageImage.webp";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Login = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleGoogleSignIn = async () => {
		try {
			setLoading(true);
			setError("");
			await signIn("google", {
				callbackUrl: "/auth/complete-profile",
				redirect: true,
			});
		} catch (err) {
			setError("Google login failed. Please try again.");
			setLoading(false);
		}
	};

	return (
		<section className="min-h-screen flex flex-col bg-[#d8eaee] dark:bg-[#1F2C3B]">
			<Header />
			<div className="flex-1 flex justify-center items-center xl:space-x-20 space-x-0 lg:space-x-6 p-4">
				<div className="hidden lg:block">
					<Image
						src={Img}
						alt="Login Page Image"
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
							Welcome to Dr. Reach
						</h2>
						<div className="text-center text-white mb-8">
							<p>Please sign in with your Google account to continue</p>
						</div>
						{error && (
							<p className="text-red-500 text-sm text-center mb-4">{error}</p>
						)}
						<button
							onClick={handleGoogleSignIn}
							disabled={loading}
							type="button"
							className="w-full flex items-center justify-center gap-3 px-4 py-3 text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#31addb] transition-all duration-200 hover:scale-[1.02]">
							<FcGoogle className="w-5 h-5" />
							<span>{loading ? "Signing in..." : "Continue with Google"}</span>
						</button>
						<p className="text-center text-white mt-6">
							Don&apos;t have an account?{" "}
							<Link
								href="/auth/register"
								className="text-orange-400 hover:text-orange-500 transition-colors duration-200">
								Register
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
