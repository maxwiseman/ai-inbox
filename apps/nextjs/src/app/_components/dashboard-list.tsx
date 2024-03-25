"use client";

import { useQueryState } from "nuqs";

import type { DashboardItem as DashboardItemType } from "../example-data";
import { DashboardItem } from "~/app/_components/dashboard-item";

export function DashboardList({
  items,
}: {
  items: DashboardItemType[];
}): React.ReactElement {
  const [searchValue] = useQueryState("query");
  return (
    <div className="flex w-full flex-col gap-2">
      {items.map((item) =>
        item.title.toLowerCase().includes((searchValue ?? "").toLowerCase()) ? (
          <DashboardItem key={item.id} item={item} />
        ) : null,
      )}
    </div>
  );
}
