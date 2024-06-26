import React from "react";
import IconListTick from "../../../../public/icons/IconListTick";

const TickItem = ({ label }) => {
  return (
    <li className="flex gap-3 items-center text-sm leading-[24px] text-dark-100">
      <IconListTick
        bgColor="fill-accent-100"
        tickColor="fill-white"
        size={20}
      />
      {label}
    </li>
  );
};

export default TickItem;
