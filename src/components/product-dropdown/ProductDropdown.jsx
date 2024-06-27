"use client"

import { useState } from 'react';
import IconDownArrow from '../../../public/icons/IconDownArrow';

const sortOptions = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'relevance', label: 'Relevance' },
  { value: 'priceLowToHigh', label: 'Price: Low to High' },
  { value: 'priceHighToLow', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest Arrivals' },
];

const ProductDropdown = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[0].value);

  const handleSortChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    onSortChange(newValue);
  };

  return (
    <div className="relative inline-block w-full text-[14px] text-[#2A2C29] leading-[21px] font-medium">
      <select
        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        value={selectedOption}
        onChange={handleSortChange}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-eve nts-none">
        <IconDownArrow size='19px' className="fill-black"/>
      </div>
    </div>
  );
};

export default ProductDropdown;
