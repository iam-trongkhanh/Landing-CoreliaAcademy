import type { InputHTMLAttributes, ReactNode } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  containerClassName?: string;
};

export function FormInput({
  icon,
  iconPosition = "left",
  containerClassName = "",
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div
      className={`flex flex-1 items-center gap-2 sm:gap-3 border border-[#D9D9D9] px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 ${containerClassName}`}
    >
      {icon && iconPosition === "left" && (
        <div className="h-5 w-5 sm:h-6 sm:w-6 text-[#B0384F] shrink-0">
          {icon}
        </div>
      )}
      <input
        className={`flex-1 bg-transparent text-xs sm:text-sm text-[#1B1B1B] outline-none placeholder:text-[#8C8C8C] ${className}`}
        {...props}
      />
      {icon && iconPosition === "right" && (
        <div className="h-5 w-5 sm:h-6 sm:w-6 text-[#B0384F] shrink-0">
          {icon}
        </div>
      )}
    </div>
  );
}
