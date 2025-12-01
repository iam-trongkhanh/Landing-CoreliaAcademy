import { ProgramCard } from "./cards/ProgramCard";

type Program = {
  name: string;
  icon: string;
  description: string;
};

type ProgramsGridProps = {
  programs: Program[];
};

export function ProgramsGrid({ programs }: ProgramsGridProps) {
  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {programs.map((program) => (
        <ProgramCard
          key={program.name}
          name={program.name}
          icon={program.icon}
          description={program.description}
        />
      ))}
    </div>
  );
}
