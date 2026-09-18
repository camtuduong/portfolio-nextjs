"use client";

import Dash from "@/icons/Dash";
import cn from "@/lib/utils/cn";
import DevicesIcon from "@mui/icons-material/Devices";
import LayersIcon from "@mui/icons-material/Layers";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

export interface CapabilityItem {
  readonly id: "frontend" | "fullstack" | "maintainability";
  readonly icon: React.ReactNode;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly accentGradient: string;
}

export const CAPABILITIES_DATA: readonly CapabilityItem[] = [
  {
    id: "frontend",
    icon: (
      <DevicesIcon
        sx={{ fontSize: 32 }}
        className="text-primary dark:text-orange"
      />
    ),
    titleKey: "cards.frontend.title",
    descriptionKey: "cards.frontend.description",
    accentGradient: "from-blue-500/20 via-sky-500/10 to-transparent",
  },
  {
    id: "fullstack",
    icon: (
      <LayersIcon
        sx={{ fontSize: 32 }}
        className="text-primary dark:text-orange"
      />
    ),
    titleKey: "cards.fullstack.title",
    descriptionKey: "cards.fullstack.description",
    accentGradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
  },
  {
    id: "maintainability",
    icon: (
      <VerifiedUserIcon
        sx={{ fontSize: 32 }}
        className="text-primary dark:text-orange"
      />
    ),
    titleKey: "cards.maintainability.title",
    descriptionKey: "cards.maintainability.description",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
] as const;

export default function Capabilities() {
  const t = useTranslations("capabilities");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="capabilities"
      aria-label={t("title")}
      className="mt-20 flex w-full flex-col items-center px-4 sm:px-6 lg:px-8"
    >
      <header className="flex flex-col items-center gap-2 text-center">
        <h2 className="font-playfair text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
          {t("title")}
        </h2>
        <Dash className="mt-1" />
        <p className="mt-3 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-300">
          {t("subtitle")}
        </p>
      </header>

      <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES_DATA.map((item) => (
          <motion.div
            key={item.id}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, margin: "-50px" }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.4, ease: "easeOut" }
            }
            className="h-full"
          >
            <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-sm dark:border-neutral-700/80 dark:bg-neutral-900/90">
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b opacity-50 transition-opacity duration-300 group-hover:opacity-80 motion-reduce:transition-none",
                  item.accentGradient,
                )}
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200/60 bg-neutral-100 dark:border-neutral-700/60 dark:bg-neutral-800">
                  {item.icon}
                </div>
                <h3 className="group-hover:text-primary dark:group-hover:text-orange text-xl font-bold text-neutral-900 transition-colors motion-reduce:transition-none dark:text-neutral-100">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {t(item.descriptionKey)}
                </p>
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
