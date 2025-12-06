import { PlayButton } from "../ui/PlayButton";

type TestimonialCardProps = {
  image: string;
  altText: string;
  quote: string;
  program: string;
  name: string;
  showPlayIcon?: boolean;
  videoId?: string;
  onPlayClick?: () => void;
  isPlaying?: boolean;
};

export function TestimonialCard({
  image,
  altText,
  quote,
  program,
  name,
  showPlayIcon = false,
  videoId,
  onPlayClick,
  isPlaying = false,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Image/Video with Play Icon */}
      <div className="relative h-[200px] sm:h-[240px] md:h-[265px] w-full overflow-hidden bg-black mb-4 sm:mb-6">
        {isPlaying && videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <>
            <img
              src={image}
              alt={altText}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {showPlayIcon && onPlayClick && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <PlayButton
                  onClick={onPlayClick}
                  ariaLabel={`Play video for ${name}`}
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Quote */}
      <p className="text-sm sm:text-base md:text-[16px] leading-relaxed font-semibold text-white mb-3 sm:mb-4 grow">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Program + Name với vertical line */}
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Vertical line */}
        <div className="w-px bg-white/40 h-[50px] sm:h-[60px] shrink-0"></div>

        {/* Program + Name */}
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <p className="text-xs sm:text-sm md:text-[14px] font-semibold text-white/80 leading-tight">
            {program}
          </p>
          <p className="text-sm sm:text-base md:text-[16px] font-semibold text-white leading-tight">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
