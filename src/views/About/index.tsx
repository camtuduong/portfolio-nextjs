import TextType from "@/components/layout/TextType";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TargetCursor from "@/components/layout/TargetCursor";
import BoxContact from "@/icons/BoxContact";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const [showQuickInfo, setShowQuickInfo] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

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
    <section className="mt-40 ml-20 flex flex-col pb-[250px]">
      <div className="w-[45%]">
        {/* TEXT TYPE */}
        {/* Hello and name */}
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
        {/* Role and description */}
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
        {/* TARGET CURSOR Component */}
        <TargetCursor
          spinDuration={4.3}
          hideDefaultCursor
          parallaxOn={false}
          hoverDuration={0.75}
        />

        {/* Video Contact & btn*/}
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

      {/* IMAGE my profile*/}
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
  );
}
