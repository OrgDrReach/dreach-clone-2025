"use client";

import { useState, useContext, createContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
	ChevronFirst,
	ChevronLast,
	MoreVertical,
	LifeBuoy,
	BarChart3,
	Settings,
	Gauge,
	Mail,
	User,
	CalendarCheck2,
	LibraryBig,
	ReceiptIndianRupee,
	Cross,
	BellRing,
	Clock,
	Layout,
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
import ApplicationIcon from "@/components/icons/application";

const SideBarContext = createContext({ expanded: true } as any);

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
						className="h-8 w-8 p-0 text-white hover:bg-[#ffffff1a]">
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
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div
							className={cn(
								"flex flex-col overflow-hidden transition-all",
								expanded ? "w-52 opacity-100" : "w-0 opacity-0"
							)}>
							<span className="text-sm font-medium text-white">John Doe</span>
							<span className="text-xs text-[#ffffffb3]">john@example.com</span>
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
								"w-full justify-start gap-3 p-3 h-auto text-[#ffffffb3] hover:text-white hover:bg-[#ffffff1a]",
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

const PatientSideNav = () => {
	return (
		<SideBar>
			<div className="space-y-2">
				<SideBarItem
					icon={<Layout size={20} />}
					text="Overview"
					href="/dashboard/patients"
				/>
				<SideBarItem
					icon={<BarChart3 size={20} />}
					text="Analytics"
					href="/dashboard/patients/analytics"
				/>
				<SideBarItem
					icon={<CalendarCheck2 size={20} />}
					text="Appointments"
					href="/dashboard/patients/appointments"
					badge={2}
				/>
				<SideBarItem
					icon={<Mail size={20} />}
					text="Messages"
					href="/dashboard/patients/messages"
					badge={3}
				/>
				<SideBarItem
					icon={<LibraryBig size={20} />}
					text="Medical Records"
					href="/dashboard/patients/medical-records"
				/>
				<SideBarItem
					icon={<Cross size={20} />}
					text="Treatment Plans"
					href="/dashboard/patients/treatment-plans"
				/>
				<SideBarItem
					icon={<Clock size={20} />}
					text="Health History"
					href="/dashboard/patients/history"
				/>
				<SideBarItem
					icon={<ReceiptIndianRupee size={20} />}
					text="Billing"
					href="/dashboard/patients/billing"
				/>
				<SideBarItem
					icon={<BellRing size={20} />}
					text="Notifications"
					href="/dashboard/patients/notifications"
					badge={5}
				/>
				<SideBarItem
					icon={<User size={20} />}
					text="Profile"
					href="/dashboard/patients/profile"
				/>
				<SideBarItem
					icon={<LifeBuoy size={20} />}
					text="Support"
					href="/dashboard/patients/support"
				/>
				<SideBarItem
					icon={<Settings size={20} />}
					text="Settings"
					href="/dashboard/patients/settings"
				/>
				<SideBarItem
					icon={<ApplicationIcon size={20} />}
					text="Apply as Doctor"
					href="/dashboard/patients/apply-doctor"
				/>
			</div>
		</SideBar>
	);
};

export default PatientSideNav;
