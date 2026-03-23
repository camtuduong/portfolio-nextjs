import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});
