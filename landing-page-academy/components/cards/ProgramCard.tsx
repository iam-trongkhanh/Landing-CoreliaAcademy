import Image from "next/image";
import Link from "next/link";

type ProgramCardProps = {
  name: string;
  icon: string;
  description: string;
  href?: string;
};

export function ProgramCard({
  name,
  icon,
  description,
  href = "#",
}: ProgramCardProps) {
  return (
    <div className="group relative flex min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex-col overflow-hidden border border-[#641320] bg-white p-4 sm:p-6 md:p-8 transition-all duration-500 hover:border-transparent hover:bg-[#651224]">
      <div className="relative z-10 flex flex-1 flex-col space-y-3 sm:space-y-4 text-[#1B1B1B] transition-colors duration-500 group-hover:text-white">
        {/* Icon */}
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center">
          <Image
            src={icon}
            alt={`${name} icon`}
            width={48}
            height={48}
            className="icon-filter transition-all duration-500 w-full h-full"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold">{name}</h3>

        {/* Description */}
        <p className="flex-1 text-sm sm:text-base leading-relaxed text-[#444C5C] group-hover:text-[#F6DCE3]">
          {description}
        </p>

        {/* Button */}
        <Link
          href={href}
          className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#641320] transition-colors duration-500 group-hover:text-white"
        >
          READ MORE
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
