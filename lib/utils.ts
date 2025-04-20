import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
	ApiResponse,
	ApiSuccessResponse,
	ApiErrorResponse,
} from "@/types/auth.d.types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isApiSuccessResponse<T>(
	response: ApiResponse<T>
): response is ApiSuccessResponse<T> {
	return "data" in response;
}

export function isApiErrorResponse(
	response: ApiResponse<any>
): response is ApiErrorResponse {
	return (
		"error" in response || (!("data" in response) && "message" in response)
	);
}

export function validateEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function validatePhoneNumber(phone: string): boolean {
	const phoneRegex = /^\+?[1-9]\d{9,14}$/;
	return phoneRegex.test(phone);
}
