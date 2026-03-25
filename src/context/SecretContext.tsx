"use client";

import { createContext, useContext, useState } from "react";

const SecretContext = createContext<{
  isClick: boolean;
  setClicked: (v: boolean) => void;
} | null>(null);

export function SecretProvider({ children }: { children: React.ReactNode }) {
  const [isClick, setClicked] = useState(false);

  return (
    <SecretContext.Provider value={{ isClick, setClicked }}>
      {children}
    </SecretContext.Provider>
  );
}

export function useSecret() {
  const ctx = useContext(SecretContext);
  if (!ctx) throw new Error("useSecret must be used inside SecretProvider");
  return ctx;
}
