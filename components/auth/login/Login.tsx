"use client";
import Header from "@/components/auth/login/header";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Img from "@/public/websiteImages/registerpageImage.webp";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInSchemaType } from "@/Zod/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const Login = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);

	// Check for stored credentials on mount
	React.useEffect(() => {
		const storedPhone = localStorage.getItem("rememberedPhone");
		const storedPassword = localStorage.getItem("rememberedPassword");
		if (storedPhone && storedPassword) {
			setValue("phone", storedPhone);
			setValue("password", storedPassword);
			setRememberMe(true);
		}
	}, []);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

	const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
		try {
			const result = await signIn("credentials", {
				phone: data.phone,
				password: data.password,
				redirect: false,
			});

			if (!result?.error) {
				// Store credentials if remember me is checked
				if (rememberMe) {
					localStorage.setItem("rememberedPhone", data.phone);
					localStorage.setItem("rememberedPassword", data.password);
				} else {
					localStorage.removeItem("rememberedPhone");
					localStorage.removeItem("rememberedPassword");
				}
				toast.success("Login successful");
				router.push("/dashboard");
			} else {
				toast.error("Invalid credentials");
			}
		} catch (error) {
			toast.error("An error occurred during login");
		}
	};

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
							Welcome Back
						</h2>
						<div className="space-y-6">
							<button
								onClick={handleGoogleSignIn}
								type="button"
								className="w-full flex items-center justify-center gap-3 px-4 py-3 text-gray-700 bg-white rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#31addb] transition-all duration-200 hover:scale-[1.02]">
								<FcGoogle className="w-5 h-5" />
								<span>Continue with Google</span>
							</button>
							<div className="relative my-6">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300"></div>
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 text-white bg-offer">
										Or continue with
									</span>
								</div>
							</div>
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
								<div>
									<label className="text-sm font-medium text-white">
										Mobile Number
									</label>
									<div className="flex gap-2">
										<div className="px-3 py-3 mt-1 border border-gray-300 rounded-lg bg-white text-gray-700 min-w-[100px] flex items-center justify-center">
											<p className={`font-bold`}>+91 (IND)</p>
										</div>
										<input
											type="tel"
											{...register("phone")}
											placeholder="Enter your mobile number"
											className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-[#31addb] focus:border-[#31addb] bg-white transition-all duration-200"
										/>
									</div>
									{errors.phone && (
										<p className="mt-1 text-sm text-red-400">
											{errors.phone.message}
										</p>
									)}
								</div>
								<div>
									<label className="text-sm font-medium text-white">
										Password
									</label>
									<div className="relative">
										<input
											type={showPassword ? "text" : "password"}
											title="Password"
											{...register("password")}
											placeholder="Password"
											className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#31addb] pr-10 bg-white text-black"
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1 text-gray-400 hover:text-gray-500">
											{showPassword ?
												<EyeOffIcon className="h-5 w-5" />
											:	<EyeIcon className="h-5 w-5" />}
										</button>
									</div>
									{errors.password && (
										<p className="mt-1 text-sm text-red-400">
											{errors.password.message}
										</p>
									)}
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<input
											type="checkbox"
											checked={rememberMe}
											onChange={(e) => setRememberMe(e.target.checked)}
											className="h-4 w-4 text-[#31addb] focus:ring-[#31addb] border-gray-300 rounded transition-colors duration-200"
										/>
										<label className="ml-2 block text-sm text-white">
											Remember me
										</label>
									</div>
									<Link
										href="/auth/forgot-password"
										className="text-sm text-orange-400 hover:text-orange-500 transition-colors duration-200">
										Forgot password?
									</Link>
								</div>
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full px-4 py-2 text-white hover:bg-[#00bbff] rounded-lg shadow bg-[#31addb] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed">
									{isSubmitting ?
										<div className="flex items-center justify-center">
											<div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
											<span className="ml-2">Logging in...</span>
										</div>
									:	"Login"}
								</button>
							</form>
							<p className="text-center text-white">
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
			</div>
		</section>
	);
};

export default Login;
