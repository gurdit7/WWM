"use client";
import Switch from "@/components/ui/switch/Switch";
import Text from "@/components/ui/text/text";
import Wrapper from "@/components/ui/wrapper/wrapper";
import IconFilter from "../../../../public/icons/IconFilter";
import { useState } from "react";
const FilterModal = () => {
  const [filter, setFilter] = useState({});
  const [save, setSave] = useState(false);  
  const values = [
    "Seamaster",
    "Holland",
    "Gold capped",
    "Gold",
    "34mm",
    "Europe",
    "Gold capped",
    "32mm",
  ];
  const getSave = (e) => {
    setSave(e.target.checked);
  };

  const variantLength = Object.values(filter).filter(value => value === true).length;

  const getFilter = (item) => {
    if (filter[item]) {
      setFilter((prev) => ({ ...prev, [item]: false }));
    } else {
      setFilter((prev) => ({ ...prev, [item]: true }));
    }
  };

  return (
    <Wrapper className="bg-light-150 rounded-[12px] py-[16px] px-[18px] md:p-[18px] mt-3 flex gap-x-[20px] md:gap-x-[76.5px]">
      <Wrapper className="flex-1">
        <button
          type="button"
          className="py-[10px] relative whitespace-nowrap  max-w-[138px] px-[18px] text-base leading-[22.4px] font-medium flex items-center gap-x-[10px] text-white bg-black rounded-[10px]"
        >
          <IconFilter className="fill-white" size={24} />
          {variantLength > 0 &&
            <Text className="absolute md:hidden top-[6px] right-[16px]   rounded-[3.03px] py-[2px] px-[5px] bg-[#25D366] text-[#151416] font-semibold text-[8.91px] leading-[12.14px] " >{variantLength}</Text>}
          <Text className="hidden md:block">All filters</Text>
        </button>
      </Wrapper>
      <ul className="flex gap-x-2 md:justify-center overflow-x-auto ">
        {values &&
          values.map((item, i) => (
            <li className="" key={i}>
              <button
                onClick={() => getFilter(item)}
                type="button"
                className={`${filter[item]
                  ? " text-opacity-100 border-dark-100"
                  : "text-opacity-50 border-light-75"
                  } transition-all duration-300  py-[10px]  md:py-3 px-4 md:px-[18px] whitespace-nowrap text-[12px] leading-[16.8px] md:text-sm md:leading-[19.6px] h-[38px]  md:h-[44px] font-medium flex items-center gap-x-[10px] text-dark-100 rounded-[10px] border `}
              >
                {item}
              </button>
            </li>
          ))}
      </ul>
      <Wrapper className=" hidden md:flex-1 md:flex items-center gap-x-[10px]">
        <Text className="!text-sm !leading-[19.6px] !font-medium"> Save</Text>
        <Switch onChange={getSave} />
      </Wrapper>

    </Wrapper>
  );
};

export default FilterModal;
