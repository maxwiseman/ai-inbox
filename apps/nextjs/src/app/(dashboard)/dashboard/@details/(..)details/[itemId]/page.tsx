import React from "react";

import { NewsArticle } from "~/app/_components/details/news-article";
import { exampleData, getRssData } from "~/app/example-data";

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
  const articleData = await getRssData().then(
    (res) => res.filter((item) => item.id === params.itemId)[0],
  );

  return <NewsArticle url={decodeURIComponent(params.itemId)} />;
  if (articleData?.type === "news") return <div>Article not found</div>;
}
