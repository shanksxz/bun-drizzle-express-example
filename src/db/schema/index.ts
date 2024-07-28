import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("user",{
    id : text("id").notNull().primaryKey(),
    name : text("name").notNull(),
    email : text("email").notNull().unique(),
})

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;