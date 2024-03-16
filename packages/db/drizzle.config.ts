import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_URL ?? "",
    authToken: process.env.DB_AUTH_TOKEN ?? "",
  },
  tablesFilter: ["turbo__*"],
  out: "./src/migrations",
} satisfies Config;
