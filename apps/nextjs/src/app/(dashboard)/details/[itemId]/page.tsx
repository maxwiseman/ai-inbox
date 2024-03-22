import type { Metadata } from "next";
import React from "react";
import { extract } from "@extractus/article-extractor";

import { NewsArticle } from "~/app/_components/details/news-article";
import { exampleData } from "~/app/example-data";

// export function generateStaticParams(): { itemId: string }[] {
//   return exampleData.map((item) => ({
//     itemId: item.id,
//   }));
// }

export async function generateMetadata({
  params,
}: {
  params: { itemId?: string };
}): Promise<Metadata> {
  const url = decodeURIComponent(params.itemId ?? "");
  let extractedData;
  try {
    try {
      extractedData = await extract(
        url,
        {},
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
          },
        },
      );
    } catch {
      extractedData = await extract(url);
    }
  } catch {
    return {
      title: "Unknown Article - AI Inbox",
    };
  }
  if (extractedData === null) return {};
  return {
    title: `${extractedData.title ?? "Untitled Article"} - AI Inbox`,
    openGraph: {
      images: { url: extractedData.image ?? "" },
      authors: [extractedData.author ?? ""],
      publishedTime: extractedData.published,
    },
    authors: [
      {
        name: extractedData.author,
        url: extractedData.author?.startsWith("@")
          ? `https://x.com/${extractedData.author}`
          : undefined,
      },
    ],
    publisher: extractedData.source,
  };
}

export default function Page({
  params,
}: {
  params: { itemId: string };
}): React.ReactElement {
  const articleData = exampleData.filter(
    (item) => item.id === params.itemId,
  )[0];

  return <NewsArticle url={decodeURIComponent(params.itemId)} />;
  if (articleData?.type === "news") return <div>Article not found</div>;
}
