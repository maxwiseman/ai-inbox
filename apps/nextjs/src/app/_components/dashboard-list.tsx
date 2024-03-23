"use client";

import { useState } from "react";
import { Button } from "@ai-inbox/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@ai-inbox/ui/dropdown-menu";
import { Input } from "@ai-inbox/ui/input";
import { IconFilter, IconSortAscending } from "@tabler/icons-react";

import type { NewsFeed } from "../example-data";
import { DashboardItem } from "~/app/_components/dashboard-item";
import { feeds } from "~/app/feeds";

export function DashboardList({
  rssData,
}: {
  rssData: NewsFeed;
}): React.ReactElement {
  const [searchString, setSearchString] = useState("");
  return (
    <>
      <div className="mb-6 flex items-center gap-2">
        <Input
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          placeholder="Search..."
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-9 min-w-9 p-0 sm:px-4" variant="outline">
              <IconFilter className="mr-0 min-h-4 min-w-4 max-w-4 sm:mr-2" />
              <span className="hidden sm:inline-block">Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {feeds.map((source) => (
              <DropdownMenuCheckboxItem key={source.title}>
                {source.title}
              </DropdownMenuCheckboxItem>
            ))}
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
            <DropdownMenuCheckboxItem>Name (AZ)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Name (ZA)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Date (AZ)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Date (ZA)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Source (AZ)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Source (ZA)</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex w-full flex-col gap-2">
        {rssData.items.map((item) =>
          item.title?.toLowerCase().includes(searchString.toLowerCase()) ? (
            <DashboardItem key={item.id} item={item} />
          ) : null,
        )}
      </div>
    </>
  );
}
