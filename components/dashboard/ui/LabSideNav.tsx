"use client";
import { useState, useEffect, useContext, createContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
	ChevronFirst,
	ChevronLast,
	MoreVertical,
	LifeBuoy,
	TestTube as Flask,
	Microscope,
	FileText,
	ClipboardList,
	Users,
	BarChart3,
	Settings,
	Gauge,
	Clock,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const labDashboards = [
	{
		name: "Dashboard",
		path: "/dashboard/labs",
		menu: [],
	},
	{
		name: "Analytics",
		path: "/dashboard/labs/analytics",
		menu: [],
	},
	{
		name: "Test Orders",
		path: "/dashboard/labs/orders",
		menu: [],
	},
	{
		name: "Results",
		path: "/dashboard/labs/results",
		menu: [],
	},
	{
		name: "Sample Management",
		path: "/dashboard/labs/samples",
		menu: [],
	},
	{
		name: "Equipment",
		path: "/dashboard/labs/equipment",
		menu: [],
	},
	{
		name: "Patients",
		path: "/dashboard/labs/patients",
		menu: [],
	},
	{
		name: "Support",
		path: "/dashboard/labs/support",
		menu: [],
	},
	{
		name: "Settings",
		path: "/dashboard/labs/settings",
		menu: [],
	},
];

const SideBarContext = createContext({ expanded: true } as any);

const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [selectedDashboard, setSelectedDashboard] = useState(labDashboards[0]);
	const pathname = usePathname();
	const [expanded, setExpanded] = useState(true);

	useEffect(() => {
		const currentDashboard = labDashboards.find(
			(dashboard) => dashboard.path === pathname
		);
		if (currentDashboard) {
			setSelectedDashboard(currentDashboard);
		}
	}, [pathname]);

	return (
		<aside className="h-screen">
			<nav className="h-full flex flex-col bg-[#125872] border-r shadow-sm">
				<div className="p-4 pb-2 border-b border-[#fff] mb-2 flex justify-between items-center">
					<Image
						src="/assets/icons/drreach-logo-full.svg"
						height={1000}
						width={1000}
						alt="logo"
						className={`overflow-hidden transition-all ${
							expanded ? "w-fit h-20 p-2 rounded-md" : "w-0 h-0"
						}`}
					/>
					<button
						onClick={() => setExpanded((curr) => !curr)}
						className={`bg-gray-50 hover:bg-gray-200 ${
							expanded ? "p-1 rounded-lg" : "mx-auto rounded-lg p-1"
						}`}>
						{expanded ?
							<ChevronFirst />
						:	<ChevronLast />}
					</button>
				</div>
				<SideBarContext.Provider value={{ expanded }}>
					<ul className="flex-1 px-3">{children}</ul>
				</SideBarContext.Provider>
				<div className="border-t flex p-3">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div
						className={`flex justify-between items-center overflow-hidden transition-all ${
							expanded ? "w-52 ml-3" : "w-0"
						}`}>
						<div className="leading-4">
							<h4 className="font-semibold italic text-[#bae7ff]">Lab Admin</h4>
							<span className="text-xs text-gray-200">lab@dreach.com</span>
						</div>
						<MoreVertical size={20} className="text-gray-200" />
					</div>
				</div>
			</nav>
		</aside>
	);
};

const SideBarItem: React.FC<{
	icon: React.ReactNode;
	text: string;
	active?: boolean;
	alert?: boolean;
	href: string;
}> = ({ icon, text, active, alert, href }) => {
	const { expanded } = useContext(SideBarContext);
	const pathname = usePathname();
	const isActive =
		pathname === href ||
		(pathname === "/dashboard/labs/" && href === "/dashboard/labs/");

	return (
		<Link href={href}>
			<li
				className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
					isActive ?
						"bg-[#d6f7ff] text-[#3d6b84] font-semibold"
					:	"hover:bg-[#d6f7ff] text-[#baf0ff] hover:text-[#3d6b84]"
				}`}>
				{icon}
				<span
					className={`overflow-hidden transition-all ${
						expanded ? "w-52 ml-3" : "w-0"
					}`}>
					{text}
				</span>
				{alert && (
					<div
						className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
							expanded ? "" : "top-2"
						}`}
					/>
				)}
				{!expanded && (
					<div
						className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-[#3d6b84] text-[#acedff] text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}>
						{text}
					</div>
				)}
			</li>
		</Link>
	);
};

const LabSideNav: React.FC = () => {
	return (
		<main>
			<div className="font-bold">
				<SideBar>
					<SideBarItem
						icon={<Gauge size={20} />}
						text="Dashboard"
						href="/dashboard/labs"
					/>
					<SideBarItem
						icon={<BarChart3 size={20} />}
						text="Analytics"
						href="/dashboard/labs/analytics"
					/>
					<SideBarItem
						icon={<ClipboardList size={20} />}
						text="Test Orders"
						href="/dashboard/labs/orders"
					/>
					<SideBarItem
						icon={<FileText size={20} />}
						text="Results"
						href="/dashboard/labs/results"
					/>
					<SideBarItem
						icon={<Flask size={20} />}
						text="Sample Management"
						href="/dashboard/labs/samples"
					/>
					<SideBarItem
						icon={<Microscope size={20} />}
						text="Equipment"
						href="/dashboard/labs/equipment"
					/>
					<SideBarItem
						icon={<Users size={20} />}
						text="Patients"
						href="/dashboard/labs/patients"
					/>
					<SideBarItem
						icon={<LifeBuoy size={20} />}
						text="Support"
						href="/dashboard/labs/support"
					/>
					<SideBarItem
						icon={<Settings size={20} />}
						text="Settings"
						href="/dashboard/labs/settings"
					/>
				</SideBar>
			</div>
		</main>
	);
};

export default LabSideNav;
