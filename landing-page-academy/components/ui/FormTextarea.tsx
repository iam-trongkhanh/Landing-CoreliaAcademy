import { TextareaHTMLAttributes, ReactNode } from "react";

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  icon?: ReactNode;
  containerClassName?: string;
};

export function FormTextarea({
  icon,
  containerClassName = "",
  className = "",
  ...props
}: FormTextareaProps) {
  return (
    <div
      className={`flex flex-1 items-start gap-2 sm:gap-3 border border-[#D9D9D9] px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 min-h-[100px] sm:min-h-[120px] ${containerClassName}`}
    >
      {icon && (
        <div className="h-5 w-5 sm:h-6 sm:w-6 text-[#B0384F] shrink-0 mt-1">
          {icon}
        </div>
      )}
      <textarea
        className={`flex-1 resize-none bg-transparent text-xs sm:text-sm text-[#1B1B1B] outline-none placeholder:text-[#8C8C8C] ${className}`}
        {...props}
      />
    </div>
  );
}
