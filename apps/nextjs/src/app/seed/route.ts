import { randomUUID } from "node:crypto";

import { db, feed, source } from "@ai-inbox/db";

import { feeds, getAllFeedsFromSource } from "../feeds";

export async function GET(): Promise<Response> {
  const sources = feeds.map((feedSource) => ({
    id: randomUUID().substring(0, 4),
    title: feedSource.title,
    icon: feedSource.icon,
    url: feedSource.url,
    feeds: feedSource.feeds,
  }));

  await db.insert(source).values(sources).onConflictDoNothing({
    target: source.id,
  });
  await db
    .insert(feed)
    .values(
      sources
        .flatMap((newsSource) =>
          getAllFeedsFromSource(newsSource).map((i) => ({
            ...i,
            sourceId: newsSource.id,
          })),
        )
        .map((newsFeed) => ({
          id: randomUUID().substring(0, 4),
          title: newsFeed.title,
          url: newsFeed.url,
          sourceId: newsFeed.sourceId,
        })),
    )
    .onConflictDoNothing({
      target: feed.id,
    });

  return new Response("Database Seeding Finished!", {
    headers: { "content-type": "text/plain" },
  });
}
