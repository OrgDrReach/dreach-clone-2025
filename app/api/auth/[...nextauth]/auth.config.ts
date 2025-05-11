import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { EUserRole } from "@/types/auth.d.types";
import { createUser } from "@/lib/api/services/auth";
import { User as NextAuthUser } from "next-auth";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
	throw new Error("Missing Google OAuth credentials");
}

interface ExtendedUser extends NextAuthUser {
	id: string;
	userId: string; // Add userId field that server generates
	username: string; // Add username field that server generates
	email: string;
	name: string;
	image?: string;
	phone?: string;
	firstName?: string;
	lastName?: string;
	role?: EUserRole;
	isVerified?: boolean;
	providerType?: string;
	address?: any;
	profilePic?: string;
	authProvider?: "google";
	serviceProvider?: {
		id: string;
		providerType?: string;
		specialization?: string[];
		experience?: number;
		description?: string;
		fee?: number;
	};
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
					authProvider: "google",
				};
			},
		}),
	],
	pages: {
		newUser: "/auth/complete-profile",
		error: "/auth/error",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				const extendedUser = user as ExtendedUser;

				try {
					// First create the user
					const createUserResponse = await createUser({
						email: extendedUser.email ?? undefined,
						firstName: extendedUser.firstName,
						lastName: extendedUser.lastName,
						name: `${extendedUser.firstName} ${extendedUser.lastName}`,
						profilePic: extendedUser.image,
						role: EUserRole.PATIENT,
						isVerified: true,
						authProvider: "google",
					});

					if (
						createUserResponse.status !== 200 &&
						createUserResponse.status !== 201
					) {
						console.error("User creation error:", createUserResponse.message);
						return token;
					}

					// Then login to get full user data
					const loginResponse = await fetch(
						`${process.env.SERVER_URL}/api/user/signup`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								email: extendedUser.email,
							}),
						}
					);

					const userData = await loginResponse.json();

					// Map server response to token
					token.id = userData.id;
					token.userId = userData.userId;
					token.username = userData.username;
					token.email = userData.email;
					token.name =
						userData.name ||
						`${extendedUser.firstName} ${extendedUser.lastName}`;
					token.phone = userData.phone;
					token.role = userData.role;
					token.isVerified = userData.isVerified;
					token.providerType = userData.serviceProvider?.providerType;
					token.address = userData.address;
					token.profilePic = userData.profilePic || extendedUser.image;
					token.authProvider = "google";

					if (userData.serviceProvider) {
						token.serviceProvider = userData.serviceProvider;
					}
				} catch (err) {
					console.error("Error during authentication:", err);
				}
			}
			return token;
		},

		async signIn({ user, account }) {
			if (account?.provider === "google") {
				try {
					const res = await fetch(`${process.env.SERVER_URL}/api/user/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: user.email,
						}),
					});

					const data = await res.json();

					if (!data) {
						return false;
					}

					const extendedUser = user as ExtendedUser;

					// Update user object with server data
					extendedUser.id = data.id;
					extendedUser.userId = data.userId;
					extendedUser.username = data.username;
					extendedUser.isVerified = data.isVerified;
					extendedUser.role = data.role;
					extendedUser.profilePic = data.profilePic;
					extendedUser.serviceProvider = data.serviceProvider;

					return true;
				} catch (error) {
					console.error("Sign in error:", error);
					return false;
				}
			}
			return true;
		},

		async session({ session, token }) {
			if (session.user && token) {
				session.user = {
					id: token.id as string,
					email: token.email as string,
					name: token.name as string,
					image: token.profilePic as string,
					phone: token.phone as string,
					firstName: token.firstName as string,
					lastName: token.lastName as string,
					role: token.role as EUserRole,
					isVerified: token.isVerified as boolean,
					providerRole: token.providerRole as string,
					address: token.address,
					//   profilePic: token.profilePic as string,
					authProvider: token.authProvider as "google",
				};
			}
			return session;
		},
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
};
