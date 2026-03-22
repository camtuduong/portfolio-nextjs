"use client";

import Navbar from "@/components/layout/Navbar";
import About from "../About";
import Projects from "../Projects";

export default function HomeView() {
  return (
    <>
      <header className="relative h-screen w-full">
        <Navbar />
        <div id="about">{/* <About /> */}</div>
      </header>
      <section>
        <div id="projects" className="flex justify-center">
          <Projects />
        </div>
      </section>
      <footer
        id="contacts"
        className="h-[20vh] flex items-center justify-center"
      >
        <p>Contact information goes here</p>
      </footer>
    </>
  );
}
