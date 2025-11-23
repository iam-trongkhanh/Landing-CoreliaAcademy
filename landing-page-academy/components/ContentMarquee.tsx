type ContentMarqueeProps = {
  children: React.ReactNode;
  borderColorClass?: string;
  itemClassName?: string;
  className?: string;
};

export function ContentMarquee({
  children,
  borderColorClass = "border-white",
  itemClassName = "",
  className = "",
}: ContentMarqueeProps) {
  return (
    <div
      className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y ${borderColorClass} py-6 sm:py-8 ${className}`}
    >
      <div className="logo-marquee flex items-center gap-4 sm:gap-6 md:gap-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={`shrink-0 ${itemClassName}`}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
