"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from "react";
import { updateOAuthUser } from "@/server-actions/user";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ProviderModal from "../register/ProviderModal";

const completeProfileSchema = z.object({
	phone: z
		.string()
		.min(10, { message: "Phone number must be at least 10 digits." })
		.regex(/^[0-9]+$/, { message: "Phone number must contain only digits." }),
	userType: z.enum(["patient", "provider"], {
		required_error: "Please select a user type.",
	}),
});

type CompleteProfileFormData = z.infer<typeof completeProfileSchema>;

export default function CompleteProfile() {
	const { data: session, update } = useSession();
	const router = useRouter();
	const [isClient, setIsClient] = useState(false);
	const [showProviderModal, setShowProviderModal] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<CompleteProfileFormData>({
		resolver: zodResolver(completeProfileSchema),
		defaultValues: {
			userType: "patient",
		},
	});

	const onSubmit = async (data: CompleteProfileFormData) => {
		if (data.userType === "provider") {
			setShowProviderModal(true);
			return;
		}

		try {
			setLoading(true);
			const res = await updateOAuthUser(session?.user?.id || "", {
				phone: data.phone,
				userType: data.userType,
			});

			if (res.status !== 200) {
				toast.error(res.message || "Profile update failed");
				setLoading(false);
				return;
			}

			await update(); // Update the session with new data
			toast.success("Profile updated successfully!");
			if (isClient) {
				router.push("/dashboard");
			}
		} catch (error) {
			toast.error("An error occurred while updating your profile");
			setLoading(false);
		}
	};

	const handleProviderRoleSelect = async (
		role: "doctor" | "hospital" | "lab" | "pharmaceutical" | "ambulance"
	) => {
		try {
			setLoading(true);
			const formData = watch();
			const res = await updateOAuthUser(session?.user?.id || "", {
				phone: formData.phone,
				userType: "provider",
				providerRole: role,
			});

			if (res.status !== 200) {
				toast.error(res.message || "Profile update failed");
				setLoading(false);
				return;
			}

			await update(); // Update the session with new data
			toast.success("Profile updated successfully!");
			if (isClient) {
				router.push("/dashboard");
			}
		} catch (error) {
			toast.error("An error occurred while updating your profile");
			setLoading(false);
		}
	};

	if (!session && isClient) {
		router.push("/auth/login");
		return null;
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-[#d8eaee] dark:bg-[#1F2C3B] p-4">
			<div className="w-full max-w-md">
				<div className="bg-offer rounded-xl shadow-lg p-8">
					<h2 className="text-3xl font-bold text-center text-orange-400 mb-8">
						Complete Your Profile
					</h2>
					<p className="text-white text-center mb-6">
						Please provide additional information to complete your profile
					</p>
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
								Register as
							</label>
							<div className="grid grid-cols-2 gap-4 mt-1">
								<label
									className={`flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
										watch("userType") === "patient" ?
											"bg-[#31addb] text-white"
										:	"bg-white text-gray-700 hover:bg-gray-50"
									}`}>
									<input
										type="radio"
										{...register("userType")}
										value="patient"
										className="hidden"
									/>
									<span className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2">
											<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
											<circle cx="12" cy="7" r="4" />
										</svg>
										<span>Patient</span>
									</span>
								</label>
								<label
									className={`flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
										watch("userType") === "provider" ?
											"bg-[#31addb] text-white"
										:	"bg-white text-gray-700 hover:bg-gray-50"
									}`}>
									<input
										type="radio"
										{...register("userType")}
										value="provider"
										className="hidden"
									/>
									<span className="flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2">
											<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
											<path d="M3 9V7a2 2 0 0 1 2-2h2.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 12.07 2h1.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 5H19a2 2 0 0 1 2 2v2" />
											<circle cx="12" cy="13" r="3" />
										</svg>
										<span>Provider</span>
									</span>
								</label>
							</div>
						</div>
						<button
							type="submit"
							disabled={loading}
							className="w-full px-4 py-3 text-white bg-[#31addb] rounded-lg hover:bg-[#00bbff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#31addb] transition-colors duration-200">
							{loading ? "Updating..." : "Complete Profile"}
						</button>
					</form>
				</div>
			</div>
			<ProviderModal
				isOpen={showProviderModal}
				onClose={() => setShowProviderModal(false)}
				onSubmit={handleProviderRoleSelect}
			/>
		</div>
	);
}
