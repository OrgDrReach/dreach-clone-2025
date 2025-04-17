import NextAuth from "next-auth/next";
declare module "next-auth" {
  export interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
    };
    data: {
      name: string;
      dob: string;
      gender: string;
      bloodGroup: string;
      profilePic: string;
      email: string;
      phone: string;

      serviceProvider: {
        id: string;
        userId: string;
        providerType: string;
        description: string;
        fee: string;
        specialization: string[];
        service: string[];
      };
      address: {
        address: string;
        city: string;
        state: string;
        pincode: string;
        country: string;
      };
      id: string;
      role: string;
    };
    authToken: string;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
    };

    data: any;
    authToken: string;
  }
}
