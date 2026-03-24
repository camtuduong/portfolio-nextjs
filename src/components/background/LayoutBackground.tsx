import React from "react";
import cn from "@/lib/utils/cn";

export default function LayoutBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-background dark:bg-background h-screen w-full overflow-hidden pt-16",
      )}
    >
      <div
        className={cn(
          "relative container mx-auto h-screen w-full rounded-xl bg-white p-8 shadow-2xl shadow-black/50 dark:bg-green-300",
        )}
      >
        {children}
      </div>
    </div>
  );
}
