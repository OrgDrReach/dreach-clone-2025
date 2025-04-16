// Conditional Layout for Dashboards using session
import { ubuntu } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import { Header, PatientSideNav } from "@/components/dashboard/ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Metadata } from "next";
import { useSession } from "next-auth/react";
import React from "react";

export const metadata: Metadata = {
	title: "Patient Dashboard",
	description: "Patient Dashboard",
};

const Layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
	return (
		<main className={ubuntu.className}>
			<div className='flex'>
				<section>
					<PatientSideNav />
				</section>
				<div className='w-[100%] mx-auto'>
					<div className='bg-[#125872] text-white '>
						<Header />
					</div>
					<ScrollArea className='h-[93.9dvh] bg-[#497585] p-4'>{children}</ScrollArea>
				</div>
			</div>
		</main>
	);
};

export default Layout;
