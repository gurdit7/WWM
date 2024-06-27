"use client";
import React, { useContext, useState } from "react";
const CurrencyContext = React.createContext();
export default function useCurrency() {
  return useContext(CurrencyContext);
}

export function CurrencyProvider({ children }) {
   const [selectedCountry, setCountry] = useState('NL');
   const [currencyCode, setCurrencyCode] = useState('NL');
   const getCurrency = (code,currencyCode) =>{
    setCountry(code)
    setCurrencyCode(currencyCode)
   }
  const value = {
    selectedCountry,
    currencyCode,
    getCurrency
  };
  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}
