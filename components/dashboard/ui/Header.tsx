"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeaderDarkModeToggle } from "@/components/dashboard/ui/dark-mode-toggle-2";

interface IUser {
  name: string | null;
  role: "admin" | "doctor" | "hospital-admin" | "patient";
}

const getRoleDisplay = (role: IUser["role"]) => {
  switch (role) {
    case "admin":
      return "Admin";
    case "doctor":
      return "Dr.";
    case "hospital-admin":
      return "Hospital Admin";
    case "patient":
      return "";
    default:
      return "";
  }
};

const Greeting: React.FC<{ user: IUser }> = ({ user }) => {
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateGreeting = () => {
      const hours = currentTime.getHours();
      if (hours < 12) {
        setGreeting("Good Morning!");
      } else if (hours < 18) {
        setGreeting("Good Afternoon!");
      } else {
        setGreeting("Good Evening!");
      }
    };
    updateGreeting();
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      updateGreeting();
    }, 1000 * 60);
    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <header className="flex justify-between items-center py-2">
      <div className="text-lg flex gap-2 font-bold">
        {greeting}
        {"  "}
        <div>
          {user.role && (
            <span className="font-semibold text-gray-300">
              {getRoleDisplay(user.role)} {/* Call getRoleDisplay here */}
            </span>
          )}{" "}
          {user.name}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="text-lg font-bold">
          Welcome! to your Personalised Dashboard
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <HeaderDarkModeToggle />
      </div>
    </header>
  );
};

const Header: React.FC = () => {
  const path = usePathname();
  const currentPath = path;

  const user: IUser = {
    name: "Revant Raj",
    role: "patient",
  };
  const doctor: IUser = {
    name: "Rewant Raj",
    role: "doctor",
  };
  const hospitalAdmin: IUser = {
    name: "Revant Raj",
    role: "hospital-admin",
  };
  const admin: IUser = {
    name: "Revant Raj",
    role: "admin",
  };

  let currentUser: IUser;

  switch (currentPath) {
    // Admin Dashboard
    case "/dashboard/admin":
      currentUser = admin;
      break;
    // Doctors Dashboard
    case "/dashboard/doctors":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/analytics":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/patients":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/appointments":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/prescriptions":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/messaging":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/alerts":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/profile":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/support":
      currentUser = doctor;
      break;
    case "/dashboard/doctors/settings":
      currentUser = doctor;
      break;
    // Hospital Dashboard
    case "/dashboard/hospitals":
      currentUser = hospitalAdmin;
      break;
    // Patient Dashboard
    default:
      currentUser = user;
  }

  return (
    <main className="w-[100%-350px]">
      <div className="px-4">
        <Greeting user={currentUser} />
      </div>
    </main>
  );
};

export default Header;
