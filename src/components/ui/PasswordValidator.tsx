import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface PasswordRequirement {
  check: boolean;
  text: string;
}

interface PasswordValidatorProps {
  password: string;
  className?: string;
}

export function PasswordValidator({ password, className }: PasswordValidatorProps) {
  const requirements: PasswordRequirement[] = [
    { check: password.length >= 12, text: "At least 12 characters" },
    { check: /[a-z]/.test(password), text: "One lowercase letter" },
    { check: /[A-Z]/.test(password), text: "One uppercase letter" },
    { check: /[0-9]/.test(password), text: "One number" },
    { check: /[^a-zA-Z0-9]/.test(password), text: "One special character" },
  ];

  if (!password) return null;

  return (
    <div className={cn("space-y-1", className)}>
      {requirements.map((requirement, index) => (
        <div key={index} className="flex items-center text-xs">
          {requirement.check ? (
            <Check className="h-3 w-3 text-green-500 mr-2" />
          ) : (
            <X className="h-3 w-3 text-red-500 mr-2" />
          )}
          <span className={requirement.check ? "text-green-700" : "text-red-700"}>
            {requirement.text}
          </span>
        </div>
      ))}
    </div>
  );
}
