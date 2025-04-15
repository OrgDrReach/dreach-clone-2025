import { NextAuthOptions } from "next-auth";
import jsonwebtoken from "jsonwebtoken";

import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
export const authOption: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
        },
      },
      httpOptions: {
        timeout: 100000,
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, session, account, trigger }) {
      if (trigger === "update") {
        token.data = session.data;
        return token;
      }
      // console.log(token, user);
      try {
        if (account) {
          const res = await fetch(`${process.env.SERVER_URL}/user/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
            }),
          });
          if (res.status !== 201) {
            throw new Error("something went wrong");
          }

          const data = await res.json();

          token.data = data;

          const tokens = jsonwebtoken.sign(
            {
              ...token,
              iss: process.env.NEXTAUTH_URL,
              //never expire token
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 10,
            },
            process.env.NEXTAUTH_SECRET!
          );

          token.authToken = tokens;
          return token;
        }
      } catch (error) {
        // console.log("fromauth", error);
        throw error;
      }

      return token;
    },

    async session({ session, token }) {
      // console.log(session, token);

      if (token?.data) {
        session.user = {
          id: token.data.id,
          email: token.data.email,
          name: token.data.name,
          image: token.data.image,
        };
        session.authToken = token.authToken;
        session.data = token.data;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/",
  },
  session: {
    strategy: "jwt",

    // maxAge:10
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    // encode: ({ secret, token }) => {
    //     const encodedToken = jsonwebtoken.sign(
    //       {
    //         ...token,
    //         iss: process.env.NEXTAUTH_URL,
    //         exp: Math.floor(Date.now() / 1000) + 60 * 60,
    //       },
    //       secret,
    //     )
    //     return encodedToken
    //   },
    //   decode: async ({ secret, token }) => {
    //     const decodedToken = jsonwebtoken.verify(token!, secret)
    //     return decodedToken as JWT
    //   },
  },
};
