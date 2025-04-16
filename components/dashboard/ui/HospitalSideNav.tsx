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
	Building2,
	Boxes,
	Package,
	Users,
	Settings,
	Gauge,
	ActivitySquare,
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
		href: "/dashboard/hospital",
		icon: <Gauge className="h-4 w-4" />,
	},
	{
		title: "Analytics",
		href: "/dashboard/hospital/analytics",
		icon: <BarChart3 className="h-4 w-4" />,
	},
	{
		title: "Departments",
		href: "/dashboard/hospital/departments",
		icon: <Building2 className="h-4 w-4" />,
	},
	{
		title: "Staff",
		href: "/dashboard/hospital/staff",
		icon: <Package className="h-4 w-4" />,
	},
	{
		title: "Patients",
		href: "/dashboard/hospital/patients",
		icon: <Users className="h-4 w-4" />,
	},
	{
		title: "Inventory",
		href: "/dashboard/hospital/inventory",
		icon: <Boxes className="h-4 w-4" />,
	},
	{
		title: "Activity",
		href: "/dashboard/hospital/activity",
		icon: <ActivitySquare className="h-4 w-4" />,
	},
	{
		title: "Settings",
		href: "/dashboard/hospital/settings",
		icon: <Settings className="h-4 w-4" />,
	},
];

const HospitalSideNav = () => {
	const pathname = usePathname();

	return (
		<SidebarProvider defaultOpen>
			<Sidebar className="border-r">
				<SidebarHeader className="border-b px-4 py-2">
					<Link href="/dashboard/hospital" className="flex items-center gap-2">
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
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="flex flex-1 items-center justify-between">
							<div>
								<p className="text-sm font-medium">Hospital Admin</p>
								<p className="text-xs text-muted-foreground">
									admin@hospital.com
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

export default HospitalSideNav;
