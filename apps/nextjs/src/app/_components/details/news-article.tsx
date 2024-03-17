import React from "react";
import Link from "next/link";
import { extract } from "@extractus/article-extractor";

import { AspectRatio } from "@ai-inbox/ui/aspect-ratio";
import { Separator } from "@ai-inbox/ui/separator";

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
      <div className="max-w-prose p-8">
        {extractedData?.image ? (
          <AspectRatio
            className="mb-8 animate-pulse overflow-hidden rounded-lg bg-primary/10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${extractedData.image}")` }}
            ratio={16 / 9}
          />
        ) : null}
        <div className="flex flex-col text-lg text-muted-foreground">
          <h1 className="mb-2 scroll-m-20 text-4xl font-extrabold tracking-tight text-primary">
            {extractedData?.title}
          </h1>
          {extractedData?.ttr ? (
            <div>
              <strong>{Math.floor(extractedData.ttr / 60)} minute</strong> read
              {extractedData.author &&
              !extractedData.author.includes("http") ? (
                <>
                  {" "}
                  by{" "}
                  {extractedData.author.startsWith("@") ? (
                    <Link
                      target="_blank"
                      href={`https://x.com/${extractedData.author}`}
                    >
                      <strong>
                        {extractedData.author ?? "unknown author"}
                      </strong>
                    </Link>
                  ) : (
                    <strong>{extractedData.author ?? "unknown author"}</strong>
                  )}
                </>
              ) : null}
            </div>
          ) : (
            <div>
              By <strong>{extractedData?.author ?? "unknown author"}</strong>
            </div>
          )}
          {extractedData?.published ? (
            <div>
              Published{" "}
              <strong>
                {new Date(extractedData.published).toLocaleDateString()}
              </strong>{" "}
              {extractedData.source ? (
                <>
                  on{" "}
                  <Link target="_blank" href={extractedData.url ?? ""}>
                    <strong>
                      {extractedData.source ?? "unknown media outlet"}
                    </strong>
                  </Link>
                </>
              ) : null}
            </div>
          ) : (
            <div>
              Published on{" "}
              <Link target="_blank" href={extractedData?.url ?? ""}>
                <strong>
                  {extractedData?.source ?? "unknown media outlet"}
                </strong>
              </Link>
            </div>
          )}
        </div>
        <Separator className="my-8" />
        <div
          className="typography "
          dangerouslySetInnerHTML={{
            __html: extractedData?.content ?? "",
          }}
        />
      </div>
    </div>
  );
}
