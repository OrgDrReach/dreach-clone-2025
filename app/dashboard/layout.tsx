import { RNChildProp } from "@/@types/interface/Interface";
import React from "react";
import { ubuntu, ubuntuMono } from "@/@types/font/Font";
import { Providers } from "../providers";
import { ThemeProvider2 } from "@/components/themes/theme-provider";

export default function DashboardLayout({ children }: RNChildProp) {
  return (
    <main className={`${ubuntu.className} ${ubuntuMono.className} antialiased`}>
      <ThemeProvider2
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Providers>
          <div>{children}</div>
        </Providers>
      </ThemeProvider2>
    </main>
  );
}
