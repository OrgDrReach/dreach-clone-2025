import { ubuntu } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import { DoctorSideNav, Header } from "@/components/dashboard/ui";
import { ScrollArea } from "@/components/ui";
import { useSession } from "next-auth/react";
import React from "react";

const Layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
  return (
    <main className={ubuntu.className}>
      <div className="flex h-screen">
        <section className="">
          <DoctorSideNav />
        </section>
        <div className="w-[100%] h-screen overflow-y-auto mx-auto">
          <div className="bg-[#125872] text-white ">
            <Header />
          </div>
          <ScrollArea className="h-[93.9dvh] bg-[#497585]">{children}</ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default Layout;
