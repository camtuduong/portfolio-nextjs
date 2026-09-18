"use client";

import Dash from "@/icons/Dash";
import cn from "@/lib/utils/cn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export type ProjectCategory = "frontend" | "fullstack" | "tools";

export interface ProjectMetadata {
  readonly id: string;
  readonly category: ProjectCategory;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly technologies: readonly string[];
  readonly githubUrl?: string;
  readonly accentGradient: string;
}

export const PROJECTS_DATA: readonly ProjectMetadata[] = [
  {
    id: "portfolio-website",
    category: "frontend",
    titleKey: "items.portfolio.title",
    descriptionKey: "items.portfolio.description",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/camtuduong/portfolio-nextjs",
    accentGradient: "from-blue-500/25 via-sky-500/15 to-transparent",
  },
  {
    id: "fast-chat",
    category: "fullstack",
    titleKey: "items.fastChat.title",
    descriptionKey: "items.fastChat.description",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    accentGradient: "from-teal-500/25 via-emerald-500/15 to-transparent",
  },
  {
    id: "learn-web-dev",
    category: "fullstack",
    titleKey: "items.learnWebDev.title",
    descriptionKey: "items.learnWebDev.description",
    technologies: ["JavaScript", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/camtuduong/learn-web-dev",
    accentGradient: "from-purple-500/25 via-pink-500/15 to-transparent",
  },
  {
    id: "motion-ui-components",
    category: "tools",
    titleKey: "items.motionUiComponents.title",
    descriptionKey: "items.motionUiComponents.description",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/camtuduong/portfolio-nextjs",
    accentGradient: "from-amber-500/25 via-orange-500/15 to-transparent",
  },
] as const;

export const CATEGORIES: readonly { id: ProjectCategory; labelKey: string }[] = [
  { id: "frontend", labelKey: "categories.frontend" },
  { id: "fullstack", labelKey: "categories.fullstack" },
  { id: "tools", labelKey: "categories.tools" },
] as const;

type FilterOption = "all" | ProjectCategory;

function getCategoryLabelKey(category: ProjectCategory): string {
  switch (category) {
    case "frontend":
      return "categories.frontend";
    case "fullstack":
      return "categories.fullstack";
    case "tools":
      return "categories.tools";
  }
}

export default function Projects() {
  const t = useTranslations("projects");
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeFilter);

  const filterOptions: { id: FilterOption; label: string }[] = [
    { id: "all", label: t("allFilter") },
    ...CATEGORIES.map((cat) => ({ id: cat.id, label: t(cat.labelKey) })),
  ];

  return (
    <section
      id="projects"
      aria-label={t("title")}
      className="mt-28 mb-16 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <header className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-playfair tracking-tight">
          {t("title")}
        </h2>
        <Dash className="mt-1" />
        <p className="mt-3 max-w-2xl text-base text-neutral-600 dark:text-neutral-300 sm:text-lg">
          {t("subtitle")}
        </p>
      </header>

      {/* Filter Buttons */}
      <div
        role="region"
        aria-label={t("filterAriaLabel")}
        className="mt-8 mb-10 w-full flex justify-center"
      >
        <div
          role="group"
          aria-label={t("filterAriaLabel")}
          className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-neutral-100/90 p-1.5 backdrop-blur-xs border border-neutral-200/80 dark:bg-neutral-800/90 dark:border-neutral-700/80"
        >
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveFilter(option.id)}
                aria-pressed={isActive}
                className={cn(
                  "cursor-pointer inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 outline-none motion-reduce:transition-none",
                  "focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-orange focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900",
                  isActive
                    ? "bg-primary text-white shadow-md dark:bg-orange dark:text-neutral-950 font-bold"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/70 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/70"
                )}
              >
                {isActive && (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-white dark:bg-neutral-950"
                    aria-hidden="true"
                  />
                )}
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl">
        {filteredProjects.length === 0 ? (
          <p className="py-12 text-center text-neutral-500 dark:text-neutral-400">
            {t("noProjects")}
          </p>
        ) : (
          <motion.div
            layout={shouldReduceMotion ? false : "position"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout={shouldReduceMotion ? false : "position"}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 16, scale: 0.96 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.96, transition: { duration: 0.15 } }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.25, ease: "easeOut" }
                  }
                  className="h-full"
                >
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-sm dark:border-neutral-700/80 dark:bg-neutral-900/90">
                    {/* Decorative gradient overlay */}
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b opacity-50 transition-opacity duration-300 group-hover:opacity-80 motion-reduce:transition-none",
                        project.accentGradient
                      )}
                      aria-hidden="true"
                    />

                    {/* Card Top: Category, Title, Description */}
                    <header className="relative flex flex-col gap-3">
                      <div>
                        <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 border border-neutral-200/60 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700/60">
                          {t(getCategoryLabelKey(project.category))}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 transition-colors group-hover:text-primary motion-reduce:transition-none dark:text-neutral-100 dark:group-hover:text-orange">
                        {t(project.titleKey)}
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {t(project.descriptionKey)}
                      </p>
                    </header>

                    {/* Card Bottom: Technologies & Link */}
                    <div className="relative mt-6 flex flex-col gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <div>
                        <h4 className="sr-only">{t("technologiesLabel")}</h4>
                        <div
                          className="flex flex-wrap gap-1.5"
                          aria-label={t("technologiesLabel")}
                        >
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.githubUrl && (
                        <footer className="pt-2 flex items-center justify-between">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("viewSourceAria", {
                              title: t(project.titleKey),
                            })}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md motion-reduce:transition-none dark:text-blue-400 dark:hover:text-orange dark:focus-visible:ring-orange dark:focus-visible:ring-offset-neutral-900"
                          >
                            <GitHubIcon sx={{ fontSize: 20 }} />
                            <span>{t("viewSource")}</span>
                          </a>
                        </footer>
                      )}
                    </div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
