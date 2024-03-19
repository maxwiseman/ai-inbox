import { Suspense } from "react";

import { Spinner } from "@ai-inbox/ui/spinner";

import { DashboardList } from "~/app/_components/dashboard-list";
import { getRssData } from "~/app/example-data";

export default async function Page(): Promise<React.ReactElement> {
  const rssData = await getRssData();

  return (
    <div className="relative max-w-full p-8">
      <Suspense
        fallback={
          <div className="absolute inset-0 flex flex-row items-center justify-center gap-2 text-muted-foreground">
            <Spinner />
            Loading...
          </div>
        }
      >
        <DashboardList rssData={rssData} />
      </Suspense>
    </div>
  );
}
