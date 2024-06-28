"use client";
import React, { useContext, useState } from "react";
const ThemeContext = React.createContext();
export default function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [hideHeader, setHideHeader] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [collectionsProductsViewStyle, setCollectionsProductsViewStyle] = useState('list');
  const value = {
    hideHeader,
    setHideHeader,
    hideFooter,
    setHideFooter,
    collectionsProductsViewStyle,
    setCollectionsProductsViewStyle
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
