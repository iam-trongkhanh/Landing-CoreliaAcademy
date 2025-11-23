"use client";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title?: string;
};

export function VideoModal({
  isOpen,
  onClose,
  videoId,
  title = "Video",
}: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-lg sm:rounded-xl md:rounded-3xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-full bg-white/90 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-black hover:bg-white transition-colors"
          aria-label="Close video"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
