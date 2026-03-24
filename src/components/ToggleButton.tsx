"use client";

import { THEME } from "@/constants/theme";
import React from "react";
import { useTheme } from "next-themes";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { motion } from "framer-motion";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === THEME.DARK;

  const handleToggle = () => {
    setTheme(isDark ? THEME.LIGHT : THEME.DARK);
  };
  return (
    <button onClick={handleToggle} className="cursor-pointer p-2">
      {isDark ? (
        <BedtimeIcon
          sx={{
            ":hover": {
              color: "#FFF6F6",
            },
          }}
        />
      ) : (
        <motion.div
          whileHover={{
            rotate: 30,
            // scale: 1.2,
          }}
          whileTap={{ scale: 0.7 }}
        >
          <WbSunnyIcon
            sx={{
              ":hover": {
                color: "#eb952e",
                transition: "color 0.2s ease",
              },
            }}
          />
        </motion.div>
      )}
    </button>
  );
}
