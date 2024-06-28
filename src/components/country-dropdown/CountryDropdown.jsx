"use client";
import { useState } from "react";
import Wrapper from "../ui/wrapper/wrapper";
import Image from "next/image";
import useCurrency from "@/contexts/currency-provider/CurrencyProvider";
import { Countries } from "@/assets/data/countries";


const CountryDropdown = ({ className, footer }) => {
  const { selectedCountry, getCurrency } = useCurrency();
  const [selectCountry, setSelectedCountry] = useState(selectedCountry);
  const [open, setOpen] = useState(false);
  const setCountry = (code, currencyCode) => {
    setSelectedCountry(code);
    getCurrency(code, currencyCode);
    setOpen(false);
  };
  return (
    <Wrapper className="relative">
      <button
        onClick={() => setOpen((s) => !s)}
        type="button"
        className={` ${
          className || ""
        } w-[100.99px] h-[45px] border text-[13px] leading-[19.5px] rounded-[6px] font-semibold justify-center px-4 flex gap-x-4 items-center border-[#DCDAD8]`}
      >
        <Image
          src={`/countries-flags/${selectedCountry.toLowerCase()}.svg`}
          width={18.02}
          height={11.99}
          alt={selectedCountry}
          className="rounded-[2.5px] block w-[18.02px] h-[11.99px] object-cover"
        />
        <span className="flex items-center gap-[10px]">
          {selectedCountry}

          <svg width="6.97" height="3.49" viewBox="0 0 12 8">
            <path
              d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z"
              className="fill-dark-200"
            />
          </svg>
        </span>
      </button>
      <Wrapper
        className={`${
          open ? "max-h-[200px]" : "max-h-[0px]"
        } transtion duration-500 scroll-bar-hide left-0 absolute overflow-y-auto bg-white ${
          footer ? "bottom-full" : "top-full"
        }`}
      >
        <ul>
          {Countries.map((country, i) => (
            <li key={i}>
              {country.code && (
                <button
                  type="button"
                  onClick={() =>
                    setCountry(country.code, country.currency_code)
                  }
                  className="text-[13px] w-full py-2 px-4 hover:bg-[#F8F8F7] transtion duration-300 leading-[19.5px] font-semibold flex gap-x-4 items-center"
                >
                  <Image
                    src={`/countries-flags/${country.code.toLowerCase()}.svg`}
                    width={18.02}
                    height={11.99}
                    alt={country.label}
                    className="rounded-[2.5px] block w-[18.02px] h-[11.99px] object-cover"
                  />
                  {country.code}
                </button>
              )}
            </li>
          ))}
        </ul>
      </Wrapper>
    </Wrapper>
  );
};

export default CountryDropdown;
