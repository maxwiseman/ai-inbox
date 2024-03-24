import { Spinner } from "@ai-inbox/ui/spinner";

export default function Loading(): React.ReactElement {
  return (
    <div className="absolute inset-0 flex flex-row items-center justify-center gap-2 text-muted-foreground">
      <Spinner />
      Loading...
    </div>
  );
}
