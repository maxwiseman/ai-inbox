"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { IconArrowRight } from "@tabler/icons-react";

import { cn } from "@ai-inbox/ui";
import { Badge } from "@ai-inbox/ui/badge";
import { LinkButton } from "@ai-inbox/ui/button";
import { Input } from "@ai-inbox/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@ai-inbox/ui/popover";

import { UserButton } from "./user-button";

// import { useEffect } from "react";
// import { useSession } from "next-auth/react";

// import { UserButton } from "../_components/ui/user-button";
// import { Search } from "./client";

export function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const params = useSearchParams();
  const urlParams: Record<string, string> = {};
  Array.from(params.entries()).forEach((item) => {
    urlParams[item[0]] = item[1];
  });
  // const router = useRouter();
  // const session = useSession();

  // useEffect(() => {
  //   if (session.status === "unauthenticated") {
  //     router.replace("/");
  //   }
  // }, [router, session.status]);

  const [inputUrl, setInputUrl] = useState("");

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-center border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <nav className="flex w-full items-center justify-between px-8">
        <div className="flex flex-row items-center justify-start gap-6">
          <Link className="flex items-center sm:space-x-3" href="/dashboard">
            <span className="hidden text-2xl font-black sm:block">
              AI_INBOX
            </span>
            <Badge className="h-min cursor-pointer rounded-none p-1 text-xs leading-3 hover:bg-primary">
              BETA
            </Badge>
          </Link>
          <Link
            className={cn(
              "text-sm text-foreground/60 transition-colors hover:text-foreground/80",
              {
                "text-foreground": pathname.startsWith("/dashboard"),
              },
            )}
            href={{ pathname: "/dashboard", query: urlParams }}
          >
            Dashboard
          </Link>
          <Popover>
            <PopoverTrigger
              className={cn(
                "cursor-pointer text-sm text-foreground/60 transition-colors hover:text-foreground/80",
              )}
            >
              Open URL
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex items-center gap-2">
                <Input
                  onChange={(e) => {
                    setInputUrl(e.target.value);
                  }}
                  placeholder="URL"
                />
                <LinkButton
                  href={{
                    pathname: `/details/news/${encodeURIComponent(inputUrl)}`,
                    query: urlParams,
                  }}
                  className="aspect-square"
                  size="icon"
                  icon={<IconArrowRight />}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-row items-center justify-end gap-3">
          {/* <Search className="hidden sm:flex" /> */}
          <UserButton />
        </div>
      </nav>
    </header>
  );
}
