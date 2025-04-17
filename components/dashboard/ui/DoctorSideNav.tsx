"use client";

import { useState, useContext, createContext } from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
	ChevronFirst,
	ChevronLast,
	Gauge,
	Users,
	CalendarCheck2,
	Mail,
	ClipboardList,
	FileText,
	Settings,
	LifeBuoy,
	User,
	BarChart3,
	Layout,
	BellRing,
	Clock,
	Stethoscope,
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

interface SideBarProps {
	children: React.ReactNode;
	onToggle: () => void;
	isCollapsed: boolean;
}

const SideBar = ({ children, onToggle, isCollapsed }: SideBarProps) => {
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
							isCollapsed ? "w-0" : "w-32"
						)}
					/>
					<Button
						onClick={onToggle}
						variant="ghost"
						className="h-8 w-8 p-0 text-white hover:bg-white/10">
						{isCollapsed ?
							<ChevronLast />
						:	<ChevronFirst />}
					</Button>
				</div>

				<ScrollArea className="flex-1 w-full">
					<SideBarContext.Provider value={{ expanded: !isCollapsed }}>
						<div className="p-3">{children}</div>
					</SideBarContext.Provider>
				</ScrollArea>

				<div className="border-t border-[#ffffff1a] p-3">
					<div className="flex items-center gap-3">
						<Avatar>
							<AvatarImage src="/assets/icons/drreach-logo-icon.svg" />
							<AvatarFallback>DR</AvatarFallback>
						</Avatar>
						<div
							className={cn(
								"flex flex-col overflow-hidden transition-all",
								!isCollapsed ? "w-52 opacity-100" : "w-0 opacity-0"
							)}>
							<span className="text-sm font-medium text-white">Dr. Smith</span>
							<span className="text-xs text-[#ffffffb3]">Cardiologist</span>
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

const DoctorSideNav = ({
	onToggle,
	isCollapsed,
}: {
	onToggle: () => void;
	isCollapsed: boolean;
}) => {
	const { userId } = useParams();

	return (
		<SideBar onToggle={onToggle} isCollapsed={isCollapsed}>
			<div className="space-y-2">
				<SideBarItem
					icon={<Layout size={20} />}
					text="Overview"
					href={`/dashboard/doctor/${userId}`}
				/>
				<SideBarItem
					icon={<BarChart3 size={20} />}
					text="Analytics"
					href={`/dashboard/doctor/${userId}/analytics`}
				/>
				<SideBarItem
					icon={<Users size={20} />}
					text="Patients"
					href={`/dashboard/doctor/${userId}/patients`}
					badge={12}
				/>
				<SideBarItem
					icon={<CalendarCheck2 size={20} />}
					text="Appointments"
					href={`/dashboard/doctor/${userId}/appointments`}
					badge={5}
				/>
				<SideBarItem
					icon={<Mail size={20} />}
					text="Messages"
					href={`/dashboard/doctor/${userId}/messages`}
					badge={3}
				/>
				<SideBarItem
					icon={<ClipboardList size={20} />}
					text="Prescriptions"
					href={`/dashboard/doctor/${userId}/prescriptions`}
				/>
				<SideBarItem
					icon={<FileText size={20} />}
					text="Reports"
					href={`/dashboard/doctor/${userId}/reports`}
				/>
				<SideBarItem
					icon={<Clock size={20} />}
					text="Time Slots"
					href={`/dashboard/doctor/${userId}/time-slots`}
				/>
				<SideBarItem
					icon={<Stethoscope size={20} />}
					text="Specialties"
					href={`/dashboard/doctor/${userId}/specialties`}
				/>
				<SideBarItem
					icon={<BellRing size={20} />}
					text="Notifications"
					href={`/dashboard/doctor/${userId}/notifications`}
					badge={8}
				/>
				<SideBarItem
					icon={<User size={20} />}
					text="Profile"
					href={`/dashboard/doctor/${userId}/profile`}
				/>
				<SideBarItem
					icon={<LifeBuoy size={20} />}
					text="Support"
					href={`/dashboard/doctor/${userId}/support`}
				/>
				<SideBarItem
					icon={<Settings size={20} />}
					text="Settings"
					href={`/dashboard/doctor/${userId}/settings`}
				/>
			</div>
		</SideBar>
	);
};

export default DoctorSideNav;
