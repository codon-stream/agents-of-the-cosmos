import { cn } from "@/lib/utils";

const Currency = ({
  className,
  amount,
  currency = "USD",
  locale = "en-US",
  centsDeemphasize = false,
  centsSuperscript = false,
  ...props
}) => {
  const formattedAmount = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);

  const [whole, cents] = formattedAmount.split(/(\.\d{2})$/);

  return (
    <span className={cn("text-foreground", className)} {...props}>
      {whole}
      {cents && (
        <span className={cn({ "text-muted-foreground": centsDeemphasize })}>
          {centsSuperscript ? (
            <sup className="relative -top-1">{cents}</sup>
          ) : (
            cents
          )}
        </span>
      )}
    </span>
  );
};

Currency.displayName = "Currency";

export default Currency;
