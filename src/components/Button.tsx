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
        "bg-primary cursor-pointer rounded-lg px-6 py-2",
        className,
      )}
    >
      {children}
    </button>
  );
}
