"use client";

import IconHamburger from "../../../../public/icons/IconHamburger";
import IconGrid from "../../../../public/icons/IconGrid";
import ProductDropdown from "@/components/product-dropdown/ProductDropdown";
import { useEffect, useState } from "react";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Text from "@/components/ui/text/text";
import useTheme from "@/contexts/theme/ThemeContext";
import Container from "@/components/ui/container/container";
import { allWatches, products } from "@/assets/data/products";
import { usePathname } from "next/navigation";

const SortByFieldBar = () => {
  const path = usePathname();
  const sortProducts = (products, criterion) => {
    switch (criterion) {
      case "popularity":
        return [...products].sort((a, b) => b.popularity - a.popularity);
      case "relevance":
        return [...products].sort((a, b) => b.relevance - a.relevance);
      case "priceLowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].sort(
          (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
        );
      default:
        return products;
    }
  };
  const {
    collectionsProductsViewStyle,
    setCollectionsProductsViewStyle,
    sortedProducts,
    setSortedProducts,
    sortCriterion,
  } = useTheme();

  useEffect(() => {   
    const links = path.split("/");
    const value = links[links.length - 1].replace("-","_");
    const link = links[3]?.replace("-","_");
    let products = allWatches[links[2]]?.products || [];
    if(links.length === 4){
      products = allWatches[links[2]][link]?.products || [];
    }
    setSortedProducts(sortProducts(products, sortCriterion));
  }, [sortCriterion]);

  return (
    <Container className="flex pt-8 mb-6 justify-between items-center">
      <Wrapper className="flex-1">
        <Text className="text-[14px] leading-[21px] font-medium text-[#000]">
          {sortedProducts?.length} results
        </Text>
      </Wrapper>
      <Wrapper className='flex-1 flex justify-center'>
      <Wrapper className="flex gap-x-1 rounded-[6px] border border-[#F4F4F3] items-center">
          <button
          type="button"
          onClick={() => setCollectionsProductsViewStyle("list")}
          className={` ${
            collectionsProductsViewStyle === "list" && "bg-[#F4F4F3]"
          } cursor-pointer  w-[42px] h-[42px] flex justify-center items-center`}
        >
          <IconHamburger color='fill-dark-100' className='w-[14.17px] h-[14.17px]' />
        </button>
        <button
          type="button"
          onClick={() => setCollectionsProductsViewStyle("grid")}
          className={` ${
            collectionsProductsViewStyle === "grid" && "bg-[#F4F4F3]"
          } cursor-pointer  w-[42px] h-[42px] flex justify-center items-center`}
        >
          <IconGrid color='stroke-dark-100' className='w-[14.17px] h-[14.17px]' />
        </button>
      </Wrapper>
      </Wrapper>
      <Wrapper className='flex-1  flex justify-end'>
      <Wrapper className="flex  items-center gap-x-[18px] ">
        <Text className="text-[14px] hidden md:block leading-[21px] whitespace-nowrap font-medium text-[#000]">
          Sort By
        </Text>
        <ProductDropdown />
      </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default SortByFieldBar;
