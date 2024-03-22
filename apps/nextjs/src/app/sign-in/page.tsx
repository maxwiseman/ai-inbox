import type { Metadata } from "next";

import { Badge } from "@ai-inbox/ui/badge";

import { UnsplashImage } from "./image";
import { SignIn } from "./sign-in";

export const metadata: Metadata = {
  title: `Sign In - AI Inbox`,
};

export default async function LoginPage(): Promise<React.ReactElement> {
  return (
    <div className="flex min-h-screen max-w-[100vw] flex-row">
      <div className="flex max-w-[100vw] grow flex-col items-center justify-center rounded-lg p-8 lg:min-w-[500px]">
        <div className="flex min-h-max max-w-[400px] flex-col gap-0">
          <h1 className="mb-5 mt-0 text-4xl font-bold leading-tight">
            Welcome back to{" "}
            <span className="flex items-center gap-2">
              AI Inbox<Badge variant="secondary">Beta</Badge>
            </span>
          </h1>
          <p className="text-muted-foreground">
            Let&lsquo;s get you signed in. Please enter your details. If you
            don&lsquo;t have an account, you can make one.
          </p>
        </div>
        <div className="mt-8 min-h-max w-[min(100%,400px)]">
          <SignIn />
        </div>
      </div>
      <UnsplashImage className="relative hidden max-h-[100%] w-0 lg:block lg:w-[75vw]" />
    </div>
  );
}
