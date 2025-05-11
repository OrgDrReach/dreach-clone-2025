import axios from "axios";
import { IUser } from "@/types/user.d.types";

interface LoginResponse {
	id: string;
	email: string;
	phone: string;
	name: string;
	role: string;
	isVerified: boolean;
	providerType?: string;
	address?: any;
	profilePic?: string;
}

interface ApiResponse<T> {
	status: number;
	message: string;
	data?: T;
	error?: string;
}

interface ErrorResponse {
	status: number;
	message: string;
	error: string;
}

// Create a utility function for consistent error handling
const handleApiError = (
	error: unknown,
	defaultMessage: string
): ApiResponse<any> => {
	console.error(`API Error: ${defaultMessage}`, error);

	if (axios.isAxiosError(error)) {
		// Check if the error has a response
		if (error.response) {
			return {
				status: error.response.status,
				message: error.response.data?.message || defaultMessage,
				error: error.message,
			};
		}
		// Handle network errors or timeouts
		return {
			status: 503,
			message: "Service unavailable",
			error: error.message,
		};
	}

	// For non-Axios errors
	return {
		status: 500,
		message: "Internal server error",
		error: error instanceof Error ? error.message : "Unknown error occurred",
	};
};

/**
 * Create new user
 * @param userData Partial user data for registration
 * @returns Promise with ApiResponse containing user data or error
 */
export const createUser = async (
	userData: Partial<IUser>
): Promise<ApiResponse<IUser>> => {
	try {
		const res = await fetch(`${process.env.SERVER_URL}/api/user/signup`, {
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
 * Login user with Google auth
 * @param credentials Google auth credentials
 * @returns Promise with ApiResponse containing user data or error
 */
export const loginUser = async (credentials: {
	email: string;
	authProvider: string;
}): Promise<ApiResponse<LoginResponse>> => {
	try {
		const loginData = {
			email: credentials.email,
			authProvider: "google",
		};

		const res = await fetch(`${process.env.SERVER_URL}/api/user/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(loginData),
		})

		console.log(`User login attempt with Google: ${JSON.stringify(loginData)}`);

		const data = await res.json();

		// Transform and validate user data

		return {
			status: res.status,
			message: "Login successful",
			data:
				data.user ?
					{
						id: data.user.id,
						email: data.user.email,
						phone: data.user.phone || "",
						name: data.user.name,
						role: data.user.role,
						isVerified: data.user.isVerified,
						providerType: data.user.providerType,
						address: data.user.address || [],
						profilePic: data.user.profilePic || "",
					}
				:	undefined,
		};
	} catch (error) {
		console.error("Login error:", error);
		return handleApiError(error, "Login error:");
	}
};
