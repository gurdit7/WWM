"use client"

import Container from "@/components/ui/container/container";
import Wrapper from "@/components/ui/wrapper/wrapper";
import H3 from "@/components/ui/headings/h3";
import LinkComponent from "@/components/ui/Link";
import IconChevronRight from "../../../../public/icons/IconChevronRight";
import { featuredBrands } from "@/assets/data/brands";
import IconRolex from "../../../../public/icons/IconRolex";
import Text from "@/components/ui/text/text";
import Link from "next/link";


const BrandComponent = ({ brand }) => (
    <div className="border border-[#F4F2F0] border-solid rounded-[10px]">
        <div className="flex justify-center items-center py-[30px] px-6">
            <IconRolex />
        </div>
        <div className="flex flex-col pt-[6px] pb-3 px-3">
            {brand.products.map((product, index) => (
                <div className="flex justify-center md:justify-between py-[8.5px] px-[12px] relative items-center hover:bg-[#F8F8F7] rounded-[6px] transition duration-500" key={index}>
                    <Text className="text-[14px] lg:text-[17px]  leading-[23.15px] font-normal text-[#000]">{product.productName}</Text>
                    <Text className="!text-[12px] !leading-[16.8px] hidden md:block text-dark-100 !font-semibold rounded-[6px] border border-light-50 py-[1px] px-[6px]">{product.count}</Text>
                    <Link className="w-full h-full absolute top-0 left-0" href={product?.link || '/'}></Link>
                </div>
            ))}
        </div>
    </div>
);

const FeaturedBrands = () => {
    return (
        <Container className=" py-[24px] md:py-[65px] flex flex-col gap-y-[24px]">
            <Wrapper className="flex items-start py-[6px] md:py-0 justify-between">
                <H3>Featured brands</H3>
                <LinkComponent
                    to="/"
                    withIcon={true}
                    children={<>All watches <IconChevronRight size="24px" className="fill-dark-100" /></>}
                >
                </LinkComponent>
            </Wrapper>
            <Wrapper className="flex items-start">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  items-start gap-2 w-full">
                    {featuredBrands.map((brand, index) => (
                        <BrandComponent key={index} brand={brand} />
                    ))}
                </div>
            </Wrapper>
        </Container>
    )
}

export default FeaturedBrands