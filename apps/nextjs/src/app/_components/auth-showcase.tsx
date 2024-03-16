import { auth, signIn, signOut } from "@ai-inbox/auth";
import { Button } from "@ai-inbox/ui/button";
import { IconBrandDiscord } from "@tabler/icons-react";

export async function AuthShowcase(): Promise<React.ReactElement> {
  const session = await auth();

  if (!session) {
    return (
      <form>
        <Button
          variant="secondary"
          formAction={async () => {
            "use server";
            await signIn("discord");
          }}
          icon={<IconBrandDiscord />}
        >
          Sign in with Discord
        </Button>
      </form>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- It's better to be safe then sorry */}
        {session ? <span>Logged in as {session.user.name}</span> : null}
      </p>

      <form>
        <Button
          size="lg"
          formAction={async () => {
            "use server";
            await signOut();
          }}
        >
          Sign out
        </Button>
      </form>
    </div>
  );
}
