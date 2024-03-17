"use client";

import { usePathname } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@ai-inbox/ui/resizable";
import { ScrollArea } from "@ai-inbox/ui/scroll-area";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Layout({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}): React.ReactElement {
  const pathname = usePathname();

  if (useMediaQuery("(max-width: 750px)") && pathname.startsWith("/details"))
    return <>{details}</>;

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-h-[calc(100vh-3.5rem)]"
    >
      <ResizablePanel defaultSize={pathname.startsWith("/details") ? 50 : 100}>
        <ScrollArea
          style={{
            maskImage: `linear-gradient(#000,#000,transparent 0,#000 10px,#000 calc(100% - 10px),transparent)`,
          }}
          className="relative h-[calc(100vh-7rem)]"
        >
          {children}
        </ScrollArea>
      </ResizablePanel>
      {pathname.startsWith("/details") ? (
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
