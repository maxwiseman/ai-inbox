import React, { Suspense } from "react";

import { Spinner } from "@ai-inbox/ui/spinner";

import { NewsArticle } from "~/app/_components/details/news-article";
import { exampleData, GetNytData } from "~/app/example-data";

export function generateStaticParams(): { itemId: string }[] {
  return exampleData.map((item) => ({
    itemId: item.id,
  }));
}

export default async function Page({
  params,
}: {
  params: { itemId: string };
}): Promise<React.ReactElement> {
  // const articleData = exampleData.filter(
  //   (item) => item.id === params.itemId,
  // )[0];
  const articleData = await GetNytData().then(
    (res) => res.filter((item) => item.id === params.itemId)[0],
  );

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
