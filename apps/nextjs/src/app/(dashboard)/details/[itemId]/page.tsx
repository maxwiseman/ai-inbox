import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Spinner } from "@ai-inbox/ui/spinner";
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
  const url = params.itemId?.replaceAll("%2F", "/").replaceAll("%3A", ":");
  let extractedData;
  try {
    extractedData = await extract(
      url ?? "",
      {},
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        },
      },
    );
  } catch {
    extractedData = await extract(url ?? "");
  }
  if (extractedData === null) return {};
  return {
    title: `${extractedData.title ?? "Untitled Article"} - AI Inbox`,
    openGraph: {
      images: { url: extractedData.image ?? "" },
    },
  };
}

export default async function Page({
  params,
}: {
  params: { itemId: string };
}): Promise<React.ReactElement> {
  const articleData = exampleData.filter(
    (item) => item.id === params.itemId,
  )[0];

  return (
    <Suspense
      fallback={
        <div className="absolute inset-0 flex flex-row items-center justify-center gap-2 text-muted-foreground">
          <Spinner />
          Loading...
        </div>
      }
    >
      <NewsArticle
        url={params.itemId.replaceAll("%2F", "/").replaceAll("%3A", ":")}
      />
    </Suspense>
  );
  if (articleData?.type === "news") return <div>Article not found</div>;
}
