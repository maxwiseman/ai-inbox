import { DashboardItem } from "~/app/_components/dashboard-item";
import { PageHeader } from "~/app/_components/page-header";
import { GetNytData } from "~/app/example-data";

export default async function Page(): Promise<React.ReactElement> {
  const nytData = await GetNytData();

  return (
    <div className="relative max-w-full p-8">
      <PageHeader>Dashboard</PageHeader>
      <div className="flex w-full flex-col gap-2">
        {/* {exampleData.map((item) => (
          <DashboardItem key={item.id} item={item} />
        ))} */}
        {nytData.map((item) => (
          <DashboardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
