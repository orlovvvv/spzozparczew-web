import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

interface BentoServiceCardProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  subtitle?: string;
  phone?: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ElementType;
  children: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("grid w-full auto-rows-auto grid-cols-3 gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // true glass effect - transparent + blur
      "bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg",
      // dark styles - darker glass
      "dark:bg-white/5 dark:border-white/10 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
      // high contrast styles - solid for accessibility
      "high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none high-contrast:border-2 high-contrast:border-foreground",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <p className="max-w-lg text-muted-foreground">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden",
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex",
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[.03] group-hover:dark:bg-primary/[.05] high-contrast:group-hover:bg-transparent" />
  </div>
);

const BentoServiceCard = ({
  title,
  subtitle,
  phone,
  className,
  background,
  Icon,
  children,
  ...props
}: BentoServiceCardProps) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col rounded-2xl",
      "bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg",
      "dark:bg-white/5 dark:border-white/10 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
      "high-contrast:bg-surface-container-low high-contrast:backdrop-blur-none high-contrast:border-2 high-contrast:border-foreground high-contrast:shadow-none",
      "hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transform-gpu transition-all duration-medium-2 ease-standard high-contrast:hover:shadow-none",
      className,
    )}
    {...props}
  >
    {background && (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl high-contrast:hidden">
        {background}
      </div>
    )}
    <div className="relative z-10 p-5">
      <div className="flex items-start gap-3 mb-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container dark:bg-primary/20 high-contrast:bg-primary text-on-primary-container dark:text-primary high-contrast:text-primary-foreground shrink-0 shadow-sm high-contrast:shadow-none transition-all duration-medium-2 ease-standard"
          aria-hidden="true"
        >
          <Icon className="h-6 w-6 stroke-[1.5]" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-foreground tracking-tight transition-colors duration-medium-2">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm font-light text-muted-foreground mt-0.5">
              {subtitle}
            </p>
          )}
          {phone && (
            <a
              href={`tel:+48${phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded high-contrast:text-primary high-contrast:underline"
            >
              {phone}
            </a>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/[.02] high-contrast:group-hover:bg-transparent rounded-2xl" />
  </div>
);

export { BentoCard, BentoGrid, BentoServiceCard };
