"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { RNChildProp } from "../@types/interface/Interface";

export function SessionProvider({ children }: RNChildProp) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
