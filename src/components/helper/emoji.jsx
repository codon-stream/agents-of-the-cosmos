const Emoji = ({ label, children }) => {
  return (
    <span role="img" aria-hidden={label ? null : true} aria-label={label}>
      {children}
    </span>
  );
};

Emoji.displayName = "Emoji";

export default Emoji;
