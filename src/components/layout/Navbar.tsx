import cn from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{
        y: scrolled ? 0 : -8,
        opacity: 1,
      }}
      transition={{ duration: 0.25 }}
      className={cn(
        "fixed top-0 left-0 z-100 w-full text-lg transition-all duration-300",
        scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="font-comfortaa flex justify-between px-32 py-5">
        <h1 className="font-bold">Duong Thi Cam Tu</h1>
        <ul className="flex flex-row gap-12">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
