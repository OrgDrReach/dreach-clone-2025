import { ubuntu } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import { DoctorSideNav, Header } from "@/components/dashboard/ui";
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
				<section className="w-[64px] hover:w-[256px] transition-[width] duration-300">
					<DoctorSideNav />
				</section>
				<div className="w-[calc(100%-64px)] hover:w-[calc(100%-256px)] transition-[width] duration-300 h-screen overflow-y-auto mx-auto">
					<div className="bg-[#125872] text-white border-b border-[#fff]/10">
						<Header />
					</div>
					<ScrollArea className="h-[93.9dvh] bg-[#497585]">
						{children}
					</ScrollArea>
				</div>
			</div>
		</main>
	);
};

export default Layout;
