"use client"

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";
import { Input, InputProps } from "./Input";

interface PasswordInputProps extends Omit<InputProps, "type"> {
  showPasswordToggle?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, showPasswordToggle = true, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    if (!showPasswordToggle) {
      return <Input {...props} type="password" ref={ref} className={className} />;
    }

    return (
      <div className="relative">
        <Input
          {...props}
          type={showPassword ? "text" : "password"}
          ref={ref}
          className={cn("pr-10", className)}
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
