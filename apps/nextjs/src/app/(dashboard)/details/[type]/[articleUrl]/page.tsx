import type { Metadata } from "next";
import React from "react";
import { extract } from "@extractus/article-extractor";

import { NewsArticle } from "~/app/_components/details/news-article";

// export function generateStaticParams(): { itemId: string }[] {
//   return exampleData.map((item) => ({
//     itemId: item.id,
//   }));
// }

export async function generateMetadata({
  params,
}: {
  params: { articleUrl?: string; type?: string };
}): Promise<Metadata> {
  const url = decodeURIComponent(params.articleUrl ?? "");
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
  params: { articleUrl: string; type: string };
}): React.ReactElement {
  // const articleData = exampleData.filter(
  //   (item) => item.id === params.itemId,
  // )[0];

  if (params.type === "news")
    return <NewsArticle url={decodeURIComponent(params.articleUrl)} />;
  return <div>Something is not quite right</div>;
  // if (articleData?.type === "news") return <div>Article not found</div>;
}
