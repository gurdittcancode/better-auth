import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

config({ path: ".env.local" });

const client = createClient({ url: process.env.DB_FILE_NAME! });
export const db = drizzle({ client });

import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { config } from "dotenv";

export const todosTable = sqliteTable("todos", {
	id: int().primaryKey({ autoIncrement: true }),
	title: text().notNull(),
	body: int(),
	isCompleted: int().default(0),
});
