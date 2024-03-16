import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@ai-inbox/ui/theme";
import { Toaster } from "@ai-inbox/ui/toast";

// import { GeistSans } from "geist/font/sans";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

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

export default function RootLayout(props: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-mono text-foreground antialiased ${GeistMono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
