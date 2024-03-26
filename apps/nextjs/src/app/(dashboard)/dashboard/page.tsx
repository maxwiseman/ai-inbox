import Link from "next/link";
import { IconSortAscending } from "@tabler/icons-react";

import { db, feed, inArray } from "@ai-inbox/db";
import { Button } from "@ai-inbox/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@ai-inbox/ui/dropdown-menu";

import type { DashboardItem as DashboardItemType } from "~/app/example-data";
import { DashboardList } from "~/app/_components/dashboard-list";
import { getRssData } from "~/app/example-data";
import { FilterDialog } from "../../_components/filter-dialog";
import { SearchInput } from "../../_components/search-input";

export const revalidate = 3600;

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query?: string;
    sort?: "nameAZ" | "nameZA" | "dateAZ" | "dateZA" | "sourceAZ" | "sourceZA";
    filter?: string;
  };
}): Promise<React.ReactElement> {
  const dbData = await db.query.feed.findMany({
    where: inArray(
      feed.id,
      searchParams.filter !== "[]"
        ? (JSON.parse(
            decodeURIComponent(searchParams.filter ?? "%5B%222353%22%5D"),
          ) as string[])
        : ["2353"],
    ),
    with: {
      source: true,
    },
  });

  const feeds = await Promise.all(
    dbData.flatMap(async (newsFeed) => {
      return await getRssData(newsFeed.url);
    }),
  );

  const items: DashboardItemType[] = feeds
    .flatMap((newsFeed) =>
      newsFeed.items?.map(
        (newsItem): DashboardItemType => ({
          id: newsItem.id,
          title: newsItem.title ?? "",
          contentSnippet: newsItem.contentSnippet ?? "",
          details: {
            articleUrl: newsItem.link ?? "",
            date: newsItem.isoDate ?? "",
            source: newsFeed.title ?? "",
            type: "news",
          },
          icon: "",
        }),
      ),
    )
    .filter((i): i is DashboardItemType => i !== undefined);

  // const rssData: NewsFeed = await getRssData(
  //   // eslint-disable-next-line no-nested-ternary -- prettier is good
  //   source?.feeds[0]
  //     ? // eslint-disable-next-line no-nested-ternary -- prettier is good
  //       source.feeds[0].type === "feed"
  //       ? source.feeds[0].url
  //       : source.feeds[0].type === "feedGroup" && source.feeds[0].feeds[0]
  //         ? source.feeds[0].feeds[0].url
  //         : undefined
  //     : undefined,
  // );

  // const items: DashboardItemType[] | undefined = rssData.items?.map((item) => ({
  //   title: item.title ?? "",
  //   id: item.id,
  //   contentSnippet: item.contentSnippet ?? "",
  //   icon: "",
  //   details: {
  //     type: "news",
  //     articleUrl: item.link ?? "",
  //     date: item.isoDate ?? "",
  //     source: rssData.title ?? "",
  //   },
  // }));

  // switch (searchParams.sort) {
  //   case undefined: {
  //     items?.sort((a, b) =>
  //       // eslint-disable-next-line no-nested-ternary -- its ok
  //       a.details.type === "news" &&
  //       b.details.type === "news" &&
  //       typeof a.details.date === typeof b.details.date
  //         ? typeof a.details.date === "string" &&
  //           typeof b.details.date === "string"
  //           ? b.details.date.localeCompare(a.details.date)
  //           : 1
  //         : 1,
  //     );
  //     break;
  //   }
  //   case "nameAZ": {
  //     items?.sort((a, b) => a.title.localeCompare(b.title));
  //     break;
  //   }
  //   case "nameZA": {
  //     items?.sort((a, b) => b.title.localeCompare(a.title));
  //     break;
  //   }
  //   case "dateAZ": {
  //     items?.sort((a, b) =>
  //       // eslint-disable-next-line no-nested-ternary -- its ok
  //       a.details.type === "news" &&
  //       b.details.type === "news" &&
  //       typeof a.details.date === typeof b.details.date
  //         ? typeof a.details.date === "string" &&
  //           typeof b.details.date === "string"
  //           ? a.details.date.localeCompare(b.details.date)
  //           : 1
  //         : 1,
  //     );
  //     break;
  //   }
  //   case "dateZA": {
  //     items?.sort((a, b) =>
  //       // eslint-disable-next-line no-nested-ternary -- its ok
  //       a.details.type === "news" &&
  //       b.details.type === "news" &&
  //       typeof a.details.date === typeof b.details.date
  //         ? typeof a.details.date === "string" &&
  //           typeof b.details.date === "string"
  //           ? b.details.date.localeCompare(a.details.date)
  //           : 1
  //         : 1,
  //     );
  //     break;
  //   }
  //   case "sourceAZ": {
  //     items?.sort((a, b) => a.details.type.localeCompare(b.details.type));
  //     break;
  //   }
  //   case "sourceZA": {
  //     items?.sort((a, b) => b.details.type.localeCompare(a.details.type));
  //     break;
  //   }
  // }

  return (
    <div className="relative max-w-full p-2 md:p-8">
      {/* {items !== undefined ? <DashboardList items={items} /> : null} */}
      <div className="mb-6 flex items-center gap-2">
        <SearchInput
        // value={searchString}
        // onChange={(e) => {
        //   setSearchString(e.target.value);
        // }}
        />

        <FilterDialog />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-9 min-w-9 p-0 sm:px-4" variant="outline">
              <IconSortAscending className="mr-0 min-h-4 min-w-4 max-w-4 sm:mr-2" />
              <span className="hidden sm:inline-block">Sort</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href={{ query: { ...searchParams, sort: "nameAZ" } }}>
              <DropdownMenuCheckboxItem
                checked={searchParams.sort === "nameAZ"}
              >
                Name (AZ)
              </DropdownMenuCheckboxItem>
            </Link>
            <Link href={{ query: { ...searchParams, sort: "nameZA" } }}>
              <DropdownMenuCheckboxItem
                checked={searchParams.sort === "nameZA"}
              >
                Name (ZA)
              </DropdownMenuCheckboxItem>
            </Link>
            <Link href={{ query: { ...searchParams, sort: "dateAZ" } }}>
              <DropdownMenuCheckboxItem
                checked={searchParams.sort === "dateAZ"}
              >
                Date (AZ)
              </DropdownMenuCheckboxItem>
            </Link>
            <Link href={{ query: { ...searchParams, sort: "dateZA" } }}>
              <DropdownMenuCheckboxItem
                checked={searchParams.sort === "dateZA"}
              >
                Date (ZA)
              </DropdownMenuCheckboxItem>
            </Link>
            <Link href={{ query: { ...searchParams, sort: "sourceAZ" } }}>
              <DropdownMenuCheckboxItem
                checked={searchParams.sort === "sourceAZ"}
              >
                Source (AZ)
              </DropdownMenuCheckboxItem>
            </Link>
            <Link href={{ query: { ...searchParams, sort: "sourceZA" } }}>
              <DropdownMenuCheckboxItem
                checked={searchParams.sort === "sourceZA"}
              >
                Source (ZA)
              </DropdownMenuCheckboxItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DashboardList items={items} />
    </div>
  );
}
