"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MediaSocialList() {
  const t = useTranslations("social");
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute z-20 mt-64 flex flex-col gap-2 text-2xl">
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.8 }}
      >
        <Link
          href="https://www.linkedin.com/in/cam-tu-duong"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("linkedinAria")}
          className="focus-visible:ring-primary dark:focus-visible:ring-orange inline-block rounded-lg outline-none focus-visible:ring-2 motion-reduce:transition-none"
        >
          <LinkedInIcon
            sx={{
              fontSize: { xs: 28, sm: 40 },
              ":hover": {
                cursor: "pointer",
                color: "#004aad",
              },
            }}
          />
        </Link>
      </motion.div>
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.8 }}
      >
        <Link
          href="https://github.com/camtuduong"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("githubAria")}
          className="focus-visible:ring-primary dark:focus-visible:ring-orange inline-block rounded-lg outline-none focus-visible:ring-2 motion-reduce:transition-none"
        >
          <GitHubIcon
            sx={{
              fontSize: { xs: 28, sm: 40 },
              ":hover": {
                cursor: "pointer",
                color: "#004aad",
              },
            }}
          />
        </Link>
      </motion.div>
    </div>
  );
}
