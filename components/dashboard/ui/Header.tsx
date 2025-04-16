"use client";
import React from "react";
import { Bell, Mail, Search } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Header = () => {
	return (
		<header className="p-4 flex justify-between items-center">
			<div className="flex items-center gap-3">
				<div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
					<Search className="w-4 h-4" />
					<input
						type="text"
						placeholder="Search..."
						className="bg-transparent border-none outline-none text-sm w-64 placeholder:text-gray-300"
					/>
				</div>
			</div>

			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" className="relative">
					<Bell className="w-5 h-5" />
					<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
						3
					</span>
				</Button>
				<Button variant="ghost" size="icon" className="relative">
					<Mail className="w-5 h-5" />
					<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
						5
					</span>
				</Button>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="relative h-10 w-10 rounded-full">
							<Avatar className="h-10 w-10">
								<AvatarImage
									src="/assets/icons/drreach-logo-icon.svg"
									alt="User"
								/>
								<AvatarFallback>DR</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">User Name</p>
								<p className="text-xs leading-none text-muted-foreground">
									user@drreach.com
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<Link href="/dashboard/profile">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link href="/dashboard/settings">Settings</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={() => signOut({ callbackUrl: "/" })}>
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
};

export default Header;
