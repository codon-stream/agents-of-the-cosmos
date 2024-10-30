const Link = ({
  className,
  href,
  isExternal = false,
  isNewTab = false,
  children,
  ...props
}) => {
  const rel = isExternal || !props.rel ? "nofollow noopener" : props.rel;
  const target = isNewTab || !props.target ? "_blank" : props.target;

  return (
    <a className={className} href={href} rel={rel} target={target} {...props}>
      {children}
    </a>
  );
};

Link.displayName = "Link";

export default Link;
