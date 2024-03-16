import { Separator } from "@ai-inbox/ui/separator";

export function PageHeader({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        {children}
      </h1>
      <Separator className="my-4 mb-8" />
    </>
  );
}
