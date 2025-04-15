// import NextAuth from "next-auth/next";
// import { JWT } from "next-auth/jwt";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       email: string;
//       name: string;
//       image: string;
//     };
//     data: {
//       Fname: string;
//       Lname: string;
//       dob: string;
//       gender: string;
//       bloodGroup: string;
//       profilePic: string;
//       email: string;
//       contact: string;
//       doctorProfile: {
//         id: string;
//         description: string;
//         fee: string;
//         specializations: string[];
//       };
//       address: {
//         address: string;
//         city: string;
//         state: string;
//         pincode: string;
//         country: string;
//       };
//       id: string;
//       role: string;
//     };
//     authToken: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     user: {
//       id: string;
//       email: string;
//       name: string;
//       image: string;
//     };

//     data: any;
//     authToken: string;
//   }
// }
