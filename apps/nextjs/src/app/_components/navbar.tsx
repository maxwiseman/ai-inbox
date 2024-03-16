"use client";

// import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@ai-inbox/ui";
import { Badge } from "@ai-inbox/ui/badge";

// import { useSession } from "next-auth/react";

// import { UserButton } from "../_components/ui/user-button";
// import { Search } from "./client";

export function Navbar(): React.ReactElement {
  const pathname = usePathname();
  // const router = useRouter();
  // const session = useSession();

  // useEffect(() => {
  //   if (session.status === "unauthenticated") {
  //     router.replace("/");
  //   }
  // }, [router, session.status]);

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-center border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <nav className="flex w-full items-center justify-between px-8">
        <div className="flex flex-row items-center justify-start gap-6">
          <Link className="flex items-center space-x-3" href="/dashboard">
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
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end gap-3">
          {/* <Search className="hidden sm:flex" />
          <UserButton /> */}
        </div>
      </nav>
    </header>
  );
}
