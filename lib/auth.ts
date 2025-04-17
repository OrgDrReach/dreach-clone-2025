import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};