"use client";
import React, { useContext, useState } from "react";
const ThemeContext = React.createContext();
export default function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [hideHeader, setHideHeader] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const value = {
    hideHeader,
    setHideHeader,
    hideFooter,
    setHideFooter,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
