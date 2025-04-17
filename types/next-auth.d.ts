import { DefaultSession, DefaultUser } from "next-auth";
import { EUserRole } from "./user.d.types";
import { IAddress } from "./provider.d.types";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			email: string;
			phone: string;
			name: string;
			role: EUserRole;
			address?: IAddress[];
			profileImage?: string;
		} & DefaultSession["user"];
		authToken?: string;
		data?: {
			id: string;
			email: string;
			name: string;
			image?: string;
			phone?: string;
			role?: EUserRole;
			address?: IAddress[];
			profileImage?: string;
		};
	}

	interface User extends DefaultUser {
		id: string;
		email: string;
		phone: string;
		name: string;
		role: EUserRole;
		address?: IAddress[];
		profileImage?: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		email: string;
		phone: string;
		name: string;
		role: EUserRole;
		isVerified: boolean;
		address?: IAddress[];
		profileImage?: string;
		authToken?: string;
		data?: {
			id: string;
			email: string;
			name: string;
			image?: string;
			phone?: string;
			role?: EUserRole;
			address?: IAddress[];
			profileImage?: string;
		};
	}
}
