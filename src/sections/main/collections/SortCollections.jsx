"use client"

import Container from "@/components/ui/container/Container"
import IconHumburger from "../../../../public/icons/IconHamburger"
import IconGrid from "../../../../public/icons/IconGrid"
import ProductDropdown from "@/components/product-dropdown/ProductDropdown"
import { useState, useEffect } from "react"
import { products } from "@/assets/data/products"
import ProductCard from "./ProductCard"
import CountryDropdown from "@/components/country-dropdown/CountryDropdown"
import H3 from "@/components/ui/headings/H3"
import Wrapper from "@/components/ui/wrapper/Wrapper"
import Text from "@/components/ui/text/Text"

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

const SortCollections = () => {
    const [sortedProducts, setSortedProducts] = useState(products);
    const [sortCriterion, setSortCriterion] = useState('popularity');
    const [selectedTab, setSelectedTab] = useState("humburger")

    useEffect(() => {
        setSortedProducts(sortProducts(products, sortCriterion));
    }, [sortCriterion]);

    return (

        <Container className="flex flex-col gap-y-3">
            <Wrapper className="flex justify-between items-center">
                <Wrapper className="">
                    <Text className="text-[14px] leading-[21px] font-medium text-[#000]">76.928 results</Text>
                </Wrapper>
                <Wrapper className="flex gap-x-1 rounded-[6px] border border-[#F4F4F3] items-center">
                    <IconHumburger
                        onClick={() => setSelectedTab("humburger")}
                        className={` ${selectedTab === "humburger" && "bg-[#F4F4F3]"} cursor-pointer  p-[6px]`} />
                    <IconGrid
                        onClick={() => setSelectedTab("grid")}
                        className={` ${selectedTab === "grid" && "bg-[#F4F4F3]"} cursor-pointer  p-[6px]`} />
                </Wrapper>
                <Wrapper
                    className="flex items-center gap-x-2"
                >
                    <Text className="text-[14px] leading-[21px] whitespace-nowrap font-medium text-[#000]">Sort By</Text>
                    <ProductDropdown
                        onSortChange={setSortCriterion}
                    />
                </Wrapper>
            </Wrapper>
            {sortedProducts.map((product, i) => (
                <Wrapper key={i} className="p-4 flex gap-x-[18px] items-center border rounded-lg">
                    <ProductCard
                        item={product}
                    />
                    <Wrapper className="flex flex-col w-full">
                        <Wrapper className="flex justify-between items-center w-full">
                            <Wrapper className="flex flex-col gap-1">
                                <Text className="text-[14px] font-semibold tracking-[-0.01em] text-[#2A2C29] leading-[24px]">Omega</Text>
                                <H3
                                    as="tag"
                                >1317.021</H3>
                            </Wrapper>
                            <Wrapper>
                                <CountryDropdown />
                            </Wrapper>
                        </Wrapper>
                        <Wrapper className="flex justify-between gap-y-3 items-center w-full">
                            <Wrapper className="flex flex-col gap-y-0.5">
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                            </Wrapper>
                            <Wrapper className="flex flex-col gap-y-0.5">
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                            </Wrapper>
                            <Wrapper className="flex flex-col gap-y-0.5">
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>

                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>

                                <Wrapper className="flex items-center gap-x-6 ">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                </Wrapper>
                                <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" ></Wrapper>
                            </Wrapper>


                        </Wrapper>
                    </Wrapper>

                </Wrapper>
            ))}
        </Container>
    )
}
export default SortCollections