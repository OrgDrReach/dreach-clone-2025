import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Session } from "next-auth";
import { EUserRole } from "@/types/auth.d.types";
import { User } from "next-auth";

interface ExtendedSessionUser {
	id: string;
	email: string;
	name: string;
	image?: string;
	phone?: string;
	firstName?: string;
	lastName?: string;
	role?: EUserRole;
	isVerified?: boolean;
	providerRole?: string;
	address?: any[];
	profileImage?: string;
	authProvider?: "google";
}

interface ExtendedUser extends User {
	phone?: string;
	firstName?: string;
	lastName?: string;
	role?: EUserRole;
	isVerified?: boolean;
	providerType?: string;
	address?: any[];
	profileImage?: string;
	authProvider?: "google";
}

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
	throw new Error("Missing Google OAuth credentials");
}

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
			profile(profile) {
				return {
					id: profile.sub,
					email: profile.email,
					name: profile.name,
					firstName: profile.given_name,
					lastName: profile.family_name,
					image: profile.picture,
					role: EUserRole.PATIENT,
					isVerified: true,
					phone: "",
					authProvider: "google" as const,
				};
			},
		}),
	],
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
		newUser: "/auth/complete-profile",
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (user) {
				const extendedUser = user as ExtendedUser;
				token.id = extendedUser.id;
				token.email = extendedUser.email;
				token.name = extendedUser.name;
				token.phone = extendedUser.phone;
				token.firstName = extendedUser.firstName;
				token.lastName = extendedUser.lastName;
				token.role = extendedUser.role;
				token.isVerified = extendedUser.isVerified;
				token.providerRole = extendedUser.providerType;
				token.address = extendedUser.address;
				token.profileImage = extendedUser.profileImage;
				token.authProvider = extendedUser.authProvider;

				try {
					const res = await fetch(`${process.env.SERVER_URL}/user/signup`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: extendedUser.email,
							firstName: extendedUser.firstName,
							lastName: extendedUser.lastName,
							image: extendedUser.image,
						}),
					});

					if (!res.ok) {
						throw new Error("Google authentication failed");
					}

					const data = await res.json();
					token.signupData = data;
				} catch (error) {
					console.error("Error during Google auth:", error);
				}
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				const user = {
					id: token.id as string,
					email: token.email as string,
					name: token.name as string,
					image: token.image as string,
					phone: token.phone as string,
					firstName: token.firstName as string,
					lastName: token.lastName as string,
					role: token.role as EUserRole,
					isVerified: token.isVerified as boolean,
					providerRole: token.providerRole as string,
					address: token.address,
					profileImage: token.profileImage as string,
					authProvider: token.authProvider as "google",
				} satisfies ExtendedSessionUser;

				session.user = user;
			}
			return session;
		},
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
};
