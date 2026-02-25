import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  const base = "btn";
  const variants = {
    primary: "btnPrimary",
    secondary: "btnSecondary",
    ghost: "btnGhost",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}