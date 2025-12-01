type StatCardProps = {
  label: string;
  value: string;
  className?: string;
};

export function StatCard({ label, value, className = "" }: StatCardProps) {
  return (
    <div className={`space-y-1 sm:space-y-2 ${className}`}>
      <p className="text-xs sm:text-sm md:text-[14px] text-[#7A1D32]">
        {label}
      </p>
      <p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #1B1B1B",
        }}
      >
        {value}
      </p>
    </div>
  );
}

