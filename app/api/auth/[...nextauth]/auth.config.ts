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
	email: string;
	name: string;
	image?: string;
	phone?: string;
	firstName?: string;
	lastName?: string;
	role?: EUserRole;
	isVerified?: boolean;
	providerType?: string;
	address?: any[];
	profilePic?: string;
	authProvider?: "google";
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
		error: "/auth/error",
		newUser: "/auth/complete-profile",
	},
	callbacks: {
		async jwt({ token, user }) {
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
				token.profilePic = extendedUser.image || null;
				token.authProvider = extendedUser.authProvider;

				try {
					const response = await createUser({
						email: extendedUser.email ?? undefined,
						firstName: extendedUser.firstName,
						lastName: extendedUser.lastName,
						name: `${extendedUser.firstName} ${extendedUser.lastName}`,
						profilePic: extendedUser.image,
						role: EUserRole.PATIENT,
						isVerified: true,
						authProvider: "google",
					});

					if (response.status !== 200 && response.status !== 201) {
						console.error("Google auth error:", response.message);
					} else {
						token.signupData = response.data;
					}
				} catch (err) {
					console.error("Error during Google auth:", err);
				}
			}
			return token;
		},

		async signIn({ user, account }) {
			if (account?.provider === "google") {
				const res = await fetch(`${process.env.SERVER_URL}/user/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "include",
					body: JSON.stringify({
						email: user.email,
					}),
				});
				const data = await res.json();
				console.log("THE DATA IS", data);
				if (data.isVerified) {
					user.isVerified = data.isVerified;
				}
				return data.status === 200 || data.status === 201;
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
