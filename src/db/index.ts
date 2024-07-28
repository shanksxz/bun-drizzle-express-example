import { DATABASE_URL } from "@/utils";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  connectionString: DATABASE_URL,
});

await client.connect();
export const db = drizzle(client);
export * from "drizzle-orm"
