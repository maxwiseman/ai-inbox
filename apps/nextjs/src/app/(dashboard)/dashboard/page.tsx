import Link from "next/link";
import { Button } from "@ai-inbox/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ai-inbox/ui/dropdown-menu";
import { IconFilter, IconSortAscending } from "@tabler/icons-react";

import type { DashboardItem as DashboardItemType } from "~/app/example-data";
import { DashboardList } from "~/app/_components/dashboard-list";
import { getRssData } from "~/app/example-data";
import { SearchInput } from "./search-input";

export const revalidate = 3600;

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; sort?: string; filter?: string };
}): Promise<React.ReactElement> {
  const rssData = await getRssData();

  const items: DashboardItemType[] | undefined = rssData.items?.map((item) => ({
    title: item.title ?? "",
    id: item.id,
    contentSnippet: item.contentSnippet ?? "",
    icon: "",
    details: {
      type: "news",
      articleUrl: item.link ?? "",
      date: item.isoDate ?? "",
      source: rssData.title ?? "",
    },
  }));

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-9 min-w-9 p-0 sm:px-4" variant="outline">
              <IconFilter className="mr-0 min-h-4 min-w-4 max-w-4 sm:mr-2" />
              <span className="hidden sm:inline-block">Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href={{ query: { ...searchParams, filter: "subscribed" } }}>
              <DropdownMenuCheckboxItem
                checked={searchParams.filter?.includes("subscribed")}
              >
                Subscribed Feeds
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
            </Link>
            {/* {feeds.map((source) => (
              <DropdownMenuCheckboxItem key={source.title}>
                {source.title}
              </DropdownMenuCheckboxItem>
            ))} */}
          </DropdownMenuContent>
        </DropdownMenu>
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
      {items ? <DashboardList items={items} /> : null}
    </div>
  );
}
