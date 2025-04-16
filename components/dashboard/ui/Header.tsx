"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeaderDarkModeToggle } from "./dark-mode-toggle-2";
import { Button } from "@/components/ui/button";
import { Bell, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface IUser {
  name: string;
  role: "admin" | "doctor" | "hospital-admin" | "patient";
  image?: string;
  email?: string;
}

const getRoleDisplay = (role: IUser["role"]) => {
  const roleMap = {
    admin: "Admin",
    doctor: "Dr.",
    "hospital-admin": "Hospital Admin",
    patient: "",
  };
  return roleMap[role] || "";
};

const Greeting: React.FC<{ user: IUser }> = ({ user }) => {
  const [greeting, setGreeting] = React.useState("");

  React.useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    };
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:block">
        <p className="text-sm text-muted-foreground">
          {greeting}, {getRoleDisplay(user.role)}
        </p>
        <h3 className="font-medium leading-none tracking-tight">{user.name}</h3>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.image || "https://github.com/shadcn.png"} alt={user.name} />
              <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const Header: React.FC = () => {
  const pathname = usePathname();
  
  // Determine current user based on path
  const getUserFromPath = (): IUser => {
    if (pathname?.startsWith("/dashboard/admin")) {
      return { name: "Admin User", role: "admin" };
    }
    if (pathname?.startsWith("/dashboard/doctors")) {
      return { name: "Dr. John Doe", role: "doctor" };
    }
    if (pathname?.startsWith("/dashboard/hospitals")) {
      return { name: "Hospital Admin", role: "hospital-admin" };
    }
    return { name: "Patient User", role: "patient" };
  };

  const user = getUserFromPath();

  return (
    <div className="flex h-14 w-full items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            {/* Mobile navigation will be rendered here */}
          </SheetContent>
        </Sheet>
        <span className="font-semibold">Dr. Reach</span>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
        </Button>
        <HeaderDarkModeToggle />
        <Greeting user={user} />
      </div>
    </div>
  );
};

export default Header;
