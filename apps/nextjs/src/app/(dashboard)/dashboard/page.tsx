import { Button } from "@ai-inbox/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@ai-inbox/ui/dropdown-menu";
import { Input } from "@ai-inbox/ui/input";
import { IconFilter, IconSortAscending } from "@tabler/icons-react";

import { DashboardItem } from "~/app/_components/dashboard-item";
import { getRssData } from "~/app/example-data";
import { feeds } from "~/app/feeds";

export default async function Page(): Promise<React.ReactElement> {
  const rssData = await getRssData();

  return (
    <div className="relative max-w-full p-8">
      <div className="mb-6 flex items-center gap-2">
        <Input placeholder="Search..." />
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
        {/* {exampleData.map((item) => (
          <DashboardItem key={item.id} item={item} />
        ))} */}
        {rssData.map((item) => (
          <DashboardItem key={item.id} item={item} />
        ))}
        di
      </div>
    </div>
  );
}
