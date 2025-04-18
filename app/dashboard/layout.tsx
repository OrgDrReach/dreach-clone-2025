"use client";

import { RNChildProp } from "@/@types/interface/Interface";
import { ubuntu } from "@/@types/font/Font";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const DashboardRootLayout = ({ children }: RNChildProp) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange
    >
      <div
        className={`min-h-screen bg-background antialiased ${ubuntu.className}`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            className: "dark:bg-gray-800 dark:text-white",
            duration: 3000,
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default DashboardRootLayout;
