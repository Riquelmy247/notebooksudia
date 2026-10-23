export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
  ...props
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const extraRel = target === "_blank" ? "noopener noreferrer" : rel;

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={extraRel} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
