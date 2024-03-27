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
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes((searchValue ?? "").toLowerCase()),
  );
  return (
    <div className="flex w-full flex-col gap-2">
      {filteredItems.map((item, index) =>
        index < 50 ? <DashboardItem key={item.id} item={item} /> : null,
      )}
    </div>
  );
}
