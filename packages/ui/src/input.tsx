// import type { Props } from "react-input-mask";
import * as React from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

// import InputMask from "react-input-mask";

import { cn } from ".";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="relative">
        <input
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pr-9 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          type={showPassword ? "text" : "password"}
          {...props}
        />
        <div className="absolute right-0 top-1/2 mr-2 flex -translate-y-1/2 cursor-pointer items-center text-muted-foreground">
          {showPassword ? (
            <IconEyeOff
              className="h-6 w-6 rounded-sm p-1 hover:bg-muted/75"
              onClick={() => {
                setShowPassword(false);
              }}
            />
          ) : (
            <IconEye
              className="h-6 w-6 rounded-sm p-1 hover:bg-muted/75"
              onClick={() => {
                setShowPassword(true);
              }}
            />
          )}
        </div>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { Input, PasswordInput };
