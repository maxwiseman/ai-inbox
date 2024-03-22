"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

import { Button } from "@ai-inbox/ui/button";

export function SignIn(): React.ReactElement {
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackUrl");
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [router, session.status]);

  return (
    <div className="flex w-full flex-col items-center justify-between gap-5">
      <Button
        className="h-12 w-full"
        disabled
        size="icon"
        variant="outline"
        // onClick={() => {}}
      >
        <Image
          alt="Apple Logo"
          className="mr-2 h-5 w-5 object-contain dark:invert"
          height={20}
          src="/logos/apple.svg"
          width={20}
        />{" "}
        Sign in with Apple
      </Button>
      <Button
        className="h-12 w-full"
        onClick={async () => {
          await signIn("github", {
            redirect: true,
            callbackUrl: callbackURL ?? "/dashboard",
          });
        }}
        size="icon"
        variant="outline"
      >
        <Image
          alt="Github Logo"
          className="mr-2 h-5 w-5 object-contain dark:invert"
          height={20}
          src="/logos/github.svg"
          width={20}
        />{" "}
        Sign in with GitHub
      </Button>
      <Button
        className="h-12 w-full"
        onClick={async () => {
          await signIn("google", {
            redirect: true,
            callbackUrl: callbackURL ?? "/dashboard",
          });
        }}
        size="icon"
        variant="outline"
      >
        <Image
          alt="Google Logo"
          className="mr-2 h-5 w-5 object-contain dark:invert"
          height={20}
          src="/logos/google.svg"
          width={20}
        />{" "}
        Sign in with Google
      </Button>
    </div>
  );
}
