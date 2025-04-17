"use client";

// Conditional Layout for dashboards using session
import { ubuntu } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import { AdminSideNav, Header } from "@/components/dashboard/ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { Viewport } from "next";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Layout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed((prev) => !prev);
  }, []);

  return (
    <main className={cn("min-h-screen bg-background", ubuntu.className)}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{
            width: isSidebarCollapsed ? 80 : 256,
            transition: { duration: 0.3 },
          }}
          className="shrink-0 border-r border-[#ffffff1a]"
        >
          <AdminSideNav
            onToggle={toggleSidebar}
            isCollapsed={isSidebarCollapsed}
          />
        </motion.aside>

        {/* Main Content */}
        <motion.div
          initial={false}
          animate={{
            marginLeft: 0,
            width: "100%",
            transition: { duration: 0.3 },
          }}
          className="flex-1 flex flex-col min-w-0"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-[#125872] border-b border-[#ffffff1a]">
            <Header />
          </div>

          {/* Main Content Area */}
          <ScrollArea className="flex-1 h-[calc(100vh-4rem)]">
            <div className="container mx-auto p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </main>
  );
};

export default Layout;
