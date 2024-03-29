"use client";

import { useEffect, useState } from "react";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@ai-inbox/ui/resizable";
import { ScrollArea } from "@ai-inbox/ui/scroll-area";

export default function Layout({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}): React.ReactElement {
  const dashboardSegment = useSelectedLayoutSegment("details");
  const pathname = usePathname();

  // const isMobile = useMediaQuery("(max-width: 640px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 750) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile && pathname.startsWith("/details")) return <>{details}</>;

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-h-[calc(100vh-3.5rem)]"
    >
      <ResizablePanel
        className="h-full"
        defaultSize={
          (
            isMobile
              ? pathname.startsWith("/details")
              : dashboardSegment !== "__DEFAULT__"
          )
            ? 50
            : 100
        }
      >
        <ScrollArea className="absolute h-[calc(100vh-3.5rem)]">
          {children}
        </ScrollArea>
      </ResizablePanel>
      {(
        isMobile
          ? pathname.startsWith("/details")
          : dashboardSegment !== "__DEFAULT__"
      ) ? (
        <>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={25} collapsible defaultSize={50}>
            <ScrollArea className="relative h-[calc(100vh-3rem)]">
              {details}
            </ScrollArea>
          </ResizablePanel>
        </>
      ) : null}
    </ResizablePanelGroup>
  );
}
