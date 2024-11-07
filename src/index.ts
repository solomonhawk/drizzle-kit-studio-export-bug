import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { demoTable } from "./db/schema";

const db = drizzle({ connection: { url: process.env.DB_FILE_NAME! } });

async function main() {
  await db.insert(demoTable).values({
    exportedIdentifiers: "prefix",
    indentifiersExported: "infix",
  });

  const result = await db.select().from(demoTable).all();

  console.log(result);
}

main();
