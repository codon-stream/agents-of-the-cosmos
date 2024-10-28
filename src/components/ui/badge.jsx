import { forwardRef } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        assertive:
          "border-transparent bg-assertive text-assertive-foreground hover:bg-assertive/80",
        informative:
          "border-transparent bg-informative text-informative-foreground hover:bg-informative/80",
        preventive:
          "border-transparent bg-preventive text-preventive-foreground hover:bg-preventive/80",
        imperative:
          "border-transparent bg-imperative text-imperative-foreground hover:bg-imperative/80",
        promotive:
          "border-transparent bg-promotive text-promotive-foreground hover:bg-promotive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { Badge, badgeVariants };
