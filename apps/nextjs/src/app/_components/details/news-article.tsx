import React from "react";
import Link from "next/link";
import { extract } from "@extractus/article-extractor";
import { IconHome } from "@tabler/icons-react";

import { AspectRatio } from "@ai-inbox/ui/aspect-ratio";
import { LinkButton } from "@ai-inbox/ui/button";
import { Separator } from "@ai-inbox/ui/separator";

export async function NewsArticle({
  url,
}: {
  url: string | undefined;
}): Promise<React.ReactElement> {
  let extractedData;
  try {
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
  } catch {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        Couldn&lsquo;t get data from article!
        <LinkButton href="/dashboard" icon={<IconHome />}>
          Go Home
        </LinkButton>
      </div>
    );
  }

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
