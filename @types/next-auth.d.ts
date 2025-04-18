import NextAuth from "next-auth/next";
import { DefaultSession } from "next-auth";
import { EUserRole } from "@/types/auth.d.types";
import { IAddress } from "@/types/provider.d.types";

declare module "next-auth" {
	export interface Session {
		user: {
			id: string;
			email?: string | null;
			name?: string | null;
			image?: string | null;
			phone?: string;
			phoneNumber?: string;
			firstName?: string;
			lastName?: string;
			role?: EUserRole;
			isVerified?: boolean;
			providerRole?: string;
			address?: IAddress[];
			profileImage?: string;
			authProvider?: "credentials" | "google";
		};
		data?: any;
		authToken?: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		email?: string | null;
		name?: string | null;
		image?: string | null;
		phone?: string;
		phoneNumber?: string;
		firstName?: string;
		lastName?: string;
		role?: EUserRole;
		isVerified?: boolean;
		providerRole?: string;
		address?: IAddress[];
		profileImage?: string;
		signupData?: any;
		authProvider?: "credentials" | "google";
		data?: any;
		authToken?: string;
	}
}
