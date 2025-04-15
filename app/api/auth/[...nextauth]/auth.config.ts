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
                    name: res.user?.firstName
                        ? `${res.user.firstName} ${res.user.lastName}`
                        : "",
                    phone: res.user?.phone || "",
                    firstName: res.user?.firstName || "",
                    lastName: res.user?.lastName || "",
                    role: res.user?.role || EUserRole.PATIENT,
                    isVerified: res.user?.isVerified || false,
                    image: res.user?.profileImage || null,
                    providerRole: res.user?.providerRole,
                    address: res.user?.address,
                    profileImage: res.user?.profileImage,
                };
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
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
	
				// If account exists (e.g., during initial login), make a signup request
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
				session.user.phone = token.phone as string;
				session.user.firstName = token.firstName as string;
				session.user.lastName = token.lastName as string;
				session.user.role = token.role as EUserRole;
				session.user.isVerified = token.isVerified as boolean;
				session.user.providerRole =
					token.providerRole as typeof session.user.providerRole;
				session.user.address = token.address as typeof session.user.address;
				session.user.profileImage = token.profileImage as string | undefined;
	
				// Include additional signup data in the session if available
				if (token.signupData) {
					session.signupData = token.signupData;
				}
			}
			return session;
		},
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
};
