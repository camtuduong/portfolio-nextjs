"use client";

import { Locale, locales } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import cn from "@/lib/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="inline-flex items-center rounded-xl bg-neutral-100/90 p-1 border border-neutral-200/80 dark:bg-neutral-800/90 dark:border-neutral-700/80"
    >
      {locales.map((loc) => {
        const isActive = currentLocale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => handleLocaleChange(loc)}
            aria-pressed={isActive}
            aria-label={t(loc)}
            className={cn(
              "cursor-pointer inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold uppercase transition-all duration-200 outline-none motion-reduce:transition-none",
              "focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-orange focus-visible:ring-offset-1 dark:focus-visible:ring-offset-neutral-900",
              isActive
                ? "bg-primary text-white shadow-xs dark:bg-orange dark:text-neutral-950 font-extrabold"
                : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700/60"
            )}
          >
            {isActive && (
              <span
                className="h-1.5 w-1.5 rounded-full bg-white dark:bg-neutral-950"
                aria-hidden="true"
              />
            )}
            <span>{loc}</span>
          </button>
        );
      })}
    </div>
  );
}
