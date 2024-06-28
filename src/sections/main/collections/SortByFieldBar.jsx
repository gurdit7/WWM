"use client"

import IconHamburger from "../../../../public/icons/IconHamburger"
import IconGrid from "../../../../public/icons/IconGrid"
import ProductDropdown from "@/components/product-dropdown/ProductDropdown"
import { useEffect, useState } from "react"
import Wrapper from "@/components/ui/wrapper/Wrapper"
import Text from "@/components/ui/text/Text"
import useTheme from "@/contexts/theme/ThemeContext"
import Container from "@/components/ui/container/container"
import { products } from "@/assets/data/products"


const SortByFieldBar = () => {

    const sortProducts = (products, criterion) => {
        switch (criterion) {
            case 'popularity':
                return [...products].sort((a, b) => b.popularity - a.popularity);
            case 'relevance':
                return [...products].sort((a, b) => b.relevance - a.relevance);
            case 'priceLowToHigh':
                return [...products].sort((a, b) => a.price - b.price);
            case 'priceHighToLow':
                return [...products].sort((a, b) => b.price - a.price);
            case 'newest':
                return [...products].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            default:
                return products;
        }
    };
    const { collectionsProductsViewStyle,setCollectionsProductsViewStyle,sortedProducts,setSortedProducts, sortCriterion } = useTheme();

    useEffect(() => {
        setSortedProducts(sortProducts(products, sortCriterion));
    }, [sortCriterion]);

    return (
        <Container className="flex pt-[40px] justify-between items-center">
            <Wrapper className="">
                <Text className="text-[14px] leading-[21px] font-medium text-[#000]">{sortedProducts?.length} results</Text>
            </Wrapper>
            <Wrapper className="flex gap-x-1 rounded-[6px] border border-[#F4F4F3] items-center">
                <IconHamburger
                    onClick={() => setCollectionsProductsViewStyle("list")}
                    className={` ${collectionsProductsViewStyle === "list" && "bg-[#F4F4F3]"} cursor-pointer  p-[6px]`} />
                <IconGrid
                    onClick={() => setCollectionsProductsViewStyle("grid")}
                    className={` ${collectionsProductsViewStyle === "grid" && "bg-[#F4F4F3]"} cursor-pointer  p-[6px]`} />
            </Wrapper>
            <Wrapper className="flex items-center gap-x-[18px]">
                <Text className="text-[14px] leading-[21px] whitespace-nowrap font-medium text-[#000]">Sort By</Text>
                <ProductDropdown/>
            </Wrapper>
        </Container>
    )
}

export default SortByFieldBar
