"use client";

import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="">
      <Navbar />
      <header className="flex justify-between items-center p-3 lg:p-2 pb-10">
        <nav className="xl:mt-32 lg:mt-24 mt-32 mx-auto">
          <ul className="flex justify-center text-xl space-x-8">
            <li>
              <Link
                href="/auth/login"
                className={`relative font-semibold xl:font-semibold xl:mx-2 mx-1 text-[#125872] cursor-pointer xl:text-[20px] text-[18px] w-fit lg:block ${
                  pathname === "/auth/login"
                    ? "border-b-4 pb-1 xl:pb-0 border-[#31ADDB]"
                    : 'after:block after:content-[""] after:absolute after:h-[3px] after:bg-[#31ADDB] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center'
                }`}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/auth/register"
                className={`relative font-semibold xl:font-semibold xl:mx-2 mx-1 text-[#125872] cursor-pointer xl:text-[20px] text-[18px] w-fit lg:block ${
                  pathname === "/auth/register"
                    ? "border-b-4 pb-1 xl:pb-0 border-[#31ADDB]"
                    : 'after:block after:content-[""] after:absolute after:h-[3px] after:bg-[#31ADDB] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center'
                }`}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
