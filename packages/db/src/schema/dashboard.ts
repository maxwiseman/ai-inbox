import { sql } from "drizzle-orm";
import { int, text } from "drizzle-orm/sqlite-core";

import { sqliteTable } from "./_table";

export const dashboardItem = sqliteTable("dashboard_item", {
  id: text("id").primaryKey(),
  title: text("name", { length: 256 }).notNull(),
  contentSnippet: text("content_snippet", { length: 256 }).notNull(),
  details: text("details", { mode: "json" })
    .$type<DashboardDetails>()
    .notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export interface DashboardItem {
  id: string;
  title: string;
  contentSnippet: string;
  icon: string;
  details: DashboardDetails;
}

export type DashboardDetails =
  | {
      type: "news";
      articleUrl: string;
      date: Date | string;
      source: string;
    }
  | {
      type: "email";
      id: string;
    };
