"use client"

import IconHamburger from "../../../../public/icons/IconHamburger"
import IconGrid from "../../../../public/icons/IconGrid"
import ProductDropdown from "@/components/product-dropdown/ProductDropdown"
import { useState } from "react"
import Wrapper from "@/components/ui/wrapper/Wrapper"
import Text from "@/components/ui/text/Text"
import useTheme from "@/contexts/theme/ThemeContext"
import Container from "@/components/ui/container/container"

const SortByFieldBar = () => {
    const { collectionsProductsViewStyle,setCollectionsProductsViewStyle} = useTheme();
    return (
        <Container className="flex pt-[40px] justify-between items-center">
            <Wrapper className="">
                <Text className="text-[14px] leading-[21px] font-medium text-[#000]">76.928 results</Text>
            </Wrapper>
            <Wrapper className="flex gap-x-1 rounded-[6px] border border-[#F4F4F3] items-center">
                <IconHamburger
                    onClick={() => setCollectionsProductsViewStyle("humburger")}
                    className={` ${collectionsProductsViewStyle === "humburger" && "bg-[#F4F4F3]"} cursor-pointer  p-[6px]`} />
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
