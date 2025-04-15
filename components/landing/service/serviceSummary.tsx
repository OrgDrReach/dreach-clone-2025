"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
	HiUserGroup,
	HiVideoCamera,
	HiHome,
	HiBeaker,
	HiCalendar,
	HiOutlineCube,
} from "react-icons/hi";

const services = [
	{
		icon: <HiUserGroup className="text-3xl" />,
		title: "Collaborative Care",
		description:
			"Connect with multiple specialists in seamless video consultations",
		link: "",
	},
	{
		icon: <HiOutlineCube className="text-3xl" />,
		title: "Integrated Care",
		description: "Comprehensive care with local nursing and specialist support",
		link: "/services/integrated-care",
	},
	{
		icon: <HiCalendar className="text-3xl" />,
		title: "Smart Scheduling",
		description: "Real-time appointment tracking with instant queue updates",
		link: "",
	},
	{
		icon: <HiVideoCamera className="text-3xl" />,
		title: "Video Consultation",
		description: "Focused discussions with pre-shared symptoms and concerns",
		link: "",
	},
	{
		icon: <HiHome className="text-3xl" />,
		title: "Home Care",
		description: "Professional healthcare services at your doorstep",
		link: "/services/home-care",
	},
	{
		icon: <HiBeaker className="text-3xl" />,
		title: "Lab Testing",
		description: "Easy booking and result sharing through dashboard",
		link: "",
	},
];

const ServiceSummary = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<section className="py-16 relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white dark:from-sky-950 dark:via-sky-900 dark:to-sky-950">
			<div className="absolute inset-0 bg-[radial-gradient(#bae6fd_1px,transparent_1px)] dark:bg-[radial-gradient(#0c4a6e_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
			<div className="absolute inset-0">
				<div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-sky-100/50 to-transparent dark:from-sky-900/20" />
				<div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-sky-100/50 to-transparent dark:from-sky-900/20" />
			</div>
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-sky-600 dark:text-sky-400 mb-4">
						Our Services
					</h2>
					<p className="text-gray-600 dark:text-sky-200/80 max-w-2xl mx-auto">
						Experience healthcare that's accessible, convenient, and
						comprehensive
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					{services.map((service, index) => (
						<Link href={service.link} key={index}>
							<motion.div
								variants={itemVariants}
								className="group relative bg-white/90 dark:bg-sky-950/50 backdrop-blur-sm rounded-xl p-4 md:p-5 
                hover:bg-sky-50/95 dark:hover:bg-sky-900/50 transition-all duration-300 hover:-translate-y-1 
                border-[1.5px] border-sky-200 dark:border-sky-800
                hover:border-sky-400/30 dark:hover:border-sky-400/30
                shadow-sm hover:shadow-md">
								<div className="absolute inset-x-0 -bottom-px h-[1.5px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								<div className="flex items-start space-x-3">
									<div
										className="p-2.5 rounded-lg bg-sky-50 dark:bg-sky-900/50 
                  text-sky-600 dark:text-sky-400 group-hover:text-sky-700 
                  dark:group-hover:text-sky-300 group-hover:bg-sky-100 
                  dark:group-hover:bg-sky-800/60 transition-colors duration-300
                  border border-sky-200 dark:border-sky-700">
										{service.icon}
									</div>
									<div>
										<h3
											className="text-lg font-semibold text-gray-800 dark:text-sky-50 
                    mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 
                    transition-colors duration-300">
											{service.title}
										</h3>
										<p className="text-sm text-gray-600 dark:text-sky-200/80 leading-relaxed">
											{service.description}
										</p>
									</div>
								</div>
							</motion.div>
						</Link>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center mt-12">
					<Link
						href="/services"
						className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600
              text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/20 
              dark:hover:shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-0.5
              border border-sky-400/20 dark:border-sky-500/20">
						Explore All Services
						<svg
							className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default ServiceSummary;
