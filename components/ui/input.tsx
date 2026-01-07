import type * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.ComponentProps<"input"> & {
  error?: string;
  description?: string;
  required?: boolean;
};

function Input({
  className,
  type,
  error,
  description,
  required,
  id,
  ...props
}: InputProps) {
  const errorId = error && id ? `${id}-error` : undefined;
  const descriptionId = description && id ? `${id}-description` : undefined;
  const ariaDescribedBy = [descriptionId, errorId].filter(Boolean).join(" ");

  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        data-slot="input"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={ariaDescribedBy || undefined}
        aria-required={required ? "true" : undefined}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          "high-contrast:bg-surface-container-low high-contrast:border-2 high-contrast:border-foreground high-contrast:text-foreground high-contrast:placeholder:text-muted-foreground high-contrast:focus-visible:border-primary high-contrast:focus-visible:ring-primary",
          className,
        )}
        {...props}
      />
      {description && !error && (
        <p id={descriptionId} className="mt-1.5 text-xs text-muted-foreground">
          {description}
        </p>
      )}
      {error && (
        <p
          id={errorId}
          className="mt-1.5 text-xs text-destructive"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export { Input };
