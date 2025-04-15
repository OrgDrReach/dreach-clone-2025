import { Metadata } from "next";
import CompleteProfile from "@/components/auth/oauth/CompleteProfile";

export const metadata: Metadata = {
	title: "Complete Your Profile | Dr. Reach",
	description:
		"Complete your profile information to get started with Dr. Reach's healthcare services.",
};

export default function CompleteProfilePage() {
	return <CompleteProfile />;
}
