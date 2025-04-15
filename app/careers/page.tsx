import { Metadata } from "next";
import CareersPage from "@/components/page-components/careers/CareersPage";

export const metadata: Metadata = {
	title: "Dreach.in | Careers",
	description:
		"Join our mission to revolutionize healthcare through technology and innovation.",
};

export default function Page() {
	return <CareersPage />;
}
