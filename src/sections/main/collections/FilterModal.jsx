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
  const getFilter = (item) => {
    if (filter[item]) {
      setFilter((prev) => ({ ...prev, [item]: false }));
    } else {
      setFilter((prev) => ({ ...prev, [item]: true }));
    }
  };
  return (
    <Wrapper className="bg-light-150 rounded-[12px] p-[18px] mt-3 flex gap-x-[76.5px]">
      <Wrapper className="flex-1">
        <button
          type="button"
          className="py-[10px] whitespace-nowrap max-w-[138px] px-[18px] text-base leading-[22.4px] font-medium flex items-center gap-x-[10px] text-white bg-black rounded-[10px]"
        >
          <IconFilter className="fill-white" size={24} /> All filters
        </button>
      </Wrapper>
      <Wrapper className="w-full">
        <ul className="flex gap-x-2 justify-center">
          {values &&
            values.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => getFilter(item)}
                  type="button"
                  className={`${
                    filter[item]
                      ? " text-opacity-100 border-dark-100"
                      : "text-opacity-50 border-light-75"
                  } transition-all duration-300 py-3 px-[18px] text-sm leading-[19.6px] h-[44px] font-medium flex items-center gap-x-[10px] text-dark-100 rounded-[10px] border `}
                >
                  {item}
                </button>
              </li>
            ))}
        </ul>
      </Wrapper>
      <Wrapper className="flex-1 flex items-center gap-x-[10px]">
        <Text className="!text-sm !leading-[19.6px] !font-medium"> Save</Text>
        <Switch onChange={getSave} />
      </Wrapper>

    </Wrapper>
  );
};

export default FilterModal;
