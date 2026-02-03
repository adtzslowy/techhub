import dotenv from 'dotenv';
import path from 'path';

// Load .env dengan path eksplisit
const envPath = path.resolve(process.cwd(), '.env');
console.log('📁 Loading from:', envPath);

const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('❌ Error:', result.error.message);
} else {
  console.log('✅ .env loaded');
}

console.log("\n🔍 Checking environment variables...");
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✅ EXISTS" : "❌ NOT FOUND");

if (process.env.DATABASE_URL) {
  const url = process.env.DATABASE_URL;

  try {
    const parsed = new URL(url);
    console.log("\n📋 Connection Details:");
    console.log("Protocol:", parsed.protocol);
    console.log("Host:", parsed.hostname);
    console.log("Port:", parsed.port);
    console.log("Database:", parsed.pathname);
    console.log("Username:", parsed.username);
    console.log("Password:", parsed.password ? "***HIDDEN***" : "❌ MISSING");
  } catch (e) {
    console.error("❌ Invalid DATABASE_URL format");
  }
}
