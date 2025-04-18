import { DefaultSession } from "next-auth";
import { EUserRole } from "./auth.d.types";
import { IAddress } from "./provider.d.types";

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string;
			email: string;
			name: string;
			phone?: string;
			firstName?: string;
			lastName?: string;
			role?: EUserRole;
			isVerified?: boolean;
			providerRole?: string;
			address?: IAddress[];
			profileImage?: string;
			authProvider?: "credentials" | "google";
			image?: string;
		};
		authToken?: string;
	}

	interface User {
		id: string;
		email: string;
		name: string;
		phone?: string;
		firstName?: string;
		lastName?: string;
		role?: EUserRole;
		isVerified?: boolean;
		providerRole?: string;
		address?: IAddress[];
		profileImage?: string;
		authProvider?: "credentials" | "google";
		image?: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		email: string;
		name: string;
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
		image?: string;
	}
}
