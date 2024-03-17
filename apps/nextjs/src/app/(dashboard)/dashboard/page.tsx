import { DashboardItem } from "~/app/_components/dashboard-item";
import { PageHeader } from "~/app/_components/page-header";
import { exampleData } from "~/app/example-data";

export default function Page(): React.ReactElement {
  return (
    <div className="p-8">
      <PageHeader>Dashboard</PageHeader>
      <div className="flex flex-col gap-2">
        {exampleData.map((item) => (
          <DashboardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
