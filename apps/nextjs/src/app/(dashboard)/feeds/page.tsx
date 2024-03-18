import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ai-inbox/ui/command";

import { feeds } from "~/app/feeds";

export default function Page(): React.ReactElement {
  return (
    <div className="p-8">
      <Command>
        <CommandInput />
        <CommandList>
          <CommandEmpty>Nothing found!</CommandEmpty>
          {feeds.map((source) => (
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
              {source.feeds.map((feed) =>
                feed.type === "feedGroup" ? (
                  feed.feeds.map((subfeed) => (
                    <CommandItem key={subfeed.title} title={subfeed.title}>
                      {subfeed.title}
                    </CommandItem>
                  ))
                ) : (
                  <CommandItem key={feed.title} title={feed.title}>
                    {feed.title}
                  </CommandItem>
                ),
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  );
}
