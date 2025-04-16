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
	Layout,
	Shield,
	MailQuestion,
	LineChart,
} from "lucide-react";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const SideBarContext = createContext({ expanded: true });

const SideBar = ({ children }: { children: React.ReactNode }) => {
	const [expanded, setExpanded] = useState(true);
	const pathname = usePathname();

	return (
		<div className="h-screen">
			<nav className="h-full relative flex flex-col bg-[#125872] border-r shadow-sm">
				<div className="p-4 pb-2 flex justify-between items-center border-b border-[#ffffff1a]">
					<Image
						src="/assets/icons/drreach-logo-full.svg"
						height={1000}
						width={1000}
						alt="logo"
						className={cn(
							"overflow-hidden transition-all",
							expanded ? "w-32" : "w-0"
						)}
					/>
					<Button
						onClick={() => setExpanded((curr) => !curr)}
						variant="ghost"
						className="h-8 w-8 p-0 text-white hover:bg-white/10">
						{expanded ?
							<ChevronFirst />
						:	<ChevronLast />}
					</Button>
				</div>

				<ScrollArea className="flex-1 w-full">
					<SideBarContext.Provider value={{ expanded }}>
						<div className="p-3">{children}</div>
					</SideBarContext.Provider>
				</ScrollArea>

				<div className="border-t border-[#ffffff1a] p-3">
					<div className="flex items-center gap-3">
						<Avatar>
							<AvatarImage src="/assets/icons/drreach-logo-icon.svg" />
							<AvatarFallback>AD</AvatarFallback>
						</Avatar>
						<div
							className={cn(
								"flex flex-col overflow-hidden transition-all",
								expanded ? "w-52 opacity-100" : "w-0 opacity-0"
							)}>
							<span className="text-sm font-medium text-white">Admin User</span>
							<span className="text-xs text-[#ffffffb3]">
								System Administrator
							</span>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

interface SideBarItemProps {
	icon: React.ReactNode;
	text: string;
	href: string;
	badge?: number;
}

const SideBarItem = ({ icon, text, href, badge }: SideBarItemProps) => {
	const { expanded } = useContext(SideBarContext);
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Link href={href}>
						<Button
							variant="ghost"
							className={cn(
								"w-full justify-start gap-3 p-3 h-auto text-[#ffffffb3] hover:text-white hover:bg-white/10",
								!expanded && "justify-center",
								isActive && "bg-[#ffffff1a] text-white"
							)}>
							{icon}
							{expanded && <span>{text}</span>}
							{badge && expanded && (
								<span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
									{badge}
								</span>
							)}
						</Button>
					</Link>
				</TooltipTrigger>
				{!expanded && (
					<TooltipContent side="right" className="flex items-center gap-4">
						{text}
						{badge && (
							<span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
								{badge}
							</span>
						)}
					</TooltipContent>
				)}
			</Tooltip>
		</TooltipProvider>
	);
};

const AdminSideNav = () => {
	return (
		<SideBar>
			<div className="space-y-2">
				<SideBarItem
					icon={<Layout size={20} />}
					text="Overview"
					href="/dashboard/admin"
				/>
				<SideBarItem
					icon={<BarChart3 size={20} />}
					text="Analytics"
					href="/dashboard/admin/analytics"
				/>
				<SideBarItem
					icon={<LineChart size={20} />}
					text="Statistics"
					href="/dashboard/admin/statistics"
				/>
				<SideBarItem
					icon={<Shield size={20} />}
					text="Verification"
					href="/dashboard/admin/verification"
					badge={8}
				/>
				<SideBarItem
					icon={<UserCog size={20} />}
					text="Doctors"
					href="/dashboard/admin/doctors"
					badge={15}
				/>
				<SideBarItem
					icon={<Building2 size={20} />}
					text="Hospitals"
					href="/dashboard/admin/hospitals"
					badge={5}
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
					badge={24}
				/>
				<SideBarItem
					icon={<BellRing size={20} />}
					text="Notifications"
					href="/dashboard/admin/notifications"
					badge={12}
				/>
				<SideBarItem
					icon={<MailQuestion size={20} />}
					text="Support"
					href="/dashboard/admin/support"
					badge={3}
				/>
				<SideBarItem
					icon={<Settings size={20} />}
					text="Settings"
					href="/dashboard/admin/settings"
				/>
			</div>
		</SideBar>
	);
};

export default AdminSideNav;
