import { useState } from "react";
import { authService } from "@/app/api/services/auth";
import { useAuth as useAuthContext } from "@/app/context/AuthContext";
import { AuthResponse } from "@/app/api/types/auth";

export const useAuth = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const { login: contextLogin } = useAuthContext();

	const login = async (email: string, password: string) => {
		try {
			setLoading(true);
			setError(null);
			const response = await authService.login({ email, password });
			// Extract phone and password for the context login
			await contextLogin({
				phone: response.user.phone,
				password: password,
			});
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("An unexpected error occurred");
			}
		} finally {
			setLoading(false);
		}
	};

	return { login, loading, error };
};
