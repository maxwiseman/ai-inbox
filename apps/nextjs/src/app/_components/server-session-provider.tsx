"use client";

import type { SessionProviderProps } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export function ServerSessionProvider(
  props: SessionProviderProps,
): React.ReactElement {
  return <SessionProvider {...props} />;
}
