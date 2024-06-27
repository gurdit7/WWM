"use client";

import { useEffect, useState } from "react";
import IconArrowRight from "../../../public/icons/IconArrowRight";
import Text from "../ui/text/Text";
import Wrapper from "../ui/wrapper/Wrapper";

const Accordions = ({ items }) => {
  const [open, setOpen] = useState([]);
  const [accordionItems, setAccordionItems] = useState([]);
  useEffect(() => {
    if (items) {
      setAccordionItems(items);
    }
  }, [items]);
  const getOpen = (i) => {
    if (open === i) {
      setOpen(-1);
    } else {
      setOpen(i);
    }
  };
  return (
    <Wrapper className=" rounded-[6px] border border-light-50 ">
      {accordionItems.map((item, index) => (
        <Wrapper
          key={index}
          className={`${index > 0 ? "border-t border-light-50" : ""}`}
        >
          <Wrapper>
            <button
              onClick={() => {
                getOpen(index);
              }}
              type="button"
              className={`font-semibold w-full text-[15px] leading-[28px] text-dark-200 flex justify-between items-center  px-[18px] ${
                open === index ? "py-[18.5px]" : "py-[18.5px]"
              }`}
            >
              {item.title}
              <IconArrowRight
                className={`${
                  open === index ? "rotate-90" : ""
                } transition-all duration-500`}
              />
            </button>
          </Wrapper>
          <Wrapper
            className={`${
              open === index ? "max-h-[250px]" : "max-h-0"
            } overflow-hidden transition-all duration-500`}
          >
            <Text className="!leading-[24px] text-dark-200 px-[18px] pb-4">
              {item.content}
            </Text>
          </Wrapper>
        </Wrapper>
      ))}
    </Wrapper>
  );
};

export default Accordions;
