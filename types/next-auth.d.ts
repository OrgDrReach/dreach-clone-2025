import { DefaultSession } from "next-auth";
import { EUserRole } from "./user.d.types";
import { IAddress } from "./provider.d.types";

declare module "next-auth" {
	interface Session {
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
		} & DefaultSession["user"];
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
	}

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
	}
}
