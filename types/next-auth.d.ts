import { DefaultSession } from "next-auth";
import { EUserRole } from "./auth.d.types";
import { IAddress } from "./provider.d.types";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
			phone?: string;
			firstName?: string;
			lastName?: string;
			role?: EUserRole;
			isVerified?: boolean;
			providerRole?: string;
			address?: IAddress[];
			profileImage?: string;
			authProvider?: "credentials" | "google";
		} & DefaultSession["user"];
		authToken?: string;
		data?: any;
	}

	interface User {
		id: string;
		name?: string | null;
		email?: string | null;
		image?: string | null;
		phone?: string;
		firstName?: string;
		lastName?: string;
		role?: EUserRole;
		isVerified?: boolean;
		providerRole?: string;
		address?: IAddress[];
		profileImage?: string;
		authProvider?: "credentials" | "google";
	}
}

declare module "next-auth/jwt" {
	interface JWT {
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
		address?: IAddress[];
		profileImage?: string;
		signupData?: any;
		authProvider?: "credentials" | "google";
		data?: any;
		authToken?: string;
	}
}
