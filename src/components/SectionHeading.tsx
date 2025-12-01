import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string | ReactNode;
  align?: "center" | "left";
  eyebrowClassName?: string;
  titleClassName?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  eyebrowClassName = "",
  titleClassName = "",
  className = "",
}: SectionHeadingProps) {
  const defaultEyebrowClass =
    "text-xs sm:text-sm font-semibold uppercase tracking-[0.6em] sm:tracking-[0.8em] text-[#8CA5C9]";
  const defaultTitleClass =
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F3050]";

  return (
    <div
      className={`flex flex-col gap-2 sm:gap-3 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <p className={`${defaultEyebrowClass} ${eyebrowClassName}`}>{eyebrow}</p>
      <h2 className={`${defaultTitleClass} ${titleClassName}`}>{title}</h2>
    </div>
  );
}

