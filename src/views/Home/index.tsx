"use client";

import LayoutBackground from "@/components/background/LayoutBackground";
import MediaSocialList from "@/components/layout/MediaSocialList";
import Navbar from "@/components/layout/Navbar";

import ToolKit from "@/icons/ToolKit";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import About from "../About";
import Stack from "../Stack";

export default function HomeView() {
  const t = useTranslations("about");
  const [showToolkit, setShowToolkit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToolkit(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutBackground>
      <header className="w-full flex-col">
        <Navbar />
      </header>

      {/* Media Social */}
      <MediaSocialList />
      {/* tool kit got content "It's me " */}
      {showToolkit && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: [0.8, 1.4, 0.9, 1.2, 1],
              rotate: [0, 20, 20, 20, 20],
            }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.5, times: [0, 0.35, 0.6, 0.8, 1] },
              rotate: { duration: 0.5, times: [0, 0.35, 0.6, 0.8, 1] },
            }}
            className="absolute top-36 left-1/3 m-6"
          >
            <ToolKit color="var(--primary)" label={t("me")} />
          </motion.div>
        </AnimatePresence>
      )}

      {/* ABOUT */}
      <About />

      {/* My Stack */}
      <Stack />
    </LayoutBackground>
  );
}
