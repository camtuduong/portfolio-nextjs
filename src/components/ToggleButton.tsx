"use client";

import { THEME } from "@/constants/theme";
import React from "react";
import { useTheme } from "next-themes";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
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
        <WbSunnyIcon
          sx={{
            ":hover": {
              color: "#FFDE42",
              transition: "color 0.2s ease",
            },
          }}
        />
      )}
    </button>
  );
}
