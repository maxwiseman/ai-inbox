import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as auth from "./schema/auth";
import * as post from "./schema/post";

export const schema = { ...auth, ...post };

export { sqliteTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const client = createClient({
  url: process.env.DB_URL ?? "",
  authToken: process.env.DB_AUTH_TOKEN ?? "",
});

export const db = drizzle(client, { schema });
