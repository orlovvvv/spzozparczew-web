import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden high-contrast:focus-visible:ring-primary",
  {
    variants: {
      variant: {
        default:
          "border-white/20 bg-primary backdrop-blur-md text-primary-foreground shadow-md [a&]:hover:bg-primary/90 dark:text-white dark:border-white/30 high-contrast:bg-primary high-contrast:backdrop-blur-none high-contrast:border-2 high-contrast:border-primary high-contrast:text-primary-foreground",
        secondary:
          "border-white/30 bg-white/60 backdrop-blur-xl text-foreground shadow-md [a&]:hover:bg-white/80 dark:bg-white/10 dark:border-white/20 dark:text-foreground high-contrast:bg-surface-container-high high-contrast:backdrop-blur-none high-contrast:border-2 high-contrast:border-foreground high-contrast:text-foreground",
        destructive:
          "border-white/20 bg-destructive/80 backdrop-blur-md text-white shadow-md [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:border-white/30 high-contrast:bg-destructive high-contrast:backdrop-blur-none high-contrast:border-2 high-contrast:border-destructive high-contrast:text-white",
        outline:
          "bg-white/60 backdrop-blur-xl text-foreground shadow-md [a&]:hover:bg-white/80 [a&]:hover:text-foreground dark:bg-white/10 dark:border-white/20 high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none high-contrast:border-2 high-contrast:border-foreground high-contrast:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
