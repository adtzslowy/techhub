import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function migratePasswords() {
  const users = await prisma.user.findMany()

  for (const user of users) {
    const hash = await bcrypt.hash(user.password, 10)


    await prisma.user.update({
      where: { id: user.id },
      data: { password: hash }
    })
  }
}

migratePasswords()
  .catch(console.error).finally(() => prisma.$disconnect);
