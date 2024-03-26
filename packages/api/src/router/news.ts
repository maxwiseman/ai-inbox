import { z } from "zod";

import { db } from "@ai-inbox/db";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const newsRouter = createTRPCRouter({
  allFeeds: publicProcedure
    .input(
      z
        .object({ withSource: z.boolean().optional().default(false) })
        .optional(),
    )
    .query(async ({ input }) => {
      return await db.query.feed.findMany({
        with: { source: input?.withSource ? true : undefined },
      });
    }),
  allSources: publicProcedure
    .input(
      z.object({ withFeeds: z.boolean().optional().default(false) }).optional(),
    )
    .query(async ({ input }) => {
      return await db.query.source.findMany({
        with: { feeds: input?.withFeeds ? true : undefined },
      });
    }),
});
