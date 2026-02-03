import { db } from "@/lib/db";
import { users, bidang } from "@/lib/db/schema";
import bcrypt from "bcryptjs";

async function seed() {
  console.log("🌱 Seeding database...")

  const hashedPassword = await bcrypt.hash("d476ead1", 10);

  await db.insert(users).values({
    name: "Admin TechHub",
    email: "admin@techub.com",
    password: hashedPassword,
    role: "ADMIN",
  })

  await db.insert(bidang).values([
    { name: "Pemrograman" },
    { name: "IoT" },
    { name: "AI" },
    { name: "Multimedia" },
    { name: "Jaringan" },
    { name: "Science" },
  ])

  console.log("✅ Seed completed!")

  seed().catch((e) => {
    console.log(e);
    process.exit(1);
  })
    .finally(() => process.exit(0))
}
