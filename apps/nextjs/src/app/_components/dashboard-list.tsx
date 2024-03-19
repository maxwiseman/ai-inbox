"use client";

import { useState } from "react";
import { IconFilter, IconSortAscending } from "@tabler/icons-react";

import { Button } from "@ai-inbox/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@ai-inbox/ui/dropdown-menu";
import { Input } from "@ai-inbox/ui/input";

import type { Item } from "~/app/_components/dashboard-item";
import { DashboardItem } from "~/app/_components/dashboard-item";
import { feeds } from "~/app/feeds";

export function DashboardList({
  rssData,
}: {
  rssData: Item[];
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
            <Button variant="outline" icon={<IconFilter />}>
              Filter
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
            <Button variant="outline" icon={<IconSortAscending />}>
              Sort
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
        {rssData.map((item) =>
          item.title.toLowerCase().includes(searchString.toLowerCase()) ? (
            <DashboardItem key={item.id} item={item} />
          ) : null,
        )}
      </div>
    </>
  );
}
