import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/db";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email dan password wajib diisi");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: {
            userBidang: {
              include: { bidang: true },
            },
          },
        });

        if (!user) {
          throw new Error("User tidak ditemukan");
        }

        const valid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!valid) {
          throw new Error("Password salah");
        }

        /**
         * ⛔ JANGAN return string untuk id
         * ⛔ JANGAN return password
         */
        return {
          id: user.id, // ✅ number (Int)
          name: user.name,
          email: user.email,
          role: user.role,
          bidangIds: user.userBidang.map(
            (ub) => ub.bidangId
          ),
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as number;
        token.role = (user as any).role;
        token.bidangIds = (user as any).bidangIds;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as number;
        session.user.role = token.role as string;
        session.user.bidangIds = token.bidangIds as number[];
      }
      return session;
    },
  },
});

