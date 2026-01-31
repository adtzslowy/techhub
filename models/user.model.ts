import { prisma } from "@/lib/prisma";

export const UserModel = {
  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } })
  }
};
