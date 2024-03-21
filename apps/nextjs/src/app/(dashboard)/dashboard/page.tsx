import { DashboardList } from "~/app/_components/dashboard-list";
import { getRssData } from "~/app/example-data";

export const revalidate = 3600;

export default async function Page(): Promise<React.ReactElement> {
  const rssData = await getRssData();

  return (
    <div className="relative max-w-full p-2 md:p-8">
      <DashboardList rssData={rssData} />
    </div>
  );
}
