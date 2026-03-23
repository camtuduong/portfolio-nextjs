import React from "react";
import { motion } from "framer-motion";

export default function LinkHover({
  content,
  href,
  icon,
}: {
  icon?: React.ReactNode;
  content: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      className="inline-block px-2 py-1 whitespace-nowrap"
      whileHover={{
        rotate: -8,
        scale: 1.1,
        backgroundColor: "#004aad",
        color: "#fff",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {icon}
      {content}
    </motion.a>
  );
}
