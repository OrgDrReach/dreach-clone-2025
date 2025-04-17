import { DefaultSession, DefaultUser } from "next-auth";
import { EUserRole } from "./user.d.types";
import { IAddress } from "./provider.d.types";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      phone: string;
      name: string;
      name: string;
      role: EUserRole;
      // isVerified: boolean;
      // role?:
      // 	| "Doctor"
      // 	| "Hospital"
      // 	| "Lab"
      // 	| "Nursing"
      // 	| "DoctorsAssistant"
      // 	| "Admin"
      // 	| "SuperAdmin"
      // 	| "patient";
      address?: IAddress[];
      profileImage?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    email: string;
    phone: string;
    name: string;
    role: EUserRole;
    // isVerified: boolean;
    // providerRole?:
    // 	| "doctor"
    // 	| "hospital"
    // 	| "lab"
    // 	| "pharmaceutical"
    // 	| "ambulance";
    address?: IAddress[];
    profileImage?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    phone: string;
    name: string;
    role: EUserRole;
    isVerified: boolean;
    // providerRole?:
    // 	| "doctor"
    // 	| "hospital"
    // 	| "lab"
    // 	| "pharmaceutical"
    // 	| "ambulance";
    address?: IAddress[];
    profileImage?: string;
  }
}
