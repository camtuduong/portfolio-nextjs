import cn from "@/lib/utils/cn";
import React from "react";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "bg-primary py-2 px-6 rounded-lg cursor-pointer",
        className,
      )}
    >
      {children}
    </button>
  );
}
