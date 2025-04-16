// Conditional Layout for Dashboards using session
import { ubuntu } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import { AdminSideNav, Header } from "@/components/Dashboard/ui";
import { ScrollArea } from "@/components/ui";
import type { Viewport } from "next";
import { useSession } from "next-auth/react";
import React from "react";

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
}

const Layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
  return (
    <main className={ubuntu.className}>
      <div className="flex">
        <section className="">
          <AdminSideNav />
        </section>
        <div className="w-[100%] mx-auto">
          <div className="bg-[#000] text-white border-b border-[#fff]">
            <Header />
          </div>
          <ScrollArea className="h-[93.9dvh] bg-slate-900">
            {children}
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default Layout;
