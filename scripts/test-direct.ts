import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

async function testDirect() {
  try {
    console.log("🔌 Testing direct connection...");

    const connectionString = process.env.DATABASE_URL!;
    console.log("Host:", connectionString.split('@')[1]?.split('/')[0]);

    const client = postgres(connectionString, {
      prepare: false,
      max: 1,
      connect_timeout: 10, // 10 seconds timeout
    });

    const result = await client`SELECT NOW()`;

    console.log("✅ Connected!");
    console.log("Server time:", result[0]);

    await client.end();
  } catch (error: any) {
    console.error("❌ Connection failed:");
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
  }
}

testDirect();
