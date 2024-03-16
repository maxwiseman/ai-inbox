import type { Metadata, Viewport } from "next";
import { cn } from "@ai-inbox/ui";
import { ThemeProvider, ThemeToggle } from "@ai-inbox/ui/theme";
import { Toaster } from "@ai-inbox/ui/toast";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

import { IBM_Plex_Mono } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://inbox.maxwiseman.io"
      : "http://localhost:3000",
  ),
  title: "AI Inbox",
  description: "An AI powered inbox for your everything you need",
  openGraph: {
    title: "AI Inbox",
    description: "An AI powered inbox for your everything you need",
    url: "https://github.com/maxwiseman/ai-inbox",
    siteName: "AI Inbox",
  },
  twitter: {
    card: "summary_large_image",
    site: "AI Inbox",
    creator: "maxwiseman",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const Mono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout(props: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-mono text-foreground antialiased",
          // GeistSans.variable,
          // GeistMono.variable,
          Mono.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
