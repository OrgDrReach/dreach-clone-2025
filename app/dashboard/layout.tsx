import { RNChildProp } from "@/@types/interface/Interface";
import React from "react";
import { ubuntu, ubuntuMono } from "@/@types/font/Font";
import { Providers } from "../providers";
import { ThemeProvider2 } from "@/components/themes/theme-provider";
import { Toaster } from "sonner";

export default function DashboardLayout({ children }: RNChildProp) {
	return (
		<main className={`${ubuntu.className} ${ubuntuMono.className} antialiased`}>
			<ThemeProvider2
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange>
				<Providers>
					<div className="min-h-screen bg-[#497585]">{children}</div>
					<Toaster richColors position="top-right" />
				</Providers>
			</ThemeProvider2>
		</main>
	);
}
