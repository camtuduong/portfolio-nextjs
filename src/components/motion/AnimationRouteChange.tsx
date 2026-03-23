"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimationRouteChange({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      key={pathname}
    >
      {children}
    </motion.div>
  );
}
