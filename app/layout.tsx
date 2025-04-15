"use client";

import "./globals.css";
import { ubuntu, ubuntuMono } from "@/@types/font/Font";
import { Providers } from "./providers";
import { ThemeProvider2 } from "@/components/themes/theme-provider";
import { usePathname } from "next/navigation";
import DashboardLayout from "./dashboard/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { AppointmentProvider } from "@/components/contexts/AppointmentContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const showNavbar = [
    "/",
    "/about",
    "/careers",
    "/contact",
    "/doctors",
    "/services",
    "/services/home-care",
    "/services/integrated-care",
    "/appointment",
  ].includes(pathName);

  const showFooter = [
    "/",
    "/about",
    "/careers",
    "/contact",
    "/doctors",
    "/services",
    "/services/home-care",
    "/services/integrated-care",
    "/appointment",
  ].includes(pathName);

  const Route = pathName.startsWith("/dashboard");

  const commonBodyProps = {
    suppressHydrationWarning: true,
  };

  if (Route) {
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          />
        </head>
        <body {...commonBodyProps} className={ubuntu.className}>
          <main>
            <DashboardLayout>{children}</DashboardLayout>
          </main>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
          />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body
        {...commonBodyProps}
        className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}
      >
        <ThemeProvider2
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <AppointmentProvider>
              {showNavbar && <Navbar />}
              <div className={`pt-[73.49px] md:pt-[81.3px]`}>{children}</div>
              {showFooter && <Footer />}
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
              />
              <Toaster position="top-right" />
            </AppointmentProvider>
          </Providers>
        </ThemeProvider2>
      </body>
    </html>
  );
}
