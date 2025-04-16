"use client";
import { useState, useContext, createContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
	ChevronFirst,
	ChevronLast,
	Gauge,
	UserCog,
	Building2,
	TestTube as Flask,
	Truck,
	Pill,
	Settings,
	BarChart3,
	BadgeDollarSign,
	FileSpreadsheet,
	Users,
	BellRing,
} from "lucide-react";

const adminDashboards = [
	{ name: "Dashboard", path: "/dashboard/admin", menu: [] },
	{ name: "Analytics", path: "/dashboard/admin/analytics", menu: [] },
	{ name: "Doctors", path: "/dashboard/admin/doctors", menu: [] },
	{ name: "Hospitals", path: "/dashboard/admin/hospitals", menu: [] },
	{ name: "Labs", path: "/dashboard/admin/labs", menu: [] },
	{ name: "Ambulance", path: "/dashboard/admin/ambulance", menu: [] },
	{ name: "Pharmacy", path: "/dashboard/admin/pharmacy", menu: [] },
	{ name: "Revenue", path: "/dashboard/admin/revenue", menu: [] },
	{ name: "Reports", path: "/dashboard/admin/reports", menu: [] },
	{ name: "Users", path: "/dashboard/admin/users", menu: [] },
	{ name: "Notifications", path: "/dashboard/admin/notifications", menu: [] },
	{ name: "Settings", path: "/dashboard/admin/settings", menu: [] },
];

const SideBarContext = createContext({ expanded: true });

const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [expanded, setExpanded] = useState(true);
	const pathname = usePathname();

	return (
		<aside className="h-screen">
			<nav className="h-full flex flex-col bg-[#125872] border-r shadow-sm">
				<div className="p-4 pb-2 flex justify-between items-center">
					<Image
						src="/assets/icons/drreach-logo-full.svg"
						height={1000}
						width={1000}
						alt="logo"
						className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
					/>
					<button
						onClick={() => setExpanded((curr) => !curr)}
						className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
						{expanded ?
							<ChevronFirst />
						:	<ChevronLast />}
					</button>
				</div>

				<SideBarContext.Provider value={{ expanded }}>
					<ul className="flex-1 px-3">{children}</ul>
				</SideBarContext.Provider>
			</nav>
		</aside>
	);
};

interface SideBarItemProps {
	icon: React.ReactNode;
	text: string;
	active?: boolean;
	alert?: boolean;
	href: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
	icon,
	text,
	active,
	alert,
	href,
}) => {
	const { expanded } = useContext(SideBarContext);
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href}>
			<li
				className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-200"}
        `}>
				<span
					className={`transition-all ${expanded ? "w-6" : "w-full flex justify-center"}`}>
					{icon}
				</span>
				<span
					className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
					{text}
				</span>
				{alert && (
					<div
						className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
					/>
				)}

				{!expanded && (
					<div
						className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
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

const AdminSideNav = () => {
	return (
		<SideBar>
			<SideBarItem
				icon={<Gauge size={20} />}
				text="Dashboard"
				href="/dashboard/admin"
			/>
			<SideBarItem
				icon={<BarChart3 size={20} />}
				text="Analytics"
				href="/dashboard/admin/analytics"
			/>
			<SideBarItem
				icon={<UserCog size={20} />}
				text="Doctors"
				href="/dashboard/admin/doctors"
			/>
			<SideBarItem
				icon={<Building2 size={20} />}
				text="Hospitals"
				href="/dashboard/admin/hospitals"
			/>
			<SideBarItem
				icon={<Flask size={20} />}
				text="Labs"
				href="/dashboard/admin/labs"
			/>
			<SideBarItem
				icon={<Truck size={20} />}
				text="Ambulance"
				href="/dashboard/admin/ambulance"
			/>
			<SideBarItem
				icon={<Pill size={20} />}
				text="Pharmacy"
				href="/dashboard/admin/pharmacy"
			/>
			<SideBarItem
				icon={<BadgeDollarSign size={20} />}
				text="Revenue"
				href="/dashboard/admin/revenue"
			/>
			<SideBarItem
				icon={<FileSpreadsheet size={20} />}
				text="Reports"
				href="/dashboard/admin/reports"
			/>
			<SideBarItem
				icon={<Users size={20} />}
				text="Users"
				href="/dashboard/admin/users"
			/>
			<SideBarItem
				icon={<BellRing size={20} />}
				text="Notifications"
				href="/dashboard/admin/notifications"
			/>
			<SideBarItem
				icon={<Settings size={20} />}
				text="Settings"
				href="/dashboard/admin/settings"
			/>
		</SideBar>
	);
};

export default AdminSideNav;
