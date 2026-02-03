import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

export const authOptions: NextAuthOptions = {
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
        console.log("LOGIN ATTEMPT: ", credentials?.email);

        if (!credentials?.email || !credentials.password) {
          throw new Error("Email dan password wajib diisi");
        }

        const user = await db.query.users.findFirst({
          where: eq(users.email, credentials.email as string),
          with: {
            userBidang: {
              with: {
                bidang: true,
              },
            },
          },
        });

        console.log("User found: ", user?.email);

        if (!user) {
          throw new Error("User tidak ditemukan");
        }

        const valid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        console.log("PASSWORD VALID: ", valid);

        if (!valid) {
          throw new Error("Password salah");
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          bidangIds: user.userBidang.map((ub) => ub.bidangId),
        } as any;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = parseInt(user.id);
        token.role = (user as any).role;
        token.bidangIds = (user as any).bidangIds;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id as number;
        (session.user as any).role = token.role as string;
        (session.user as any).bidangIds = token.bidangIds as number[];
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
