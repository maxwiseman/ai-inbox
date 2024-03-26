/* eslint-disable import/no-cycle -- for drizzle it isn't really a problem */
import { relations } from "drizzle-orm";
import { int, text } from "drizzle-orm/sqlite-core";

import { sqliteTable } from "./_table";
import { users } from "./auth";

export const feed = sqliteTable("feed", {
  id: text("id").primaryKey(),
  title: text("name", { length: 256 }).notNull(),
  url: text("url", { length: 256 }).notNull(),
  sourceId: text("source_id").notNull(),
});

export const feedRelations = relations(feed, ({ one }) => ({
  source: one(source, {
    fields: [feed.sourceId],
    references: [source.id],
  }),
}));

export const source = sqliteTable("source", {
  id: text("id").primaryKey(),
  title: text("name", { length: 256 }).notNull(),
  icon: text("icon").notNull(),
  url: text("url", { length: 256 }).notNull(),
});

export const sourceRelations = relations(source, ({ many }) => ({
  feeds: many(feed),
}));

export const subscriptions = sqliteTable("subscription", {
  id: text("id").primaryKey(),
  sourceId: int("source_id").notNull(),
  feedId: int("feed_id").notNull(),
  userId: int("user_id").notNull(),
});

export const subscriptionRelations = relations(subscriptions, ({ one }) => ({
  source: one(source, {
    fields: [subscriptions.sourceId],
    references: [source.id],
  }),
  feed: one(feed, {
    fields: [subscriptions.feedId],
    references: [feed.id],
  }),
  user: one(users, {
    fields: [subscriptions.userId],
    references: [users.id],
  }),
}));
