"use client";

import LayoutBackground from "@/components/background/LayoutBackground";
import MediaSocialList from "@/components/layout/MediaSocialList";
import Navbar from "@/components/layout/Navbar";
import TargetCursor from "@/components/layout/TargetCursor";

import TextType from "@/components/layout/TextType";
import Title from "@/components/Title";
import BoxContact from "@/icons/BoxContact";
import Flower from "@/icons/Flower";
import ToolKit from "@/icons/ToolKit";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import About from "../About";
import Stack from "../Stack";

export default function HomeView() {
  const t = useTranslations("about");
  const [showToolkit, setShowToolkit] = useState(false);
  const [showQuickInfo, setShowQuickInfo] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToolkit(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuickInfo(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoStarted(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutBackground>
      <header className="w-full flex-col">
        <Navbar />
      </header>

      {/* Media Social */}
      <MediaSocialList />

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
      <section className="mt-40 ml-20 flex flex-col pb-[250px]">
        <div className="w-[45%]">
          {/* HELLO */}
          <div className="ml-20 font-bold">
            <TextType
              className="cursor-target text-6xl"
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
          {showQuickInfo ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 ml-20"
            >
              <h1 className="cursor-target inline-block text-2xl font-bold">
                {t("role")}
              </h1>
              <p className="cursor-target mt-8 inline-block w-[calc(100%-96px)] text-lg">
                {t("description")}
              </p>
            </motion.div>
          ) : (
            <div className="h-[148px]" />
          )}
        </div>
        <div>
          <TargetCursor
            spinDuration={4.3}
            hideDefaultCursor
            parallaxOn={false}
            hoverDuration={0.75}
          />

          {/* CONTACT */}
          <AnimatePresence mode="wait">
            {!videoEnded && videoStarted && (
              <motion.div
                key="video"
                className="absolute ml-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <video
                  width={500}
                  height={400}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => setVideoEnded(true)}
                >
                  <source src="/pull.webm" type="video/webm" />
                </video>
              </motion.div>
            )}
          </AnimatePresence>
          {videoEnded && (
            <motion.a
              key="contact"
              href="mailto:cmtduong144@gmail.com"
              className="absolute left-[262px] z-10 mt-12 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <BoxContact className="h-[190px] w-48" />
              <motion.div
                className="absolute top-[105px] left-[71px]"
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{
                  opacity: 1,
                  scale: [0.8, 1.4, 0.9, 1.2, 1],
                }}
                transition={{
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.5, times: [0, 0.35, 0.6, 0.8, 1] },
                  rotate: { duration: 0.5, times: [0, 0.35, 0.6, 0.8, 1] },
                }}
              >
                {/* <Heart className="h-12 w-12" /> */}
                <p className="text-xl font-bold">Start</p>
              </motion.div>
            </motion.a>
          )}
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

      {/* My Stack */}
      <Stack />
      <section className="mt-20">
        <About />
      </section>
    </LayoutBackground>
  );
}
