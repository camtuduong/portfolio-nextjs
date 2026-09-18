"use client";

import LayoutBackground from "@/components/background/LayoutBackground";
import MediaSocialList from "@/components/layout/MediaSocialList";
import Navbar from "@/components/layout/Navbar";
import About from "../About";
import Capabilities from "../Capabilities";
import Contact from "../Contact";
import Projects from "../Projects";
import Stack from "../Stack";

export default function HomeView() {
  return (
    <LayoutBackground>
      <header className="w-full flex-col">
        <Navbar />
      </header>

      {/* Media Social */}
      <MediaSocialList />

      {/* ABOUT */}
      <About />

      {/* CAPABILITIES */}
      <Capabilities />

      {/* My Stack */}
      <Stack />

      {/* Projects */}
      <Projects />

      {/* CONTACT */}
      <Contact />
    </LayoutBackground>
  );
}
