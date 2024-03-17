import React from "react";
import Link from "next/link";
import { extract } from "@extractus/article-extractor";

import { AspectRatio } from "@ai-inbox/ui/aspect-ratio";

import type { Item } from "../dashboard-item";

export async function NewsArticle({
  item,
}: {
  item: Item;
}): Promise<React.ReactElement> {
  if (item.type !== "news") {
    return (
      <div className="flex h-full w-full items-center justify-center text-muted-foreground">
        Article not found!
      </div>
    );
  }

  const extractedData = await extract(item.url);

  return (
    <div className="flex justify-center">
      <div className="typography max-w-prose p-8">
        {extractedData?.image ? (
          <AspectRatio
            className="mb-4 animate-pulse overflow-hidden rounded-lg bg-primary/10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${extractedData.image}")` }}
            ratio={16 / 9}
          />
        ) : null}
        <Link className="!no-underline" href={extractedData?.url ?? ""}>
          <h1>{extractedData?.title}</h1>
        </Link>
        <div
          dangerouslySetInnerHTML={{
            __html: extractedData?.content ?? "",
          }}
        />
      </div>
    </div>
  );
}
