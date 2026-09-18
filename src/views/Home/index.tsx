"use client";

import LayoutBackground from "@/components/background/LayoutBackground";
import MediaSocialList from "@/components/layout/MediaSocialList";
import Navbar from "@/components/layout/Navbar";
import About from "@/views/About";
import Stack from "@/views/Stack";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";
import Capabilities from "@/views/Capabilities";

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
