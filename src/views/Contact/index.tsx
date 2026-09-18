"use client";

import Dash from "@/icons/Dash";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslations } from "next-intl";
import React from "react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      aria-label={t("title")}
      className="mt-28 mb-20 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 text-center"
    >
      <header className="flex flex-col items-center gap-2">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary dark:text-orange">
          {t("eyebrow")}
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-playfair tracking-tight text-neutral-900 dark:text-neutral-100">
          {t("title")}
        </h2>
        <Dash className="mt-1" />
        <p className="mt-3 max-w-xl text-base text-neutral-600 dark:text-neutral-300 sm:text-lg">
          {t("description")}
        </p>
      </header>

      <div className="mt-8 flex justify-center">
        <a
          href="mailto:cmtduong144@gmail.com"
          aria-label={t("ctaAria")}
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-orange hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-orange focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 dark:bg-orange dark:text-neutral-950 motion-reduce:transition-none"
        >
          <EmailIcon sx={{ fontSize: 22 }} />
          <span>{t("cta")}</span>
        </a>
      </div>
    </section>
  );
}
