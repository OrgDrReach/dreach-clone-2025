"use server";

import { IUser, IPatient } from "@/types/user.d.types";

interface UpdateUserPayload {
	name: string;
	phone: string;
	dob: Date;
	gender: string;
	bloodGroup?: string;
	role: string;
	address?: Array<{
		address?: string;
		city?: string;
		state?: string;
		country?: string;
		pincode?: string;
	}>;
}

interface ApiResponse<T> {
	status: number;
	message?: string;
	error?: string;
	data?: T;
}

/**
 * Fetch user data by ID
 */
export const fetchUserById = async (
	userId: string
): Promise<ApiResponse<IUser>> => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/user/${userId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include", // Include cookies for authentication
		});

		const data = await res.json();

		return {
			status: res.status,
			message: data.message,
			data: {
				...data.user,
				dob: new Date(data.dob),
			},
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

		const data = await res.json();

		return {
			status: res.status,
			message: data.message,
			data: data.user,
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
 * Update existing user
 */
export const updateUser = async (
	userId: string,
	updateData: UpdateUserPayload
): Promise<ApiResponse<IUser>> => {
	try {
		if (!process.env.SERVER_URL) {
			throw new Error("SERVER_URL environment variable is not defined");
		}

		const apiUrl = `${process.env.SERVER_URL}/user/updateUser`;

		// Convert date to ISO string for API
		const payload = {
			userId,
			...updateData,
			dob: updateData.dob.toISOString(),
		};

		console.log("Making request to:", apiUrl);
		console.log("With payload:", payload);

		const response = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(payload),
		});

		const data = await response.json();
		console.log("Server response:", data);

		if (!response.ok) {
			throw new Error(data.message || "Failed to update user");
		}

		return {
			status: response.status,
			data: data.user,
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
