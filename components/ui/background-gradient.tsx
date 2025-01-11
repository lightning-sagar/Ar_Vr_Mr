"use client";
import { cn } from "@/utils/cn";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {

  return (
    <div
      className={cn(
        "relative p-[4px] group/card overflow-hidden",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] transition-all duration-500 opacity-40 group-hover/card:opacity-100",
          "bg-[radial-gradient(circle_at_50%_50%,_#4F46E5,_transparent_60%)]",
          { "animate-rotate": animate }
        )}
      />
      <div
        className={cn(
          "relative z-[2] bg-black rounded-[22px]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};