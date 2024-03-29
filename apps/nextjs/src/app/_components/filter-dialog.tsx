"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IconFilter, IconReload } from "@tabler/icons-react";

import { Button } from "@ai-inbox/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogFooter,
  // ResponsiveDialogHeader,
  // ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@ai-inbox/ui/responsive-dialog";

import { FeedSelector } from "./feed-selector";

export function FilterDialog(): React.ReactElement {
  const [selected, setSelected] = useState<string[]>([]);
  const params = useSearchParams();
  const urlParams: Record<string, string> = {};
  Array.from(params.entries()).forEach((item) => {
    urlParams[item[0]] = item[1];
  });

  useEffect(() => {
    setSelected(JSON.parse(params.get("filter") ?? "[]") as string[]);
  }, [params]);

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button className="h-9 min-w-9 p-0 sm:px-4" variant="outline">
          <IconFilter className="mr-0 min-h-4 min-w-4 max-w-4 sm:mr-2" />
          <span className="hidden sm:inline-block">Filter</span>
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent
        dialogClassName="max-h-[80vh]"
        drawerClassName="max-h-[90vh]"
      >
        {/* <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>Filter Sources</ResponsiveDialogTitle>
        </ResponsiveDialogHeader> */}
        <div className="relative h-full min-h-[calc(80vh-6.25rem)] w-full">
          <div className="absolute inset-0">
            <FeedSelector
              className="h-full"
              selected={selected}
              onSelectedChange={setSelected}
            />
          </div>
        </div>
        <ResponsiveDialogFooter className="flex w-full flex-row flex-nowrap">
          <Button
            className="aspect-square"
            variant="outline"
            size="icon"
            onClick={() => {
              setSelected([]);
            }}
            icon={<IconReload />}
          />
          <ResponsiveDialogClose className="grow" asChild>
            <Link
              href={{
                query: {
                  ...urlParams,
                  filter: JSON.stringify(selected),
                },
                pathname: "/dashboard",
              }}
            >
              <Button className="h-full w-full">Save Filters</Button>
            </Link>
          </ResponsiveDialogClose>
        </ResponsiveDialogFooter>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
