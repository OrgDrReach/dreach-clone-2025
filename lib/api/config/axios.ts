import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// Create axios instance with default config
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL, // Use NEXT_PUBLIC_ for frontend env
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Send cookies (including dreach_token)
});

// Request interceptor
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
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
        console.log(`API Response: ${response.status} ${response.config.url}`);
        return response;
    },
    async (error: AxiosError) => {
        console.error("Response error:", error);

        // Handle 401 Unauthorized errors
        if (error.response?.status === 401) {
            console.log("Unauthorized request - redirecting to login");
            // Optionally, redirect to login or clear cookies here
        }

        return Promise.reject(error);
    }
);

export default api;