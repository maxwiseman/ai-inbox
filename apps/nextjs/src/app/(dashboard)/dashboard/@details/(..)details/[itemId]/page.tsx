import React, { Suspense } from "react";
import Link from "next/link";
import { extract } from "@extractus/article-extractor";

import { exampleData } from "~/app/example-data";

export default async function Page({
  params,
}: {
  params: { itemId: string };
}): Promise<React.ReactElement> {
  const articleData = exampleData.filter(
    (item) => item.id === params.itemId,
  )[0];
  const extractedData =
    articleData?.type === "news" ? await extract(articleData.url) : undefined;

  if (articleData?.type === "news")
    return (
      <div className="flex justify-center">
        <div className="typography max-w-prose p-8">
          <Suspense fallback={<span>Loading...</span>}>
            <Link className="!no-underline" href={extractedData?.url ?? ""}>
              <h1>{extractedData?.title}</h1>
            </Link>
            <div
              dangerouslySetInnerHTML={{
                __html: extractedData?.content ?? "",
              }}
            />
          </Suspense>
        </div>
      </div>
    );
  return <div>Article not found</div>;
}
