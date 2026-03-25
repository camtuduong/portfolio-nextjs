import { motion } from "framer-motion";
import React from "react";
import UnderScore from "./UnderScore";

export default function Title({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex-col">
      <div className="flex gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {icon}
        </motion.div>
      </div>
      <UnderScore />
    </div>
  );
}
