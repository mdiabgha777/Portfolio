import React from "react";

export default function Button({ variant = "primary", size = "md", className = "", href, ...props }) {
  const base = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 shadow-soft",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80",
    outline: "border-2 border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]",
    ghost: "bg-transparent hover:bg-[var(--muted)] text-[var(--foreground)]",
    hero: "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-card hover:shadow-hover hover:-translate-y-0.5",
  };

  const sizeStyles = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base",
    xl: "h-14 px-10 text-base",
  };

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // Render as <a> if href exists
  if (href) {
    return (
      <a href={href} className={`${classes} inline-flex`} {...props}>
        {props.children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
}