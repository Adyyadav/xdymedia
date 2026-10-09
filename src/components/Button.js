import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200";

const variants = {
  primary:
    "bg-gradient-to-br from-white via-silver-2 to-silver-3 text-black shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)] hover:scale-[1.03] hover:shadow-[0_14px_36px_-10px_rgba(255,255,255,0.45)]",
  ghost:
    "glass text-white hover:border-white/30 hover:bg-white/10",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
