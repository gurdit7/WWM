"use client";
import { useState } from "react";
import IconHeart from "../../../../public/icons/IconHeart";
import IconHeartFilled from "../../../../public/icons/IconHeartFilled";
const WishlistButton = ({ className, item }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      onClick={() => setSelected((prev) => !prev)}
      className={`bg-white ${className} rounded-full p-[6.7px] w-10 h-10 flex items-center justify-center relative z-10`}
    >      
      {selected ? (
        <IconHeartFilled className="fill-dark-100 w-[26.6px] h-[26.6px]"  />
      ) : (
        <IconHeart size={26.6} className="fill-dark-100" />
      )}
    </button>
  );
};

export default WishlistButton;
