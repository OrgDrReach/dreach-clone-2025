// "use server";

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
// import { cookies } from "next/headers";

// Create axios instance with default config
const api = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		// Add any request preprocessing here
		console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
		return config;
	},
	(error: AxiosError) => {
		console.error("Request error:", error);
		return Promise.reject(error);
	}
);

// Response interceptor
api.interceptors.response.use(
	(response) => {
		// Add any response preprocessing here
		console.log(`API Response: ${response.status} ${response.config.url}`);
		return response;
	},
	async (error: AxiosError) => {
		console.error("Response error:", error);

		// Handle 401 Unauthorized errors
		if (error.response?.status === 401) {
			// Add token refresh logic here if needed
			console.log("Unauthorized request - redirecting to login");
		}

		return Promise.reject(error);
	}
);

export default api;
