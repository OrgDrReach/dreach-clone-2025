"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { DarkModeToggle } from "../themes/dark-mode-toggle";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  className?: string;
}

interface Props {
  openNav: () => void;
}

const Navi = ({ openNav, isNavOpen }: Props & { isNavOpen: boolean }) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    if (!mounted) return isActive ? "text-[#31ADDB]" : "text-black";

    const currentTheme = theme === "system" ? systemTheme : theme;
    return isActive
      ? "text-[#31ADDB]"
      : currentTheme === "dark"
        ? "text-white"
        : "text-black";
  };

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${
        currentTheme === "dark" ? "bg-gray-900" : "bg-white"
      } shadow-md`}
    >
      <nav className="navi">
        <Link href="/">
          <div className="flex gap-4 items-center justify-center">
            <img src="/logos/DR.png" alt="Logo" className="h-12 w-12" />
            <p className="text-[#31ADDB] text-3xl font-semibold italic hidden md:block">
              Dr.{" "}
              <span
                className={
                  currentTheme === "dark" ? "text-[#125872]" : "text-[#125872]"
                }
              >
                Reach
              </span>
            </p>
          </div>
        </Link>

        <ul
          className={`flex justify-between space-x-4 ${
            currentTheme === "dark" ? "text-white" : "text-[#171718]"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <p
                  className={`navi-link font-[590] ${getLinkClass(link.href)}`}
                >
                  {link.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 items-center justify-center">
          <div className="hidden md:block">
            <div className="flex gap-2">
              <Link
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
                href={session ? `/dashboard` : `/auth/login`}
              >
                {session ? `Dashboard` : `Get Started`}
              </Link>

              {session && (
                <button
                  onClick={() => signOut({ callbackUrl: "/auth/login" })}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
          <DarkModeToggle />
          <div onClick={openNav} className="block lg:hidden">
            <div className="relative w-[2rem] h-[2rem]">
              <Bars3Icon
                className={`w-full h-full cursor-pointer text-[#31ADDB] font-extrabold absolute transition-opacity duration-300 ${
                  isNavOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <XMarkIcon
                className={`w-full h-full cursor-pointer text-[#31ADDB] font-extrabold absolute transition-opacity duration-300 ${
                  isNavOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const MobileNav = ({
  nav,
  closeNav,
}: {
  nav: boolean;
  closeNav: () => void;
}) => {
  const pathname = usePathname();
  const navAnimation = nav ? "translate-y-0" : "translate-y-[-100%]";
  const { data: session } = useSession();

  return (
    <div
      className={`fixed left-0 top-0 w-full h-screen bg-[#1B2E47] ${navAnimation} ease-in-out duration-500 z-50`}
    >
      <div className="flex flex-col gap-8 pt-20 text-center text-white">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={closeNav}
            className={pathname === link.href ? "text-[#31ADDB]" : ""}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={session ? `/dashboard` : `/auth/login`}
          onClick={closeNav}
          className="bg-orange-500 mx-auto w-[150px] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg text-center"
        >
          {session ? "Dashboard" : "Get Started"}
        </Link>
        {session && (
          <button
            onClick={() => {
              signOut({ callbackUrl: "/auth/login" });
              closeNav();
            }}
            className="bg-orange-500 mx-auto w-[150px] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(!nav);
  const closeNav = () => setNav(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  return (
    <nav className={className}>
      <MobileNav nav={nav} closeNav={closeNav} />
      <Navi openNav={openNav} isNavOpen={nav} />
    </nav>
  );
};

export default Navbar;
