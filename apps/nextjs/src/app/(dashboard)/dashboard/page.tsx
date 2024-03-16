import { DashboardItem } from "~/app/_components/dashboard-item";
import { PageHeader } from "~/app/_components/page-header";

export default function Page(): React.ReactElement {
  return (
    <div>
      <PageHeader>Dashboard</PageHeader>
      <div className="flex flex-col gap-2">
        <DashboardItem
          item={{
            title: "News Article",
            description:
              "Laboris deserunt veniam excepteur ex quis deserunt fugiat. Reprehenderit exercitation do reprehenderit adipisicing magna ut fugiat pariatur ut laboris ipsum reprehenderit velit. Nisi cupidatat consectetur nostrud adipisicing Lorem laboris reprehenderit culpa. Excepteur cillum est eu ex incididunt velit nisi quis non anim. Do sint adipisicing ea reprehenderit anim deserunt non.\nIn occaecat Lorem tempor laboris Lorem officia nisi tempor cillum laboris. Elit qui dolor veniam. Aliquip ullamco non ad quis excepteur commodo officia velit sint eu. Commodo incididunt fugiat adipisicing minim cupidatat eiusmod. Dolore sint velit adipisicing ex ex ullamco mollit occaecat do sunt do et. Consequat cupidatat excepteur eiusmod.",
            type: "news",
            id: "123",
          }}
        />
        <DashboardItem
          item={{
            title: "Email",
            description: "something",
            type: "email",
            id: "123",
          }}
        />
        <DashboardItem
          item={{
            title: "Other thing",
            description: "something",
            type: "other",
            id: "123",
          }}
        />
      </div>
    </div>
  );
}
