import { cn } from "@/lib/utils";

const baseHeadingClasses = "tracking-tight text-foreground";

const H1 = ({ className, asDisplay = false, ...props }) => {
  const Comp = asDisplay ? "p" : "h1";

  return (
    <Comp
      className={cn(
        `${baseHeadingClasses} text-4xl font-extrabold lg:text-5xl`,
        className
      )}
      role={asDisplay ? "heading" : undefined}
      aria-level={asDisplay ? 1 : undefined}
      {...props}
    />
  );
};

H1.displayName = "H1";

const H2 = ({ className, asDisplay = false, ...props }) => {
  const Comp = asDisplay ? "p" : "h2";

  return (
    <Comp
      className={cn(
        `${baseHeadingClasses} text-3xl font-semibold`,
        className
      )}
      role={asDisplay ? "heading" : undefined}
      aria-level={asDisplay ? 2 : undefined}
      {...props}
    />
  );
};

H2.displayName = "H2";

const H3 = ({ className, asDisplay = false, ...props }) => {
  const Comp = asDisplay ? "p" : "h3";

  return (
    <Comp
      className={cn(
        `${baseHeadingClasses} text-2xl font-semibold`,
        className
      )}
      role={asDisplay ? "heading" : undefined}
      aria-level={asDisplay ? 3 : undefined}
      {...props}
    />
  );
};

H3.displayName = "H3";

const H4 = ({ className, asDisplay = false, ...props }) => {
  const Comp = asDisplay ? "p" : "h4";

  return (
    <Comp
      className={cn(
        `${baseHeadingClasses} text-xl font-semibold`,
        className
      )}
      role={asDisplay ? "heading" : undefined}
      aria-level={asDisplay ? 4 : undefined}
      {...props}
    />
  );
};

H4.displayName = "H4";

const H5 = ({ className, asDisplay = false, ...props }) => {
  const Comp = asDisplay ? "p" : "h5";

  return (
    <Comp
      className={cn(
        `${baseHeadingClasses} text-lg font-semibold`,
        className
      )}
      role={asDisplay ? "heading" : undefined}
      aria-level={asDisplay ? 5 : undefined}
      {...props}
    />
  );
};

H5.displayName = "H5";

const H6 = ({ className, asDisplay = false, ...props }) => {
  const Comp = asDisplay ? "p" : "h6";

  return (
    <Comp
      className={cn(
        `${baseHeadingClasses} text-base font-semibold`,
        className
      )}
      role={asDisplay ? "heading" : undefined}
      aria-level={asDisplay ? 6 : undefined}
      {...props}
    />
  );
};

H6.displayName = "H6";

export { H1, H2, H3, H4, H5, H6 };
