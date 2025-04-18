"use client";

import React from "react";
import {
  Bell,
  Mail,
  Search,
  Menu,
  Calendar,
  MessageSquare,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { DarkModeToggle } from "@/components/themes/dark-mode-toggle";

const Header = () => {
  return (
    <header className="border-b border-[#ffffff1a]">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex-1 flex items-center gap-4">
          <div className="relative w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search anything..."
              className="pl-8 bg-white/10 border-none text-white placeholder:text-gray-400 w-full focus-visible:ring-1 focus-visible:ring-white/20"
            />
          </div>

          <nav className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              Overview
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              Analytics
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              Reports
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
            >
              Notifications
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <DarkModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white hover:bg-white/10"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-[10px] flex items-center justify-center">
                  5
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="max-h-[450px] overflow-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                  <DropdownMenuItem
                    key={i}
                    className="flex items-start gap-3 p-3"
                  >
                    <span className="bg-blue-100 p-2 rounded-full">
                      {i % 2 === 0 ? (
                        <Calendar className="h-4 w-4 text-blue-600" />
                      ) : (
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      )}
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">
                        New {i % 2 === 0 ? "Appointment" : "Message"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        You have a new{" "}
                        {i % 2 === 0
                          ? "appointment scheduled"
                          : "message from Dr. Smith"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="w-full flex justify-center text-blue-600">
                View All
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-[10px] flex items-center justify-center">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Messages</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="max-h-[450px] overflow-auto">
                {[1, 2, 3].map((i) => (
                  <DropdownMenuItem
                    key={i}
                    className="flex items-start gap-3 p-3"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={`https://avatar.vercel.sh/${i}.png`} />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">User Name {i}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        This is a sample message that could be quite long and
                        needs to be truncated...
                      </p>
                      <p className="text-xs text-muted-foreground">
                        1 hour ago
                      </p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="w-full flex justify-center text-blue-600">
                View All Messages
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Separator orientation="vertical" className="h-6 bg-white/10" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="relative h-8 w-8 rounded-full"
              >
                <Avatar className="h-8 w-8">
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
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john@drreach.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-600 focus:text-red-600"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
