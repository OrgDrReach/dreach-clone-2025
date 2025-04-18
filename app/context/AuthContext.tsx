"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { EUserRole } from "@/types/auth.d.types";
import { IAuthUser as User } from "@/types/auth.d.types";

interface AuthContextType {
	user: User | null;
	login: (credentials: { phone: string; password: string }) => Promise<void>;
	logout: () => Promise<void>;
	isAuthenticated: boolean;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session?.user) {
			// Convert session user to our custom User type
			const userFromSession: User = {
				id: session.user.id,
				email: session.user.email || "",
				phone: session.user.phone || "",
				name: session.user.name || "",
				firstName: session.user.firstName,
				lastName: session.user.lastName,
				role: session.user.role || EUserRole.PATIENT,
				userType:
					session.user.role === EUserRole.PATIENT ? "Patient" : "Provider",
				providerType: session.user.providerRole as
					| "Doctor"
					| "Hospital"
					| "Lab"
					| "Nursing"
					| "DoctorsAssistant"
					| undefined,
				isVerified: session.user.isVerified || false,
				authProvider: session.user.authProvider,
				profileImage:
					session.user.profileImage || session.user.image || undefined,
				createdAt: new Date(),
				updatedAt: new Date(),
			};
			setUser(userFromSession);
		} else {
			setUser(null);
		}
	}, [session]);

	const login = async (credentials: { phone: string; password: string }) => {
		try {
			const result = await signIn("credentials", {
				...credentials,
				redirect: false,
			});

			if (result?.error) {
				throw new Error(result.error);
			}

			if (result?.ok) {
				router.push("/dashboard");
				toast.success("Login successful");
			}
		} catch (error: any) {
			toast.error(error.message || "Failed to login");
			throw error;
		}
	};

	const logout = async () => {
		try {
			await signOut({ redirect: false });
			router.push("/auth/login");
			toast.success("Logged out successfully");
		} catch (error: any) {
			toast.error(error.message || "Failed to logout");
			throw error;
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout,
				isAuthenticated: !!user,
				isLoading: status === "loading",
			}}>
			{children}
		</AuthContext.Provider>
	);
};
