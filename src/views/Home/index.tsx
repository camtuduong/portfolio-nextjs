"use client";

import MediaSocialList from "@/components/layout/MediaSocialList";
import Navbar from "@/components/layout/Navbar";

import TextType from "@/components/layout/TextType";
import ToolKit from "@/icons/ToolKit";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeView() {
  const t = useTranslations("about");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background dark:bg-background h-screen w-full pt-16">
      <div className="relative container mx-auto h-screen w-full rounded-xl bg-white p-8 shadow-2xl shadow-black/50 dark:bg-green-300">
        <header className="w-full flex-col">
          <Navbar />
          {/* <div className="-z-1">
            <HeroBackground />
          </div>
          <div id="about" className="mt-28">
            <About />
          </div> */}
        </header>

        {/* Media Social */}
        <MediaSocialList />
        {show && (
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
        <section className="mt-40 flex flex-col">
          {/* ABOUT */}
          <div className="ml-20 w-[45%]">
            {/* HELLO */}
            <div className="ml-20 font-bold">
              <TextType
                className="text-6xl"
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

            {/* ROLE */}
            <div className="mt-6 ml-20">
              <h1 className="text-2xl font-bold">{t("role")}</h1>
              <p className="mt-8 pr-24 text-lg">{t("description")}</p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="absolute top-24 right-24">
            <Image
              width={650}
              height={650}
              src="/tui_s2.png"
              alt="Profile"
              className="h-[500px] w-[500px] object-fill lg:h-[650px] lg:w-[650px]"
            />
          </div>
        </section>
        {/* <footer
          id="contacts"
          className="flex h-[20vh] items-center justify-center"
        >
          <p>Contact information goes here</p>
        </footer> */}
      </div>
    </div>
  );
}
