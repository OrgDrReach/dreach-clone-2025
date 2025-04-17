import NextAuth from "next-auth/next";
import { EUserRole } from "@/types/user.d.types";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			email: string;
			name: string;
			phone: string;
			role: EUserRole;
			isVerified: boolean;
			providerType?: string;
			address?: {
				address: string;
				city: string;
				state: string;
				pincode: string;
				country: string;
			};
			profileImage?: string;
		};
	}

	interface User {
		id: string;
		email: string;
		name: string;
		phone: string;
		role: EUserRole;
		isVerified: boolean;
		providerType?: string;
		address?: {
			address: string;
			city: string;
			state: string;
			pincode: string;
			country: string;
		};
		profileImage?: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		email: string;
		name: string;
		phone: string;
		role: EUserRole;
		isVerified: boolean;
		providerType?: string;
		address?: {
			address: string;
			city: string;
			state: string;
			pincode: string;
			country: string;
		};
		profileImage?: string;
	}
}
