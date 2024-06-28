"use client"

import { useState } from 'react';
import IconDownArrow from '../../../public/icons/IconDownArrow';
import Text from '../ui/text/text';
import useTheme from '@/contexts/theme/ThemeContext';

const sortOptions = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'relevance', label: 'Relevance' },
  { value: 'priceLowToHigh', label: 'Price: Low to High' },
  { value: 'priceHighToLow', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest Arrivals' },
];

const ProductDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0].value);
  const { setSortCriterion } = useTheme()

  const handleSortChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    setSortCriterion(newValue);
  };

  return (
    <div className="relative inline-block w-full ">
      <select
        className="w-full px-[18px] pr-[34px] py-[10px] rounded-[6px]  text-[14px] text-[#2A2C29] !leading-[21px] font-medium placeholder-[#2A2C29] border border-[#DCDAD8]  appearance-none focus:shadow-outline"
        value={selectedOption}
        onChange={handleSortChange}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className="text-[14px] text-[#2A2C29] !leading-[21px] font-medium">
{option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-[10px] flex items-center  pointer-eve nts-none">
        <IconDownArrow size='24px' className="fill-[#A1A1A2]" />
      </div>
    </div>
  );
};

export default ProductDropdown;
