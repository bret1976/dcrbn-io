import Link from "next/link";

const VARIANTS = {
  primary:
    "inline-flex min-h-11 items-center justify-center border border-white/25 px-6 py-3 text-[14px] font-light text-white no-underline transition duration-200 hover:border-white/60",
  secondary:
    "inline-flex min-h-11 items-center justify-center border border-white/25 px-6 py-3 text-[14px] font-light text-white no-underline transition duration-200 hover:border-white/60",
  ghost:
    "inline-flex min-h-11 items-center text-[11px] tracking-[0.18em] text-white/70 uppercase no-underline transition duration-200 hover:text-white sm:tracking-[0.2em]",
} as const;

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  const cls = `${VARIANTS[variant]} ${className}`;
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={cls} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
