"use server";

import { IUser, IPatient } from "@/types/user.d.types";
import { EUserRole, EUserStatus, EGender } from "@/types/auth.d.types";

interface UpdateUserPayload {
	name: string;
	phoneNumber: string; // Changed from phone to phoneNumber to match ProfileFormData
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
	id: string;
	name: string;
	phoneNumber: string;
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
interface ProfileFormData extends Omit<UpdateUserPayload, "phoneNumber"> {
	phoneNumber: string;
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
		console.log(`"user is being created", ${JSON.stringify(userData)}`);

		const data = await res.json();

		console.log(data);
		return {
			status: res.status,
			message: data,
			data: data.id,
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

/**
 * Fetch user by email
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
		// Temporary console log to check the response
		console.log("Response from fetch user by email:", data);
		if (data && data.id) {
			console.log("User created successfully with user id:", data.id);
		}

		// if user is found from fetch user by email displayind the id from the response
		if (data && data.id || res.ok && res.status === 200) {
			const updateUserResponse = await fetchUserById(data.id);
			if (updateUserResponse.status === 200 && updateUserResponse.data) {
				return {
					status: 200,
					message: "User found successfully",
					data: updateUserResponse.data,
				};
			}
		}

		// If user not found, create a new user
		if (res.status === 404 || (res.ok && !data.id)) {
			console.log("User not found, creating new user");
			// const createUserResponse = await createUser({
			// 	email: email,
			// 	role: EUserRole.PATIENT,
			// 	status: EUserStatus.ACTIVE,
			// 	firstName: "",
			// 	lastName: "",
			// 	phone: "",
			// 	dob: new Date(),
			// 	gender: EGender.OTHER,
			// 	address: [],
			// 	isVerified: false,
			// 	createdAt: new Date(),
			// 	updatedAt: new Date(),
			// });

			const createUserResponse = await fetchUserById(data.id);

			if (createUserResponse.status === 201 && createUserResponse.data) {
				return {
					status: 200,
					message: "User created successfully",
					data: createUserResponse.data,
				};
			} else {
				throw new Error(createUserResponse.message || "Failed to create user");
			}
		}

		// If we found the user, validate and return their data
		if (res.ok && data.user) {
			if (!data.user.email) {
				throw new Error("Invalid user data received from server");
			}

			const userData: IUser = {
				id: data.user.id || "",
				userId: data.user.userId || "",
				email: data.user.email,
				firstName: data.user.firstName || "",
				lastName: data.user.lastName || "",
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

		throw new Error(data.message || "Failed to fetch or create user");
	} catch (error) {
		console.error("Error in fetchUserByEmail:", error);
		return {
			status:
				error instanceof Error && error.message === "User not found" ?
					404
				:	500,
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

		// Transform data to match API expectations while keeping consistent field names
		const apiData = {
			name: data.name,
			phoneNumber: data.phoneNumber, // Keep consistent with interface
			dob: data.dob instanceof Date ? data.dob.toISOString() : data.dob,
			gender: data.gender,
			bloodGroup: data.bloodGroup,
			role: data.role,
			address: data.address ? [data.address] : [], // Convert to array format as expected by API
		};

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
