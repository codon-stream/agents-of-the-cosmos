const Emoji = ({ className, label, children, ...props }) => {
  return (
    <span
      className={className}
      role="img"
      aria-label={label}
      aria-hidden={!label}
      {...props}
    >
      {children}
    </span>
  );
};

Emoji.displayName = "Emoji";

export default Emoji;
