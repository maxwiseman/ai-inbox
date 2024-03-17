import React, { Suspense } from "react";

import { Spinner } from "@ai-inbox/ui/spinner";

import { NewsArticle } from "~/app/_components/details/news-article";
import { exampleData } from "~/app/example-data";

export default async function Page({
  params,
}: {
  params: { itemId: string };
}): Promise<React.ReactElement> {
  const articleData = exampleData.filter(
    (item) => item.id === params.itemId,
  )[0];

  if (articleData?.type === "news")
    return (
      <Suspense
        fallback={
          <div className="absolute inset-0 flex flex-row items-center justify-center gap-2 text-muted-foreground">
            <Spinner />
            Loading...
          </div>
        }
      >
        <NewsArticle item={articleData} />
      </Suspense>
    );
  return <div>Article not found</div>;
}
