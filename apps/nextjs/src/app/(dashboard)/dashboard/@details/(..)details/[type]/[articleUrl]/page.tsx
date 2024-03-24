import React from "react";

import { NewsArticle } from "~/app/_components/details/news-article";

export default async function Page({
  params,
}: {
  params: { articleUrl: string; type: string };
}): Promise<React.ReactElement> {
  // const articleData = exampleData.filter(
  //   (item) => item.id === params.itemId,
  // )[0];
  // const articleData = await getRssData().then(
  //   (res) => res.filter((item) => item.id === params.itemId)[0],
  // );

  if (params.type === "news")
    return <NewsArticle url={decodeURIComponent(params.articleUrl)} />;
  return <div>Something is not quite right</div>;
  // if (articleData?.type === "news") return <div>Article not found</div>;
}
