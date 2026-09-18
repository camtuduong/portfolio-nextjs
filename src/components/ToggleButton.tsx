"use client";

import { THEME } from "@/constants/theme";
import React from "react";
import { useTheme } from "next-themes";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ToggleButton() {
  const t = useTranslations("theme");
  const { theme, setTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const isDark = theme === THEME.DARK;

  const handleToggle = () => {
    setTheme(isDark ? THEME.LIGHT : THEME.DARK);
  };

  const actionLabel = isDark ? t("switchToLight") : t("switchToDark");

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={actionLabel}
      title={actionLabel}
      className="focus-visible:ring-primary dark:focus-visible:ring-orange cursor-pointer rounded-lg p-2 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-1 motion-reduce:transition-none dark:focus-visible:ring-offset-neutral-900"
    >
      {isDark ? (
        <motion.div
          whileHover={shouldReduceMotion ? {} : { rotate: 30 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
        >
          <BedtimeIcon
            sx={{
              ":hover": {
                color: "#FFF6F6",
                transition: "color 0.2s ease",
              },
              height: "20px",
              width: "20px",
            }}
          />
        </motion.div>
      ) : (
        <motion.div
          whileHover={shouldReduceMotion ? {} : { rotate: 30 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.7 }}
        >
          <WbSunnyIcon
            sx={{
              ":hover": {
                color: "#eb952e",
                transition: "color 0.2s ease",
              },
            }}
          />
        </motion.div>
      )}
    </button>
  );
}
