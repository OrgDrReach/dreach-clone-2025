"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BarChart3,
	Users,
	Settings,
	Gauge,
	Bell,
	Mail,
	Pill,
	User,
	CalendarCheck2,
	Stethoscope,
	MoreVertical,
} from "lucide-react";

interface NavItem {
	title: string;
	href: string;
	icon: React.ReactNode;
	items?: NavItem[];
}

const navItems: NavItem[] = [
	{
		title: "Dashboard",
		href: "/dashboard/doctors",
		icon: <Gauge className="h-4 w-4" />,
	},
	{
		title: "Analytics",
		href: "/dashboard/doctors/analytics",
		icon: <BarChart3 className="h-4 w-4" />,
	},
	{
		title: "Patients",
		href: "/dashboard/doctors/patients",
		icon: <Users className="h-4 w-4" />,
	},
	{
		title: "Appointments",
		href: "/dashboard/doctors/appointments",
		icon: <CalendarCheck2 className="h-4 w-4" />,
	},
	{
		title: "Prescriptions",
		href: "/dashboard/doctors/prescriptions",
		icon: <Pill className="h-4 w-4" />,
	},
	{
		title: "Medical Records",
		href: "/dashboard/doctors/records",
		icon: <Stethoscope className="h-4 w-4" />,
	},
	{
		title: "Messages",
		href: "/dashboard/doctors/messaging",
		icon: <Mail className="h-4 w-4" />,
	},
	{
		title: "Alerts",
		href: "/dashboard/doctors/alerts",
		icon: <Bell className="h-4 w-4" />,
	},
	{
		title: "Profile",
		href: "/dashboard/doctors/profile",
		icon: <User className="h-4 w-4" />,
	},
	{
		title: "Settings",
		href: "/dashboard/doctors/settings",
		icon: <Settings className="h-4 w-4" />,
	},
];

const DoctorSideNav = () => {
	const pathname = usePathname();

	return (
		<SidebarProvider defaultOpen>
			<Sidebar className="border-r">
				<SidebarHeader className="border-b px-4 py-2">
					<Link href="/dashboard/doctors" className="flex items-center gap-2">
						<Image
							src="/assets/icons/drreach-logo-icon.svg"
							alt="Dr. Reach Logo"
							width={32}
							height={32}
							className="rounded-sm"
						/>
						<span className="font-semibold">Dr. Reach</span>
					</Link>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu>
								{navItems.map((item, index) => (
									<SidebarMenuItem key={index}>
										<SidebarMenuButton
											asChild
											isActive={pathname === item.href}>
											<Link
												href={item.href}
												className="flex items-center gap-2">
												{item.icon}
												{item.title}
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>

				<div className="mt-auto border-t p-4">
					<div className="flex items-center gap-4">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>DR</AvatarFallback>
						</Avatar>
						<div className="flex flex-1 items-center justify-between">
							<div>
								<p className="text-sm font-medium">Dr. John Doe</p>
								<p className="text-xs text-muted-foreground">
									doctor@drreach.com
								</p>
							</div>
							<Button variant="ghost" size="icon">
								<MoreVertical className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</Sidebar>
		</SidebarProvider>
	);
};

export default DoctorSideNav;
