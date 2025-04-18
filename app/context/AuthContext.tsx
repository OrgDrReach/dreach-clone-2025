import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/app/api/types/auth";
import { RNChildProp } from "@/@types/interface/Interface";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { EUserRole, EUserStatus } from "@/types/auth.d.types";

interface ExtendedSession extends Omit<Session, "user"> {
	user: {
		id: string;
		email?: string | null;
		name?: string | null;
		image?: string | null;
		phone?: string;
		firstName?: string;
		lastName?: string;
		role?: EUserRole;
		isVerified?: boolean;
		providerRole?: string;
		profileImage?: string;
	};
}

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

export const AuthProvider: React.FC<RNChildProp> = ({ children }) => {
	const router = useRouter();
	const { data: session, status } = useSession();
	const [user, setUser] = useState<User | null>(null);
	const isLoading = status === "loading";

	useEffect(() => {
		if (session?.user) {
			const extendedSession = session as ExtendedSession;
			// Convert session user to our custom User type
			const userFromSession: User = {
				id: extendedSession.user.id,
				firstName: extendedSession.user.firstName || "",
				lastName: extendedSession.user.lastName || "",
				email: extendedSession.user.email || "",
				phone: extendedSession.user.phone || "",
				role: extendedSession.user.role || EUserRole.PATIENT,
				status: EUserStatus.ACTIVE,
				isVerified: extendedSession.user.isVerified || false,
				providerRole: extendedSession.user.providerRole,
				profileImage:
					extendedSession.user.profileImage ||
					extendedSession.user.image ||
					undefined,
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
			}
		} catch (error: any) {
			throw new Error(error.message || "Failed to login");
		}
	};

	const logout = async () => {
		try {
			await signOut({ redirect: false });
			router.push("/auth/login");
		} catch (error: any) {
			throw new Error(error.message || "Failed to logout");
		}
	};

	return (
		<AuthContext.Provider
			value={{ user, login, logout, isAuthenticated: !!user, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};
