import ContactUs from "@/components/dashboard/doctor/support/ContactUs";
import KnowledgeBase from "@/components/dashboard/doctor/support/KnowledgeBase";
import SupportRequestForm from "@/components/dashboard/doctor/support/SupportForm";
import SupportStatus from "@/components/dashboard/doctor/support/SupportStatus";
import React from "react";

const Support: React.FC = () => {
	return (
		<main className="bg-[#c1efffbe]  bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-slate-600 dark:to-slate-900 p-8">
			<SupportStatus />
			<SupportRequestForm />
			<KnowledgeBase />
			<ContactUs />
		</main>
	);
};

export default Support;
