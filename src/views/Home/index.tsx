"use client";
import Navbar from "@/components/layout/Navbar";
import Projects from "../Projects";
import About from "../About";

export default function HomeView() {
  return (
    <>
      <header className="h-screen w-full flex-col">
        <Navbar />
        {/* <div className="-z-1">
        <HeroBackground />
      </div> */}
        <div id="about" className="mt-28">
          <About />
        </div>
      </header>
      <section>
        <div id="projects" className="flex justify-center">
          <Projects />
        </div>
      </section>
      <footer
        id="contacts"
        className="flex h-[20vh] items-center justify-center"
      >
        <p>Contact information goes here</p>
      </footer>
    </>
  );
}
