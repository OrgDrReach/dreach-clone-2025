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
				token.firstName = user.firstName;
				token.lastName = user.lastName;
				token.role = user.role || EUserRole.PATIENT;
				token.isVerified = user.isVerified;
				token.providerRole = user.providerRole;
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
				const user = {
					...session.user,
					id: token.id as string,
					email: token.email as string,
					name: token.name as string,
					image:
						(token.profileImage as string) ||
						(session.user.image as string) ||
						"",
				} as any;

				// Add custom properties
				user.phone = token.phone;
				user.firstName = token.firstName;
				user.lastName = token.lastName;
				user.role = token.role;
				user.isVerified = token.isVerified;
				user.providerRole = token.providerRole;
				user.address = token.address;
				user.profileImage = token.profileImage;

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
