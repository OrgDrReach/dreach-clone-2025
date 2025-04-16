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
	BarChart3,
	Settings,
	Gauge,
	Mail,
	User,
  CalendarCheck2,
  LibraryBig,
  ReceiptIndianRupee,
  Cross,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ApplicationIcon from "@/components/icons/application";

const patientDashboards = [
  {
    name: "Dashboard",
    path: "/dashboard/patients",
    menu: [],
  },
  {
    name: "Analytics",
    path: "/dashboard/patients/analytics",
    menu: [],
  },
  {
    name: "Users",
    path: "/dashboard/patients/users",
    menu: [],
  },
  {},
  {},
  {},
  {
    name: "Support",
    path: "/dashboard/patients/support",
    menu: [],
  },
  {
    name: "Settings",
    path: "/dashboard/patients/settings",
    menu: [],
  },
  {
    name: "Apply for doctor",
    path: "/dashboard/patients/apply-for-doctor",
    menu: [],
  }
];

const SideBarContext = createContext({ expanded: true } as any);

const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDashboard, setSelectedDashboard] = useState(patientDashboards[0]);
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const currentDashboard = patientDashboards.find(
      (dashboard) => dashboard.path === pathname
    );
    if (currentDashboard) {
      setSelectedDashboard(currentDashboard);
    }
  }, [pathname]);

  return (
    <main>
      <div>
        <aside className="h-screen flex flex-col bg-[#125872] border-r shadow-sm overflow-hidden">
          <nav className="flex-1 flex flex-col justify-between overflow-y-auto">
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
              <ul className="flex-1 px-3 overflow-y-auto">{children}</ul>
            </SideBarContext.Provider>
            <div className="border-t flex p-3 shrink-0">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                }`}
              >
                <div className="leading-4">
                  <h4 className="font-semibold italic text-[#bae7ff]">Shadcn</h4>
                  <span className="text-xs text-gray-200">shadcn@gmail.com</span>
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
  const isActive = pathname === href || (pathname === "/dashboard/patients/" && href === "/dashboard/patients/");

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
          <SideBarItem icon={<Gauge size={20}  />} text="Dashboard" href="/dashboard/patients" />
          <SideBarItem icon={<BarChart3 size={20} />} text="Analytics" href="/dashboard/patients/analytics" />
          <SideBarItem icon={<CalendarCheck2 size={20} />} text="Appointment" href="/dashboard/patients/appointment" />
          <SideBarItem icon={<Mail size={20} />} text="Messages" href="/dashboard/patients/messages" />
          <SideBarItem icon={<LibraryBig size={20} />} text="Medical Records" href="/dashboard/patients/medical-records" />
          <SideBarItem icon={<Cross size={20} />} text="Treatment Plan" href="/dashboard/patients/treatment-plan" />
          <SideBarItem icon={<ReceiptIndianRupee size={20} />} text="Bill & Payment" href="/dashboard/patients/bills" />
          <SideBarItem icon={<LibraryBig size={20} />} text="Alerts" href="/dashboard/patients/alerts" />
          <SideBarItem icon={<User size={20} />} text="Profile" href="/dashboard/patients/profile" />
          <SideBarItem icon={<LifeBuoy size={20} />} text="Support" href="/dashboard/patients/support" />
          <SideBarItem icon={<Settings size={20} />} text="Settings" href="/dashboard/patients/settings" />
          <SideBarItem icon={<ApplicationIcon size={20} />} text="Apply For Doctor" href="/dashboard/patients/apply-for-doctor" />
        </SideBar>
      </div>
    </main>
  );
};

export default SideNav;
