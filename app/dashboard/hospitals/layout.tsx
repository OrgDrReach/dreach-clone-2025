import { ubuntu } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import { Header, HospitalSideNav } from "@/components/dashboard/ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import type { Viewport } from "next";
import React from "react";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata = {
	title: "Hospital Dashboard | Dr. Reach",
	description: "Hospital management and administrative dashboard",
};

const Layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
	return (
		<main className={ubuntu.className}>
			<div className="flex h-screen">
				<div className="hidden md:flex">
					<HospitalSideNav />
				</div>
				<div className="flex-1 flex flex-col">
					<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
						<div className="container flex h-14 items-center">
							<Header />
						</div>
					</header>
					<Separator />
					<div className="flex-1 overflow-hidden">
						<ScrollArea className="h-full bg-slate-50/50 dark:bg-slate-950/50">
							<div className="container py-6">{children}</div>
						</ScrollArea>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Layout;
