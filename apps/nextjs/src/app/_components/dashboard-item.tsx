import { IconMail, IconNews, IconSettings } from "@tabler/icons-react";

import { Button } from "@ai-inbox/ui/button";

export function DashboardItem({ item }: { item: Item }): React.ReactElement {
  // eslint-disable-next-line react/jsx-no-useless-fragment -- i need it to be a react node
  let icon = <></>;
  switch (item.type) {
    case "email":
      icon = <IconMail size={20} className="shrink-0" />;
      break;
    case "news":
      icon = <IconNews size={20} className="shrink-0" />;
      break;
    case "other":
      icon = <IconSettings size={20} className="shrink-0" />;
  }

  return (
    <Button
      variant="ghost"
      className="max-w-full items-center justify-start gap-2 p-1 px-1"
    >
      {icon}
      <span className="line-clamp-1 min-w-max">{item.title}</span>
      <span className="line-clamp-1 text-wrap text-sm text-muted-foreground">
        {item.description}
      </span>
    </Button>
  );
}

export interface Item {
  title: string;
  description: string;
  id: string;
  type: "email" | "news" | "other";
}
