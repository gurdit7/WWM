
"use client"

import Wrapper from "@/components/ui/wrapper/Wrapper"
import Text from "@/components/ui/text/Text"
import Image from "next/image"
import H3 from "@/components/ui/headings/H3"
import H4 from "@/components/ui/headings/H4"
import H6 from "@/components/ui/headings/H6"
import ProductCard from "./ProductCard"
import WishlistButton from "../wishlist/wishlist-button"
import Container from "@/components/ui/container/container"

const SortedProductList = ({ sortedProducts }) => {
    return (
        sortedProducts.map((product, i) => (
                <Wrapper className="flex gap-x-[18px] mt-4 items-center">
                    <ProductCard item={product} />
                    <Wrapper className="flex flex-col gap-y-3 w-full">
                        <Wrapper className="flex justify-between items-center w-full">
                            <Wrapper className="flex flex-col gap-1">
                                <Text className="text-[14px] font-semibold tracking-[-0.01em] text-[#2A2C29] leading-[24px]">{product.title}</Text>
                                <H3 as="tag">{product.referenceNumber}</H3>
                            </Wrapper>
                            <Wrapper className="flex items-start gap-x-3">
                                <H6 className="!font-semibold max-w-16 mt-2 !leading-[24px] py-[2px] flex gap-2 px-[10px] items-center border border-light-50 rounded-[6px]">
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
                        <Wrapper className="flex justify-between gap-y-3 gap-x-[36px] items-center w-full">
                            <Wrapper className="flex flex-col gap-y-0.5 w-full">
                                <Wrapper className="flex items-center gap-x-6 justify-between pr-[18px]">
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">{product.box}</Text>
                                    <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">{product.box}</Text>
                                    <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" />
                                </Wrapper>
                            </Wrapper>
                            <Wrapper className="flex flex-col gap-y-0.5 w-full">
                                {Array(4).fill(0).map((_, idx) => (
                                    <Wrapper key={idx} className="flex items-center gap-x-6 justify-between pr-[18px]">
                                        <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                        <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                        <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" />
                                    </Wrapper>
                                ))}
                            </Wrapper>
                            <Wrapper className="flex flex-col gap-y-0.5 w-full">
                                {Array(4).fill(0).map((_, idx) => (
                                    <Wrapper key={idx} className="flex items-center gap-x-6 justify-between pr-[18px]">
                                        <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Box</Text>
                                        <Text className="text-[13px] leading-[24px] text-[#2A2C29] font-normal">Incl. Watch and papers</Text>
                                        <Wrapper className="bg-[#DCD8D8] W-full h-[1px]" />
                                    </Wrapper>
                                ))}
                            </Wrapper>
                        </Wrapper>
                        <Wrapper className="flex flex-col gap-1">
                            <H4 className="font-semibold" as="tag">€ {product.price}</H4>
                            <H6 className="font-normal">Margin</H6>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
        ))
    )
}

export default SortedProductList