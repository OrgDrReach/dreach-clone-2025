"use server";

import { IUser } from "@/types/user.d.types";
import { EUserRole, EUserStatus, EGender } from "@/types/auth.d.types";
import { Phone } from "lucide-react";
import { createUser } from "./auth";

export interface ApiResponse<T> {
	status: number;
	message: string;
	data?: T;
	error?: string;
}

interface UpdateUserPayload {
	userId: string;
	firstName: string;
	lastName: string;
	name: string;
	phoneNumber: string;
	dob: string | Date;
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

/**
 * Fetch user data by ID
 * @param userId User ID to fetch
 * @returns Promise with ApiResponse containing user data or error
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

/**
 * Fetch user by email
 * @param email Email address to fetch user
 * @returns Promise with ApiResponse containing user data or error
 */
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

		console.log("Attempting to fetch user with email:", email);
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
		console.log("Response data:", data);

		// Handle user found
		if (res.ok && data?.userId) {
			console.log("User found with ID:", data.userId);
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

			if (createUserResponse.status === 201 && createUserResponse.data) {
				return {
					status: 201,
					message: "User created successfully",
					data: createUserResponse.data,
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
 * @param data User data to update
 * @returns Promise with ApiResponse containing updated user data or error
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
			phone: data.phoneNumber, // Ensure this matches the backend field
			dob: data.dob,
			Gender: data.gender,
			BloodGroup: data.bloodGroup,
			address: data.address ? { ...data.address } : undefined, // Ensure address matches the backend structure
			userId: data.userId,
		};

		console.log("Payload sent to update user:", apiData);

		const response = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(apiData),
		});

		const responseData = await response.json();
		console.log("Server response:", responseData);

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
			message: "Internal server error",
			error:
				error instanceof Error ? error.message : "Failed to update profile",
		};
	}
};

/**
 * Delete user account
 * @param userId ID of the user to delete
 * @returns Promise with ApiResponse containing deletion status
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
