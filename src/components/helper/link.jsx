const Link = ({
  href,
  children,
  isExternal = false,
  isNewTab = false,
  ...props
}) => {
  return (
    <a
      href={href}
      rel={isExternal || !props.rel ? "noopener nofollow" : props.rel}
      target={isNewTab || !props.target ? "_blank" : props.target}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
