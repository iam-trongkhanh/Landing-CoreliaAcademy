type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.8em] text-[#8CA5C9]">
        {eyebrow}
      </p>
      <h2 className="text-5xl font-semibold leading-tight text-[#1F3050]">
        {title}
      </h2>
    </div>
  );
}
