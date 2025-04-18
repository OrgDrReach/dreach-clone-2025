import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/server-actions/user";
import { EUserRole } from "@/types/auth.d.types";

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
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				phone: { label: "Phone", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.phone || !credentials?.password) {
					throw new Error("Missing credentials");
				}

				const res = await loginUser(credentials.phone, credentials.password);

				if (res.status !== 201) {
					throw new Error(res.message || "Authentication failed");
				}

				return res.user ?
						{
							id: res.user.id,
							email: res.user.email,
							name: res.user.name,
							phone: res.user.phone,
							role: res.user.role,
							isVerified: res.user.isVerified,
							image: res.user.profileImage,
							providerType: res.user.providerType,
							address: res.user.address,
							profileImage: res.user.profileImage,
							authProvider: "credentials" as const,
						}
					:	null;
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			if (user) {
				token.user = {
					id: user.id,
					email: user.email || "",
					name: user.name || "",
					image: user.image || "",
				};
			}
			return token;
		},
		session: async ({ session, token }) => {
			if (token.user) {
				session.user = token.user;
			}
			return session;
		},
	},
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
		newUser: "/auth/complete-profile",
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
};
