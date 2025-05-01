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

// Create a utility function for consistent error handling
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

/**
 * Create new user
 * @param userData Partial user data for registration
 * @returns Promise with ApiResponse containing user data or error
 */
export const createUser = async (
	userData: Partial<IUser>
): Promise<ApiResponse<IUser>> => {
	try {
		const response = await axios.post(
			`${process.env.SERVER_URL}/user/signup`,
			userData,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);

		console.log(`User is being created: ${JSON.stringify(userData)}`);
		console.log(response.data);

		return {
			status: response.status,
			message: response.data,
			data: response.data.id,
		};
	} catch (error) {
		return handleApiError(error, "Error creating user");
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

		const response = await axios.post(
			`${process.env.SERVER_URL}/user/login`,
			loginData,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);

		console.log(`User login attempt with Google: ${JSON.stringify(loginData)}`);

		const data = response.data;

		// Transform and validate user data

		return {
			status: response.status,
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
