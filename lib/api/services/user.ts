import axios from "axios";
import { IUser } from "@/types/user.d.types";
import { EUserRole, EUserStatus, EGender } from "@/types/auth.d.types";
import { createUser } from "./auth";

// Add custom error handling utility
const handleApiError = (
	error: unknown,
	defaultMessage: string
): ApiResponse<any> => {
	console.error(`API Error: ${defaultMessage}`, error);

	if (axios.isAxiosError(error)) {
		return {
			status: error.response?.status || 500,
			message: error.response?.data?.message || defaultMessage,
			error: error.message,
		};
	}

	return {
		status: 500,
		message: "Internal server error",
		error: error instanceof Error ? error.message : "Unknown error occurred",
	};
};

interface UpdateUserPayload {
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

interface ApiResponse<T> {
	status: number;
	message: string;
	data?: T;
	error?: string;
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

		const response = await axios.get(
			`${process.env.SERVER_URL}/user/fetchUserById/${userId}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);

		console.log("Response data:", response.data);

		return {
			status: response.status,
			message: response.data.message,
			data: response.data.user,
		};
	} catch (error) {
		return handleApiError(error, "Error fetching user");
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
		const response = await axios.get(
			`${process.env.SERVER_URL}/user/fetchUserByEmail`,
			{
				params: { email },
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);

		const data = response.data;
		console.log("Response from fetch user by email:", data);

		// Handle successful user fetch
		if (data && data.id) {
			console.log("User found with id:", data.id);
			const updateUserResponse = await fetchUserById(data.id);

			if (updateUserResponse.status === 200 && updateUserResponse.data) {
				return {
					status: 200,
					message: "User found successfully",
					data: updateUserResponse.data,
				};
			}
		}

		// Handle user data validation
		if (data && data.user) {
			if (!data.user.email) {
				throw new Error("Invalid user data received from server");
			}

			const userData: IUser = {
				id: data.user.id || "",
				userId: data.user.userId || "",
				email: data.user.email,
				firstName: data.user.firstName || "",
				lastName: data.user.lastName || "",
				name: `${data.user.firstName} ${data.user.lastName}`,
				phone: data.user.phone || "",
				dob: data.user.dob ? new Date(data.user.dob) : new Date(),
				gender: data.user.gender || EGender.OTHER,
				address: Array.isArray(data.user.address) ? data.user.address : [],
				role: data.user.role || EUserRole.PATIENT,
				status: data.user.status || EUserStatus.ACTIVE,
				isVerified: Boolean(data.user.isVerified),
				createdAt:
					data.user.createdAt ? new Date(data.user.createdAt) : new Date(),
				updatedAt:
					data.user.updatedAt ? new Date(data.user.updatedAt) : new Date(),
			};

			return {
				status: 200,
				message: "User found successfully",
				data: userData,
			};
		}

		throw new Error(data.message || "Failed to fetch user");
	} catch (error) {
		console.error("Error in fetchUserByEmail:", error);

		if (axios.isAxiosError(error) && error.response?.status === 404) {
			try {
				const createUserResponse = await createUser({ email });
				if (createUserResponse.status === 201 && createUserResponse.data) {
					return {
						status: 200,
						message: "User created successfully",
						data: createUserResponse.data,
					};
				}
			} catch (createError) {
				return handleApiError(createError, "Error creating user");
			}
		}
		return handleApiError(error, "Error fetching user by email");
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

		// Transform data to match API expectations while keeping consistent field names
		const apiData = {
			name: data.name,
			phoneNumber: data.phoneNumber,
			dob: data.dob instanceof Date ? data.dob.toISOString() : data.dob,
			gender: data.gender,
			bloodGroup: data.bloodGroup,
			role: data.role,
			address: data.address ? [data.address] : [], // Convert to array format as expected by API
		};

		const response = await axios.post(apiUrl, apiData, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});

		console.log("Server response:", response.data);

		return {
			status: response.status,
			data: response.data.user,
			message: "Profile updated successfully",
		};
	} catch (error) {
		return handleApiError(error, "Error updating user");
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
		if (!process.env.SERVER_URL) {
			throw new Error("SERVER_URL environment variable is not defined");
		}

		const response = await axios.delete(
			`${process.env.SERVER_URL}/user/${userId}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);

		return {
			status: response.status,
			message: response.data.message,
		};
	} catch (error) {
		return handleApiError(error, "Error deleting user");
	}
};
