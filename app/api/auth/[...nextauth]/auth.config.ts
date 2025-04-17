import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/server-actions/user";
import { EUserRole } from "@/types/user.d.types";

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

				return {
					id: res.user?.id || "",
					email: res.user?.email || "",
					name: res.user?.name || "",
					phone: res.user?.phone || "",
					role: res.user?.role || EUserRole.PATIENT,
					isVerified: res.user?.isVerified || false,
					image: res.user?.profileImage || null,
					providerType: res.user?.providerType,
					address: res.user?.address,
					profileImage: res.user?.profileImage,
				};
			},
		}),
	],
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
		newUser: "/",
	},
	callbacks: {
		async jwt({ token, user, account }) {
			if (user) {
				// Set user details in the token
				token.id = user.id;
				token.email = user.email;
				token.name = user.name;
				token.phone = user.phone;
				token.role = user.role || EUserRole.PATIENT;
				token.isVerified = user.isVerified;
				token.providerType = user.providerType;
				token.address = user.address;
				token.profileImage = user.profileImage;

				if (account) {
					try {
						const res = await fetch(`${process.env.SERVER_URL}/user/signup`, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								email: user.email,
							}),
						});

						if (res.status !== 201) {
							throw new Error("Signup failed");
						}

						const data = await res.json();
						token.signupData = data; // Store additional data from the signup response
					} catch (error) {
						console.error("Error during signup:", error);
					}
				}
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id;
				session.user.email = token.email;
				session.user.name = token.name;
				session.user.phone = token.phone;
				session.user.role = token.role;
				session.user.isVerified = token.isVerified;
				session.user.providerType = token.providerType;
				session.user.address = token.address;
				session.user.profileImage = token.profileImage;
			}
			return session;
		},
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
};
