import { randomUUID } from "node:crypto";

import { db, feed, source } from "@ai-inbox/db";

import { feeds, getAllFeedsFromSource } from "../feeds";

export async function GET(): Promise<Response> {
  const existingSources = await db.query.source.findMany();
  const existingFeeds = await db.query.feed.findMany();
  if (existingSources.length > 0 || existingFeeds.length > 0) {
    return new Response("Database already has data!", {
      headers: { "content-type": "text/plain" },
    });
  }

  const sources = feeds.map((feedSource) => ({
    id: randomUUID().substring(0, 4),
    title: feedSource.title,
    icon: feedSource.icon,
    url: feedSource.url,
    feeds: feedSource.feeds,
  }));

  await db.insert(source).values(sources);
  await db.insert(feed).values(
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
  );

  return new Response("Database Seeding Finished!", {
    headers: { "content-type": "text/plain" },
  });
}
