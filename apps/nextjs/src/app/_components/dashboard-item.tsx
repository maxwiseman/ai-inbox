"use client";

import { usePathname } from "next/navigation";
import { IconMail, IconNews, IconSettings } from "@tabler/icons-react";

import { LinkButton } from "@ai-inbox/ui/button";

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

  const pathname = usePathname();

  return (
    <LinkButton
      href={`/details/${item.id}`}
      variant={pathname.includes(`/details/${item.id}`) ? "secondary" : "ghost"}
      className="min-w-0 max-w-full shrink grow items-center justify-start gap-2 p-1 px-1"
    >
      {icon}
      <span className="line-clamp-1 w-0 min-w-0 max-w-max shrink grow-[999] overflow-hidden text-wrap text-left font-black">
        {item.title}
      </span>
      <span className="line-clamp-1 w-0 grow text-wrap text-left text-sm text-muted-foreground">
        {item.description}
      </span>
    </LinkButton>
  );
}

export type Item = {
  title: string;
  description: string;
  id: string;
} & (
  | { type: "news" | "other"; url: string }
  | { type: "email"; email: string }
);
