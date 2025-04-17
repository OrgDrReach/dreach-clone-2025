import { DefaultSession } from "next-auth";
import { EUserRole } from "./user.d.types";
import { IAddress } from "./provider.d.types";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      phone?: string;
      role?: EUserRole;
      profileImage?: string;
    } & DefaultSession["user"];
  }
}
