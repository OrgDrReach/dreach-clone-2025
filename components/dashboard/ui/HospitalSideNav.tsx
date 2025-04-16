"use client";
import { useState, useEffect, useContext, createContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronFirst,
  ChevronLast,
  MoreVertical,
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  Users,
  BarChart3,
  Settings,
  Gauge,
  ActivitySquare,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const hospitalDashboards = [
  {
    name: "Dashboard",
    path: "/dashboard/hospital",
    menu: [],
  },
  {
    name: "Analytics",
    path: "/dashboard/hospital/analytics",
    menu: [],
  },
  {
    name: "Departments",
    path: "/dashboard/hospital/departments",
    menu: [],
  },
  {
    name: "Staff",
    path: "/dashboard/hospital/staff",
    menu: [],
  },
  {
    name: "Patients",
    path: "/dashboard/hospital/patients",
    menu: [],
  },
  {
    name: "Inventory",
    path: "/dashboard/hospital/inventory",
    menu: [],
  },
  {
    name: "Activity",
    path: "/dashboard/hospital/activity",
    menu: [],
  },
  {
    name: "Support",
    path: "/dashboard/hospital/support",
    menu: [],
  },
  {
    name: "Settings",
    path: "/dashboard/hospital/settings",
    menu: [],
  },
];

const SideBarContext = createContext({ expanded: true } as any);

const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDashboard, setSelectedDashboard] = useState(
    hospitalDashboards[0],
  );
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const currentDashboard = hospitalDashboards.find(
      (dashboard) => dashboard.path === pathname,
    );
    if (currentDashboard) {
      setSelectedDashboard(currentDashboard);
    }
  }, [pathname]);

  return (
    <main>
      <div>
        <aside className="h-screen">
          <nav className="h-full flex flex-col bg-[#125872] border-r shadow-sm">
            <div className="p-4 pb-2 border-b border-[#fff] mb-2 flex justify-between items-center">
              <Image
                src="/assets/icons/drreach-logo-full.svg"
                height={1000}
                width={1000}
                alt="logo"
                className={`overflow-hidden transition-all ${
                  expanded ? "w-fit h-20  p-2 rounded-md" : "w-0 h-0"
                }`}
              />
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className={`bg-gray-50 hover:bg-gray-200 ${
                  expanded ? "p-1 rounded-lg" : "mx-auto rounded-lg p-1"
                }`}
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>
            <SideBarContext.Provider value={{ expanded }}>
              <ul className="flex-1 px-3">{children}</ul>
            </SideBarContext.Provider>
            <div className="border-t flex p-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                }`}
              >
                <div className="leading-4">
                  <h4 className="font-semibold italic text-[#bae7ff]">
                    Shadcn
                  </h4>
                  <span className="text-xs text-gray-200">
                    shadcn@gmail.com
                  </span>
                </div>
                <MoreVertical size={20} className="text-gray-200" />
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </main>
  );
};

const SideBarItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  href: string;
}> = ({ icon, text, active, alert, href }) => {
  const { expanded } = useContext(SideBarContext);
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    (pathname === "/dashboard/hospital/" && href === "/dashboard/hospital/");

  return (
    <Link href={href}>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          isActive
            ? "bg-[#d6f7ff]  text-[#3d6b84] font-semibold"
            : "hover:bg-[#d6f7ff] text-[#baf0ff] hover:text-[#3d6b84] "
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
        {!expanded && (
          <div
            className={`
              absolute left-full rounded-md px-2 py-1 ml-6
            bg-[#3d6b84] text-[#acedff] text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
};

const SideNav: React.FC = () => {
  return (
    <main>
      <div className=" font-bold">
        <SideBar>
          <SideBarItem
            icon={<Gauge size={20} />}
            text="Dashboard"
            href="/dashboard/hospital"
          />
          <SideBarItem
            icon={<BarChart3 size={20} />}
            text="Analytics"
            href="/dashboard/hospital/analytics"
          />
          <SideBarItem
            icon={<Users size={20} />}
            text="Departments"
            href="/dashboard/hospital/departments"
          />
          <SideBarItem
            icon={<Package size={20} />}
            text="Staff"
            href="/dashboard/hospital/staff"
          />
          <SideBarItem
            icon={<Users size={20} />}
            text="Patients"
            href="/dashboard/hospital/patients"
          />
          <SideBarItem
            icon={<Boxes size={20} />}
            text="Inventory"
            href="/dashboard/hospital/inventory"
          />
          <SideBarItem
            icon={<ActivitySquare size={20} />}
            text="Activity"
            href="/dashboard/hospital/activity"
          />
          <SideBarItem
            icon={<LifeBuoy size={20} />}
            text="Support"
            href="/dashboard/hospital/support"
          />
          <SideBarItem
            icon={<Settings size={20} />}
            text="Settings"
            href="/dashboard/hospital/settings"
          />
        </SideBar>
      </div>
    </main>
  );
};

export default SideNav;
