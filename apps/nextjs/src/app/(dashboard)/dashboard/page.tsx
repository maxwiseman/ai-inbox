import type { DashboardItem } from "~/app/example-data";
import { DashboardList } from "~/app/_components/dashboard-list";
import { getRssData } from "~/app/example-data";

export const revalidate = 3600;

export default async function Page(): Promise<React.ReactElement> {
  const rssData = await getRssData();

  const items: DashboardItem[] | undefined = rssData.items?.map((item) => ({
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
      {items !== undefined ? <DashboardList items={items} /> : null}
    </div>
  );
}
