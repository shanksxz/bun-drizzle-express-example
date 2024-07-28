import { pgTable, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const user = pgTable("user", {
	id: text("id").primaryKey().notNull(),
	name: text("name").notNull(),
});