"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { AuthProvider } from "@/app/context/AuthContext";

export default function SessionProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NextAuthSessionProvider>
			<AuthProvider>{children}</AuthProvider>
		</NextAuthSessionProvider>
	);
}
