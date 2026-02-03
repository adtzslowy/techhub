import { db } from "../lib/db/index.js";
import { sql } from "drizzle-orm";

async function testConnection() {
  try {
    console.log("🔌 Testing database connection...");

    const result = await db.execute(sql`SELECT NOW()`);

    console.log("✅ Database connected successfully!");
    console.log("📅 Server time:", result.rows[0]);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw error;
  }
}

testConnection()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
