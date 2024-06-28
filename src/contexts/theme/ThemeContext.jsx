"use client";
import React, { useContext, useState } from "react";
const ThemeContext = React.createContext();
import { products } from "@/assets/data/products";
export default function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [hideHeader, setHideHeader] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [collectionsProductsViewStyle, setCollectionsProductsViewStyle] = useState('list');
  const [sortCriterion,setSortCriterion] = useState("popularity")
  const [sortedProducts, setSortedProducts]= useState(products)
  const [quickViewProduct, setQuickViewProduct] = useState(false);
  const value = {
    hideHeader,
    setHideHeader,
    hideFooter,
    setHideFooter,
    collectionsProductsViewStyle,
    setCollectionsProductsViewStyle,
    sortCriterion,
    setSortCriterion,
    sortedProducts,
    setSortedProducts,
    quickViewProduct,
    setQuickViewProduct
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
