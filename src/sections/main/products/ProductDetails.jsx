import Wrapper from "@/components/ui/wrapper/wrapper"
import BuyButtons from "./BuyButtons"
import H3 from "@/components/ui/headings/h3"
import WishlistButton from "../wishlist/wishlist-button"
import ProductPrice from "./ProductPrice"
import Text from "@/components/ui/text/text"
import IconUser from "../../../../public/icons/IconUser"
import H6 from "@/components/ui/headings/h6"
import Image from "next/image"
import LinkComponent from "@/components/ui/Link"
import IconArrowRight from "../../../../public/icons/IconArrowRight"
import './style.css';


const ProductDetails = ({ product }) => {
    return (
        <Wrapper className="flex flex-col w-full max-w-[532px] md:max-w-[408px] mx-auto md:mx-0 gap-[22px] py-[16px] md:py-[18px] md:px-[32px]">
            <Wrapper className="flex flex-col gap-y-[22px]">
                <Wrapper className="flex items-center gap-x-6 justify-between">
                    <Wrapper className="flex flex-col gap-y-[6px]">
                        <H3
                        className=" !text-[22px]  !leading-[29.08px] !font-semibold md:!text-[19px] md:!leading-[25.88px] md:!font-medium">
                            {product.title}
                        </H3>
                        <H3 className="!text-[17px] !leading-[23.15px] !font-medium">
                            {product.referenceNumber}
                        </H3>
                    </Wrapper>
                    <Wrapper className="hidden md:block">
                        <WishlistButton />
                    </Wrapper>
                </Wrapper>
                <Wrapper className="flex items-center   border-child-right   justify-between">
                    <Wrapper className="flex flex-col gap-y-[2px]">
                        <Text className="text-[12px] font-normal text-[#2A2C29] leading-[24px] text-left" > Year</Text>
                        <Text className="text-[16px] font-medium text-[#2A2C29] leading-[24px]" >{product.year || '-'}</Text>
                    </Wrapper>
                    <Wrapper className="flex flex-col  gap-y-[2px]">
                        <Text className="text-[12px] font-normal text-[#2A2C29] leading-[24px] text-left" > Condition</Text>
                        <Text className="text-[16px] font-medium text-[#2A2C29] leading-[24px]" >{product.condition || '-'}</Text>

                    </Wrapper>
                    <Wrapper className="flex flex-col  gap-y-[2px]">
                        <Text className="text-[12px] font-normal text-[#2A2C29] leading-[24px] text-left" > Condition</Text>
                        <Text className="text-[16px] font-medium text-[#2A2C29] leading-[24px]" >{product.condition || '-'}</Text>
                    </Wrapper>

                </Wrapper>
                <Wrapper className="flex justify-between my-[2px] items-center">
                    <ProductPrice item={product} />
                    <Text className="!text-[13px] !leading-[18.2px] text-[#2A2C29]">
                        Ex. Shipping
                    </Text>
                </Wrapper>
                <BuyButtons item={product} />
                <Text className="!leading-5 !text-[13px] text-[#5F605E] text-center">
                    This Purchase Agreement establishes the sale of the described
                    item(s) between the Seller, and the Buyer with all pertinent details
                    outlined herein.
                </Text>
            </Wrapper>
            <Wrapper>
                <Wrapper className="flex gap-[12px] items-center p-[12px] w-full bg-[#FAFAF9]">
                    <Image
                        src="/image/vintage-master.png"
                        width={41.25}
                        height={34.98}
                        alt="Logo Icon"
                    />
                    <Wrapper className="flex gap-y-[8px] flex-col w-full">
                        <Wrapper className="flex justify-between items-center w-full ">
                            <Text className="text-[#000000] font-semibold text-[13px] leading-[17.71px]">VintageMasters B.V.</Text>
                            <H6 className="!font-semibold max-w-16 !h-[22px] md:h-full !leading-[24px] py-[2px] flex gap-2 px-[10px] items-center border border-light-50 rounded-[6px]">
                                <Image
                                    src={`/countries-flags/${product.sellerLocation.toLowerCase()}.svg`}
                                    width={18.02}
                                    height={11.99}
                                    alt={product.sellerLocation}
                                    className="rounded-[1.5px] w-[18.02px] h-[11.99px] object-cover"
                                />
                                {product.sellerLocation}
                            </H6>
                        </Wrapper>
                        <Wrapper className="flex items-center">
                            <H6
                                as="tag"
                                className="border-b border-solid !text-[#000] border-[#000]"> 1200 watches |</H6>
                            <H6
                                as="tag"

                                className="border-b border-solid !text-[#000] border-[#000]" >108 Shared connections</H6>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Wrapper className="flex flex-col gap-[14px] pt-[14px] pb-[33px] h-full max-h-[125px] md:max-h-full overflow-y-auto px-[17px] border border-[#EEEDEC] rounded-md">
                <Wrapper className="flex items-center gap-x-[10px] justify-between">
                    <Text className="text-[#000] text-[13px] !leading-[17.71px] font-semibold">All info</Text>
                    <IconArrowRight className="h-[18px] w-[18px]"/>
                </Wrapper>
                <Wrapper className="border-child-top">
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                        Brand
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                        {product.title}
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Refrerence
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                        {product.referenceNumber}
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Collection
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                    Seamaster DeVille
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Year
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                        {product.year}
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Condition
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                        {product.condition}
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Location of watch
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                        {product.sellerLocation}
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Certificates
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                    Watch and papers
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Material
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                        {product.material}
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Dial color
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                    Champange
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Case Size (mm)
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                    34 mm
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Serviced?
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                      Yes
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Clasp
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                    Chrome
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    Band material
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                    Leather
                    </Text>
                </Wrapper>
                <Wrapper className="grid grid-cols-2 gap-x-[24px] py-[4px] items-start ">
                    <Text className="text-[13px]  font-normal text-[#2A2C29] !leading-[24px]">
                    ListingID
                    </Text>
                    <Text className="text-[13px]  font-medium text-[#2A2C29] !leading-[24px]">
                    456789324
                    </Text>
                </Wrapper>
                
                </Wrapper>
            </Wrapper>
        </Wrapper>

    )
}
export default ProductDetails