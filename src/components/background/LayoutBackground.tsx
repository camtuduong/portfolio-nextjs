"use client";
import { useSecret } from "@/context/SecretContext";
import cn from "@/lib/utils/cn";
import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function LayoutBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isClick, setClicked } = useSecret();

  // const width = window.innerWidth - 100;
  // const height = window.innerHeight;

  const { width, height } = useWindowSize();
  const newWidth = width - 100;

  useEffect(() => {
    if (isClick) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isClick]);

  return (
    <div className={cn("bg-background dark:bg-background w-full pt-16")}>
      {isClick && <Confetti width={newWidth} height={height} recycle={false} />}
      <div
        className={cn(
          "relative container mx-auto w-full rounded-xl bg-white p-8 shadow-2xl shadow-black/50 dark:bg-green-300",
        )}
      >
        {children}
      </div>
    </div>
  );
}
