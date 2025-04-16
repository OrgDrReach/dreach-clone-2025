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
const adminDashboards = [
  {
    name: "Dashboard",
    path: "/dashboard/admin",
    menu: [],
  },
  {
    name: "Analytics",
    path: "/dashboard/admin/analytics",
    menu: [],
  },
  {
    name: "Site Management",
    path: "/dashboard/admin/sitemanager",
    menu: [],
  },
  {
    name: "Employee Management",
    path: "/dashboard/admin/employees",
    menu: [],
  },
  {
    name: "Users",
    path: "/dashboard/admin/users",
    menu: [],
  },
  {
    name: "Doctors",
    path: "/dashboard/admin/doctors",
    menu: [],
  },
  {
    name: "Hospitals",
    path: "/dashboard/admin/hospitals",
    menu: [],
  },
  {
    name: "Alerts & Notifications",
    path: "/dashboard/admin/alerts",
    menu: [],
  },
  {
    name: "Settings",
    path: "/dashboard/admin/settings",
    menu: [],
  },
];
const SideBarContext = createContext({ expanded: true } as any);
const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDashboard, setSelectedDashboard] = useState(
    adminDashboards[0],
  );
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  useEffect(() => {
    const currentDashboard = adminDashboards.find(
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
          <nav className="h-full flex flex-col bg-[#000] border-r shadow-sm">
            <div className="p-4 pb-2 border-[#fff] dark:border-slate-600 border-b mb-2 flex justify-between items-center">
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
                className={`bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 ${
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
    (pathname === "/dashboard/admin/" && href === "/dashboard/admin/");
  return (
    <Link href={href}>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          isActive
            ? "bg-[#ffffffe9]  text-[#000] font-semibold"
            : "hover:bg-white text-[#fff] hover:text-[#3d6b84] "
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
            href="/dashboard/admin"
          />
          <SideBarItem
            icon={<BarChart3 size={20} />}
            text="Analytics"
            href="/dashboard/admin/analytics"
          />
          <SideBarItem
            icon={<Users size={20} />}
            text="Site Management"
            href="/dashboard/admin/sitemanager"
          />
          <SideBarItem
            icon={<Package size={20} />}
            text="Employee Management"
            href="/dashboard/admin/employees"
          />
          <SideBarItem
            icon={<Receipt size={20} />}
            text="Users"
            href="/dashboard/admin/users"
          />
          <SideBarItem
            icon={<Boxes size={20} />}
            text="Doctors"
            href="/dashboard/admin/doctors"
          />
          <SideBarItem
            icon={<ActivitySquare size={20} />}
            text="Hospitals"
            href="/dashboard/admin/hospitals"
          />
          <SideBarItem
            icon={<LifeBuoy size={20} />}
            text="Alerts & Notifications"
            href="/dashboard/admin/alerts"
          />
          <SideBarItem
            icon={<Settings size={20} />}
            text="Settings"
            href="/dashboard/admin/settings"
          />
        </SideBar>
      </div>
    </main>
  );
};
export default SideNav;
