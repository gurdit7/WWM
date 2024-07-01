"use client";
import './style.css';
import Wrapper from "@/components/ui/wrapper/wrapper";
import Text from "@/components/ui/text/text";
import Image from "next/image";
import H3 from "@/components/ui/headings/h3";
import H4 from "@/components/ui/headings/H4";
import H6 from "@/components/ui/headings/H6";
import ProductCard from "./ProductCard";
import WishlistButton from "../wishlist/wishlist-button";
import useTheme from "@/contexts/theme/ThemeContext";
import ProductPrice from '../products/ProductPrice';

const SortedProductList = () => {
  const { sortedProducts } = useTheme();

  return (
    sortedProducts &&
    sortedProducts.length > 0 &&
    sortedProducts.map((product, i) => (
      <Wrapper
        key={i}
        className="rounded-[6px] p-[6px] shadow-9xl flex flex-col md:flex-row gap-x-[18px] items-center"
      >
        <ProductCard item={product} />
        <Wrapper className="flex flex-col gap-y-3 w-full">
          <Wrapper className="flex justify-between items-center w-full">
            <Wrapper className="flex flex-col gap-1">
              <Text className="text-[14px] font-semibold tracking-[-0.01em] text-[#2A2C29] leading-[24px]">
                {product.title}
              </Text>
              <H3 as="tag">{product.referenceNumber}</H3>
            </Wrapper>
            <Wrapper className="flex items-center gap-x-3 pr-[18px]">
              <H6 className="!font-semibold max-w-16 !leading-[24px] py-[2px] flex gap-2 px-[10px] items-center border border-light-50 rounded-[6px]">
                <Image
                  src={`/countries-flags/${product.sellerLocation.toLowerCase()}.svg`}
                  width={18.02}
                  height={11.99}
                  alt={product.sellerLocation}
                  className="rounded-[1.5px] w-[18.02px] h-[11.99px] object-cover"
                />
                {product.sellerLocation}
              </H6>
              <WishlistButton className="!bg-[#F4F4F3]" />
            </Wrapper>
          </Wrapper>
          <Wrapper className="flex flex-col md:flex-row justify-between gap-y-3 gap-x-[16px] md:gap-x-[36px] items-center w-full">
            {["box", "box", "box"].map((item, idx) => (
              <Wrapper key={idx} className="flex flex-col w-full border-child-top">
                <Wrapper className="flex items-center gap-x-6 justify-between pr-[18px] py-[2px]">
                  <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">
                    {item}
                  </Text>
                  <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">
                    {product.box}
                  </Text>
                </Wrapper>
                <Wrapper className="flex items-center gap-x-6 justify-between pr-[18px] py-[2px]">
                  <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">
                    {item}
                  </Text>
                  <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">
                    {product.incl}
                  </Text>
                </Wrapper>
                <Wrapper className="flex items-center gap-x-6 justify-between pr-[18px] py-[2px]">
                  <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">
                    {item}
                  </Text>
                  <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">
                    {product.incl}
                  </Text>
                </Wrapper>
                <Wrapper className="flex items-center gap-x-6 justify-between pr-[18px] py-[2px]">
                  <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">
                    {item}
                  </Text>
                  <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">
                    {product.incl}
                  </Text>
                </Wrapper>
              </Wrapper>
            ))}
          </Wrapper>
          <Wrapper className="flex flex-col gap-1">
          <ProductPrice className='flex-col !items-start !gap-0' item={product} />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    ))
  );
};

export default SortedProductList;
 