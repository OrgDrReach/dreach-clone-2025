// Conditional Layout for dashboards using session
import { ubuntu } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import { AdminSideNav, Header } from "@/components/dashboard/ui";
import { ScrollArea } from "@/components/ui";
import type { Viewport } from "next";
import { useSession } from "next-auth/react";
import React from "react";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

const Layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
	return (
		<main className={ubuntu.className}>
			<div className="flex h-screen">
				<section>
					<AdminSideNav />
				</section>
				<div className="w-[100%] h-screen overflow-y-auto mx-auto">
					<div className="bg-[#125872] text-white border-b border-[#fff]/10">
						<Header />
					</div>
					<ScrollArea className="h-[93.9dvh] bg-[#497585] p-4">
						{children}
					</ScrollArea>
				</div>
			</div>
		</main>
	);
};

export default Layout;
