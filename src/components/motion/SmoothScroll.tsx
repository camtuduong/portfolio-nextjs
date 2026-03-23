"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    //Initial Lenis for smooth scrolling with faster settings
    lenisRef.current = new Lenis({
      duration: 0,
      orientation: "vertical",
      touchMultiplier: 2.5,
      wheelMultiplier: 1.5,
    });

    //set up the animation frame to update Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    //Clean up the animation frame on component unmount
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
