"use server";

import { SignUpSchema, SignUpSchemaType, otpSchema } from "@/Zod/zod";
import { EUserRole } from "@/types/user.d.types";

// Type for tracking OTP attempts
type OTPAttempt = {
	attempts: number;
	lastAttempt: number;
	blocked: boolean;
};

// In-memory store for rate limiting (in a real app, use Redis or similar)
const otpAttempts = new Map<string, OTPAttempt>();

const MAX_OTP_ATTEMPTS = 3;
const BLOCK_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
const ATTEMPT_RESET_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

export const registerUser = async (formdata: SignUpSchemaType) => {
	try {
		const result = SignUpSchema.safeParse(formdata);

		if (!result.success) {
			return {
				status: 400,
				message: "Invalid form data",
			};
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone: formdata.phone,
				password: formdata.password,
				name: formdata.name,
				email: formdata.email,
				providerType: formdata.providerType,
				
			}),
		});

		const data = await res.json();
		return {
			status: res.status,
			message: data.message,
			userId: data.userId,
		};
	} catch (error) {
		console.error("Registration error:", error);
		return {
			status: 500,
			message: "Internal server error",
		};
	}
};

export const verifyUser = async (phone: string, otp: string) => {
	try {
		// Validate OTP format
		const otpValidation = otpSchema.safeParse({ otp });
		if (!otpValidation.success) {
			return {
				status: 400,
				message: "Invalid OTP format",
			};
		}

		// Check rate limiting
		const attempt = otpAttempts.get(phone) || {
			attempts: 0,
			lastAttempt: 0,
			blocked: false,
		};
		const now = Date.now();

		// Check if blocked
		if (attempt.blocked) {
			const timeLeft = Math.ceil(
				(attempt.lastAttempt + BLOCK_DURATION - now) / 1000 / 60
			);
			if (now - attempt.lastAttempt < BLOCK_DURATION) {
				return {
					status: 429,
					message: `Too many failed attempts. Please try again in ${timeLeft} minutes.`,
				};
			} else {
				// Reset after block duration
				attempt.blocked = false;
				attempt.attempts = 0;
			}
		}

		// Reset attempts if enough time has passed
		if (now - attempt.lastAttempt > ATTEMPT_RESET_TIME) {
			attempt.attempts = 0;
		}

		// Update attempt count
		attempt.attempts++;
		attempt.lastAttempt = now;

		// Block if too many attempts
		if (attempt.attempts > MAX_OTP_ATTEMPTS) {
			attempt.blocked = true;
			otpAttempts.set(phone, attempt);
			return {
				status: 429,
				message: "Too many failed attempts. Please try again in 30 minutes.",
			};
		}

		otpAttempts.set(phone, attempt);

		const res = await fetch(`${process.env["SERVER_URL"]}/user/verify`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone,
				otp,
			}),
		});

		const data = await res.json();

		// Reset attempts on successful verification
		if (res.status === 201) {
			otpAttempts.delete(phone);
		}

		return {
			status: res.status,
			message: data.message,
			token: data.token,
		};
	} catch (error) {
		console.error("Verification error:", error);
		return {
			status: 500,
			message: "Internal server error",
		};
	}
};

export const resendOTP = async (phone: string) => {
	try {
		// Check if user is blocked from requesting OTP
		const attempt = otpAttempts.get(phone);
		if (attempt?.blocked) {
			const timeLeft = Math.ceil(
				(attempt.lastAttempt + BLOCK_DURATION - Date.now()) / 1000 / 60
			);
			if (Date.now() - attempt.lastAttempt < BLOCK_DURATION) {
				return {
					status: 429,
					message: `Please wait ${timeLeft} minutes before requesting a new OTP.`,
				};
			}
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/resend-otp`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone,
			}),
		});

		const data = await res.json();

		// Initialize new attempt tracking on successful OTP send
		if (res.status === 201) {
			otpAttempts.set(phone, {
				attempts: 0,
				lastAttempt: Date.now(),
				blocked: false,
			});
		}

		return {
			status: res.status,
			message: data.message,
		};
	} catch (error) {
		console.error("Resend OTP error:", error);
		return {
			status: 500,
			message: "Internal server error",
		};
	}
};

export const loginUser = async (phone: string, password: string) => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}}/user/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				phone: phone,
				password: password,
			}),
		});

		const data = await res.json();

		return {
			status: res.status,
			message: data.message,
			user:
				data.user ?
					{
						id: data.user.id,
						email: data.user.email,
						phone: data.user.phone,
						name: data.user.name,
						role: data.user.role,
						isVerified: data.user.isVerified,
						providerType: data.user.providerType,
						address: data.user.address,
						profileImage: data.user.profileImage,
					}
				:	undefined,
		};
	} catch (error) {
		console.error("Login error:", error);
		return {
			status: 500,
			message: "Internal Server Error",
		};
	}
};

export const updateOAuthUser = async (
	userId: string,
	data: {
		phone?: string;
		userType?: "patient" | "provider";
		providerRole?:
			| "doctor"
			| "hospital"
			| "lab"
			| "pharmaceutical"
			| "ambulance";
	}
) => {
	try {
		const res = await fetch(
			`${process.env["SERVER_URL"]}/user/update/${userId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);

		const responseData = await res.json();
		return {
			status: res.status,
			message: responseData.message,
			user: responseData.user,
		};
	} catch (error) {
		console.error("OAuth user update error:", error);
		return {
			status: 500,
			message: "Internal Server Error",
		};
	}
};
