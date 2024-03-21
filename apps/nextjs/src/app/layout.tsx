import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@ai-inbox/ui/theme";
import { Toaster } from "@ai-inbox/ui/toast";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://inbox.maxwiseman.io"
      : "http://localhost:3000",
  ),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AI Inbox",
    startupImage: { url: "/icons/icon_rounded.svg" },
    // startUpImage: [],
  },
  manifest: "/manifest.json",
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
    site: "@maxwiseman",
    creator: "@maxwiseman",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

export default function RootLayout(props: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-sans text-foreground antialiased ${GeistSans.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
