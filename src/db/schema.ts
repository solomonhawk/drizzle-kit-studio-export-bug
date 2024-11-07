import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const demoTable = sqliteTable("demo_table", {
  id: int().primaryKey({ autoIncrement: true }),
  exportedIdentifiers: text("exported_identifiers").notNull(),
});
