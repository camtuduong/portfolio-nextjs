"use client";

import { THEME } from "@/constants/theme";
import React from "react";
import { useTheme } from "next-themes";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === THEME.DARK;
  return (
    <button
      onClick={() => setTheme(isDark ? THEME.LIGHT : THEME.DARK)}
      className="p-2 rounded bg-amber-200"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
