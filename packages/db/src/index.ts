import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as auth from "./schema/auth";
import * as dashboard from "./schema/dashboard";
import * as news from "./schema/news";

export const schema = { ...auth, ...news, ...dashboard };

export * from "./schema/auth";
export * from "./schema/dashboard";
export * from "./schema/news";

export { sqliteTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const client = createClient({
  url: process.env.DB_URL ?? "",
  authToken: process.env.DB_AUTH_TOKEN ?? "",
});

export const db = drizzle(client, { schema });
