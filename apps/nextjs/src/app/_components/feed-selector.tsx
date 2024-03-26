"use client";

import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

import {
  Command,
  CommandCheckboxItem,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@ai-inbox/ui/command";

import { api } from "~/trpc/react";

export function FeedSelector({
  onSelectedChange,
  selected,
}: {
  selected?: string[];
  onSelectedChange?: Dispatch<SetStateAction<string[]>>;
}): React.ReactElement {
  const [defaultSelected, setDefaultSelected] = useState<string[]>([]);
  const sources = api.news.allSources.useQuery({ withFeeds: true });

  return (
    <Command>
      <CommandInput placeholder="Filter Sources..." />
      <CommandList scrollShadow="bottom">
        <CommandEmpty>Nothing found!</CommandEmpty>
        {sources.data?.map((source) => (
          <CommandGroup
            key={source.title}
            heading={
              <div className="inline-flex items-center">
                {/* <IconBrandNytimes className="mr-2 h-4 w-4" /> */}
                <div
                  className="mr-2"
                  dangerouslySetInnerHTML={{ __html: source.icon }}
                />

                {source.title}
              </div>
            }
          >
            {source.feeds.map((feed) => (
              <CommandCheckboxItem
                checked={
                  defaultSelected.includes(feed.id) ||
                  selected?.includes(feed.id)
                }
                onSelect={() => {
                  if (onSelectedChange) {
                    onSelectedChange((prev) =>
                      prev.includes(feed.id)
                        ? prev.filter((id) => id !== feed.id)
                        : [...prev, feed.id],
                    );
                  } else
                    setDefaultSelected((prev) =>
                      prev.includes(feed.id)
                        ? prev.filter((id) => id !== feed.id)
                        : [...prev, feed.id],
                    );
                }}
                key={feed.id}
                value={`${feed.title} ${feed.id}`}
                title={feed.title}
              >
                {feed.title}
              </CommandCheckboxItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  );
}
