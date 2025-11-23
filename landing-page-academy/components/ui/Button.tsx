import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#651224] text-white border border-[#1B1B1B] hover:bg-black transition-colors duration-300",
  secondary: "bg-[#822333] text-white hover:bg-[#9a2a3f] transition-colors",
  outline:
    "border border-[#1B1B1B] text-[#1B1B1B] bg-transparent hover:bg-black hover:text-white transition-colors duration-300",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 sm:px-6 py-2 sm:py-2.5 text-xs",
  md: "px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm",
  lg: "px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-xs sm:text-sm",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  showArrow = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 sm:gap-3 font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] transition-all duration-300";
  const widthStyle = fullWidth ? "w-full sm:w-auto" : "";

  // Combine all styles, className comes last to allow overrides
  const combinedClassName =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      {showArrow && (
        <span
          aria-hidden="true"
          className="relative z-10 transition-all duration-300 transform -rotate-45 group-hover:rotate-0 group-hover:text-white"
        >
          →
        </span>
      )}
      {(variant === "outline" || variant === "primary") && (
        <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group relative overflow-hidden ${combinedClassName}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative overflow-hidden ${combinedClassName}`}
    >
      {content}
    </button>
  );
}
