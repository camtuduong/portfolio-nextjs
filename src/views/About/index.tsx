import TextType from "@/components/layout/TextType";
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import TargetCursor from "@/components/layout/TargetCursor";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const shouldReduceMotion = useReducedMotion();
  const [showQuickInfo, setShowQuickInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuickInfo(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Kept mounted at all times so its reserved height matches the real content
  // at every breakpoint; only opacity/position animate once typing finishes.
  const quickInfoHidden = { opacity: 0, y: shouldReduceMotion ? 0 : 30 };
  const quickInfoVisible = { opacity: 1, y: 0 };

  return (
    <>
      <section
        id="about"
        aria-label={t("role")}
        // Extra left padding clears the fixed social icon dock (see MediaSocialList)
        className="mr-4 ml-8 flex flex-col items-center gap-8 py-8 pr-4 pl-14 sm:pr-6 sm:pl-16 md:flex-row md:items-center md:justify-between md:gap-4 md:py-12 md:pr-8 md:pl-14 lg:px-16 lg:py-16"
      >
        <div className="z-10 w-full md:w-3/5 lg:w-1/2">
          {/* Hello and name */}
          <div className="font-bold">
            <TextType
              className="cursor-target text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              texts={[t("hi"), t("name")]}
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              loop={false}
            />
          </div>

          {/* QUICK INFO */}
          {/* Role and description */}
          <motion.div
            initial={quickInfoHidden}
            animate={showQuickInfo ? quickInfoVisible : quickInfoHidden}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="mt-6"
          >
            <h1 className="cursor-target inline-block text-xl font-bold sm:text-2xl">
              {t("role")}
            </h1>
            <p className="cursor-target mt-4 text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg dark:text-neutral-300">
              {t("description")}
            </p>
          </motion.div>

          {/* ALWAYS-AVAILABLE CTAS */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              aria-label={t("viewProjectsAria")}
              className="bg-primary hover:bg-orange focus-visible:ring-primary dark:focus-visible:ring-orange dark:bg-orange inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none dark:text-neutral-950 dark:focus-visible:ring-offset-neutral-900"
            >
              {t("viewProjects")}
            </a>
            <a
              href="mailto:cmtduong144@gmail.com"
              aria-label={t("contactMeAria")}
              className="focus-visible:ring-primary dark:focus-visible:ring-orange inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-neutral-800 backdrop-blur-xs transition-all duration-200 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus-visible:ring-offset-neutral-900"
            >
              {t("contactMe")}
            </a>
          </div>
        </div>

        {/* IMAGE my profile*/}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="z-0 w-44 shrink-0 sm:w-72 md:w-72 lg:w-72 xl:w-80"
        >
          <Image
            width={1202}
            height={1308}
            src="/itme.png"
            alt={t("profileAlt")}
            priority
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </section>
      <TargetCursor
        spinDuration={4.3}
        hideDefaultCursor
        parallaxOn={false}
        hoverDuration={0.75}
      />
    </>
  );
}
