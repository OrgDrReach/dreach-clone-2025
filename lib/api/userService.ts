"use server";

import { IUser, IPatient } from "@/types/user.d.types";
import { EUserRole, EUserStatus, EGender } from "@/types/auth.d.types";
import { Phone } from "lucide-react";

interface UpdateUserPayload {
	userId: string;
	name: string;
	phone: string; // Changed from phone to phoneNumber to match ProfileFormData
	dob: string | Date; // Allow both string and Date
	gender: EGender;
	bloodGroup?: string;
	role: EUserRole;
	address?: {
		address?: string;
		city?: string;
		state?: string;
		country?: string;
		pincode?: string;
	};
}

interface UpdateUserResponse {
	userId: string;
	name: string;
	phone: string;
	dob: Date;
	gender: EGender;
	bloodGroup?: string;
	role: EUserRole;
	address?: Array<{
		address?: string;
		city?: string;
		state?: string;
		country?: string;
		pincode?: string;
	}>;
	// ... other IUser fields that the API returns
}

interface ApiResponse<T> {
	status: number;
	message?: string;
	error?: string;
	data?: T;
}

// Define the ProfileFormData type to match the expected shape
interface ProfileFormData extends Omit<UpdateUserPayload, "phone"> {
	phone: string;
}

/**
 * Create new user
 */
export const createUser = async (
	userData: Partial<IUser>
): Promise<ApiResponse<IUser>> => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/user/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(userData),
		});
		// console.log(`"user is being created", ${JSON.stringify(userData)}`);

		const data = await res.json();

		console.log(data);
		return {
			status: res.status,
			message: data,
			data: data.userId,
		};
	} catch (error) {
		console.error("Error creating user:", error);
		return {
			status: 500,
			message: "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};

/**
 * Fetch user data by ID
 */
export const fetchUserById = async (
	userId: string
): Promise<ApiResponse<IUser>> => {
	try {
		if (!userId) {
			throw new Error("User ID is required");
		}

		const res = await fetch(
			`${process.env.SERVER_URL}/user/fetchUserById/${userId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			}
		);

		const data = await res.json();
		console.log("Response data:", data);

		if (!res.ok) {
			throw new Error(data.message || "Failed to fetch user");
		}

		return {
			status: res.status,
			message: data.message,
			data: data.user,
		};
	} catch (error) {
		console.error("Error fetching user:", error);
		return {
			status: 500,
			message: "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};

export const fetchUserByEmail = async (
	email: string
): Promise<ApiResponse<IUser>> => {
	try {
		if (!email) {
			return {
				status: 400,
				message: "Email is required",
				error: "Email is required",
			};
		}

		if (!process.env.SERVER_URL) {
			throw new Error("SERVER_URL environment variable is not defined");
		}

		// console.log("Attempting to fetch user with email:", email);
		const res = await fetch(
			`${process.env.SERVER_URL}/user/fetchUserByEmail/?email=${encodeURIComponent(email)}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			}
		);

		const data = await res.json();
		console.log("Response status:", res.status);
		// console.log("Response data:", data);

		// Handle user found
		if (res.ok && data?.userId) {
			// console.log("User found with ID:", data.userId);
			return {
				status: 200,
				message: "User found successfully",
				data,
			};
		}

		// Handle user not found
		if (res.status === 404) {
			console.log("User not found, creating new user");
			const createUserResponse = await createUser({
				email,
				role: EUserRole.PATIENT,
				status: EUserStatus.ACTIVE,
			});

			if (createUserResponse.status === 201) {
				return {
					status: 201,
					message: "User created successfully",
					// data: createUserResponse.data,
				};
			}
			throw new Error(createUserResponse.message || "Failed to create user");
		}

		// Handle unexpected response
		throw new Error(data.message || "Unexpected error occurred");
	} catch (error) {
		console.error("Error in fetchUserByEmail:", error);
		return {
			status: 500,
			message: error instanceof Error ? error.message : "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};

/**
 * Update existing user
 */
export const updateUser = async (
	data: UpdateUserPayload
): Promise<ApiResponse<IUser>> => {
	try {
		if (!process.env.SERVER_URL) {
			throw new Error("SERVER_URL environment variable is not defined");
		}

		const apiUrl = `${process.env.SERVER_URL}/user/updateUser`;

		// Transform data to match API expectations
		const apiData = {
			name: data.name,
			phone: data.phone, // Ensure this matches the backend field
			dob: data.dob instanceof Date ? data.dob.toISOString() : data.dob,
			gender: data.gender,
			bloodGroup: data.bloodGroup,
			address: data.address ? { ...data.address } : undefined, // Ensure address matches the backend structure
			userId: data.userId,
		};

		// console.log("Payload sent to update user:", apiData);

		const response = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(apiData),
		});

		const responseData = await response.json();
		console.log("Server response:", responseData.message);

		if (!response.ok) {
			throw new Error(responseData.message || "Failed to update user");
		}

		return {
			status: response.status,
			data: responseData.user,
			message: "Profile updated successfully",
		};
	} catch (error) {
		console.error("Error updating user:", error);
		return {
			status: 500,
			error:
				error instanceof Error ? error.message : "Failed to update profile",
		};
	}
};

/**
 * Fetch patient profile with medical history
 */
export const fetchPatientProfile = async (
	userId: string
): Promise<ApiResponse<IPatient>> => {
	try {
		const res = await fetch(
			`${process.env.SERVER_URL}/user/patient/${userId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			}
		);

		const data = await res.json();

		return {
			status: res.status,
			message: data.message,
			data: data.patient,
		};
	} catch (error) {
		console.error("Error fetching patient profile:", error);
		return {
			status: 500,
			message: "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};

/**
 * Delete user account
 */
export const deleteUser = async (
	userId: string
): Promise<ApiResponse<void>> => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/user/${userId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});

		const data = await res.json();

		return {
			status: res.status,
			message: data.message,
		};
	} catch (error) {
		console.error("Error deleting user:", error);
		return {
			status: 500,
			message: "Internal server error",
			error: error instanceof Error ? error.message : "Unknown error occurred",
		};
	}
};
