
"use client"

import React, { useState } from 'react';
import IconDownArrow from '../../../public/icons/IconDownArrow';
import Wrapper from '../ui/wrapper/wrapper';
import Text from '../ui/text/text';
import IconArrowRight from '../../../public/icons/IconArrowRight';

const ProductAccordions = ({ productDetailsfaq }) => {

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div>
      {productDetailsfaq.map((item, index) => (
        <Accordion
          key={index}
          index={index}
          openIndex={openIndex}
          headerInfo={item.headerInfo}
          details={item.details}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};

const Accordion = ({ index, openIndex, headerInfo, details, toggleAccordion }) => {

return (
  <div className={`flex flex-col gap-[14px] pt-[14px] pb-[33px] h-full  overflow-y-auto px-[17px] border border-[#EEEDEC] rounded-md`}>
    <div
      className="flex items-center gap-x-[10px] cursor-pointer  justify-between"
      onClick={() => toggleAccordion(index)}
    >
      <Text className="text-[#000] text-[13px] !leading-[17.71px] font-semibold">{headerInfo.label}</Text>
      <IconArrowRight
        className={`${index === openIndex ? "rotate-90" : ""
          } transition-all duration-500`}
      />
    </div>
    {/* {index === openIndex && ( */}
      <Wrapper className={`border-child-top transition-all duration-500 overflow-hidden  ${index === openIndex ? 'max-h-[1000px]' : 'max-h-0'}`}>
        {details.map((detail, index) => (
          <Wrapper
            className={`grid grid-cols-2 gap-x-[24px] py-[4px] items-start`}
            key={index}>
            <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
              {detail.label}
            </Text>
            <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
              {detail.value}
            </Text>
          </Wrapper>
        ))}
      </Wrapper>
    {/* )} */}
  </div>
);
};

export default ProductAccordions;
