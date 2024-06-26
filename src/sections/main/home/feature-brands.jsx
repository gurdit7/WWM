"use client"

import Container from "@/components/ui/container/container";
import Wrapper from "@/components/ui/wrapper/wrapper";
import H3 from "@/components/ui/headings/h3";
import LinkComponent from "@/components/ui/Link";
import IconChevronRight from "../../../../public/icons/IconChevronRight";
import { featuredBrands } from "@/assets/data/brands";
import IconRolex from "../../../../public/icons/IconRolex";
import Text from "@/components/ui/text/text";


const BrandComponent = ({ brand }) => (
    <div className="border border-[#F4F2F0] border-solid px-4 rounded-[10px]">
        <div className="flex justify-center items-center py-[30px]">
            <IconRolex />
        </div>
        <div className="flex flex-col ">
            {brand.products.map((product, index) => (
                <div className="flex justify-between py-[10px] px-[12px] items-center" key={index}>
                    <Text className="text-[14px] lg:text-[17px] leading-[23.15px] font-normal text-[#000]">{product.productName}</Text>
                    <Text className="text-[12px] leading-[16.8px] text-[#000] font-semibold">{product.count}</Text>
                </div>
            ))}
        </div>
    </div>
);

const FeaturedBrands = () => {
    return (
        <Container className="py-[65px] flex flex-col gap-y-[24px]">
            <Wrapper className="flex items-start justify-between">
                <H3>Featured brands</H3>
                <LinkComponent
                    to="/"
                    withIcon={true}
                    children={<>All watches <IconChevronRight size="24px" className="fill-dark-100" /></>}
                >
                </LinkComponent>
            </Wrapper>
            <Wrapper className="flex items-start">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  items-start gap-2 w-full">
                    {featuredBrands.map((brand, index) => (
                        <BrandComponent key={index} brand={brand} />
                    ))}
                </div>
            </Wrapper>
        </Container>
    )
}

export default FeaturedBrands