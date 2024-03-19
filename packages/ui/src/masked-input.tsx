import type { Props } from "react-input-mask";
import * as React from "react";
import InputMask from "react-input-mask";

import type { InputProps } from "./input";
import { cn } from ".";

function MaskedInput({
  className,
  ...props
}: InputProps & Props): React.ReactElement {
  return (
    <InputMask
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
MaskedInput.displayName = "MaskedInput";

export { MaskedInput };
