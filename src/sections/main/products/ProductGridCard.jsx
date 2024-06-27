import Wrapper from "@/components/ui/wrapper/Wrapper";
import Image from "next/image";
import React from "react";
import ProductBadge from "./ProductBadge";
import H3 from "@/components/ui/headings/H3";
import Text from "@/components/ui/text/Text";
import WishlistButton from "../wishlist/wishlist-button";
import ProductPrice from "./ProductPrice";
import H6 from "@/components/ui/headings/H6";
import Link from "next/link";
import Button from "@/components/form/button";
const ProductGridCard = ({ item, quickView }) => {
  return (
    <Wrapper
      className={`${
        quickView ? "p-[6px] border border-light-150 rounded-[10px] w-full" : " max-w-[265px]"
      }  w-full relative `}
    >
      <Wrapper className="w-full pt-[100%] relative">
        <Image
          className={`absolute w-full h-full top-0 left-0 object-cover rounded-[10px] ${quickView ? "" : " border border-light-50"}`}
          src={item.image}
          width={265}
          height={265}
          alt={item.title + " Image"}
        />
        <ProductBadge>Sponsored </ProductBadge>
      </Wrapper>
      <Wrapper className={` ${quickView ? "p-3" : " my-2"} `}>
        <Wrapper className="flex items-center justify-between gap-6 mb-2">
          <Wrapper>
            <H3 className="!text-sm !leading-[24px]">{item?.title}</H3>
            <Text className="!text-[17px] !leading-[23.15px] !font-medium">
              {item?.referenceNumber}
            </Text>
          </Wrapper>
          <WishlistButton />
          <Link
            href={item?.url || "/products"}
            className="absolute top-0 left-0 w-full h-full"
          />
        </Wrapper>
        <Text className="!leading-[24px] text-dark-100">{item?.incl}</Text>
        <Wrapper
          className={`flex items-center justify-between gap-6 ${
            quickView ? " mt-6" : " mt-3 "
          }`}
        >
          <Wrapper>
            {quickView && (
              <H6 className="!font-semibold max-w-16 mb-2 !leading-[24px] py-[2px] flex gap-2 px-[10px] items-center border border-light-50 rounded-[6px]">
                <Image
                  src={`/countries-flags/${item.sellerLocation.toLowerCase()}.svg`}
                  width={18.02}
                  height={11.99}
                  alt={item.sellerLocation}
                  className="rounded-[1.5px] w-[18.02px] h-[11.99px] object-cover"
                />
                {item.sellerLocation}
              </H6>
            )}
            <ProductPrice item={item} />
          </Wrapper>
          {quickView ? (
            <Button
              btnType="solid"
              type="button"
              color="black"
              additionalCss="!max-w-[117px] !px-1 relative z-[10]"
            >
              Quick View
            </Button>
          ) : (
            <H6 className="!font-semibold !leading-[24px] py-[2px] flex gap-2 px-[10px] items-center border border-light-50 rounded-[6px]">
              <Image
                src={`/countries-flags/${item.sellerLocation.toLowerCase()}.svg`}
                width={18.02}
                height={11.99}
                alt={item.sellerLocation}
                className="rounded-[1.5px] w-[18.02px] h-[11.99px] object-cover"
              />
              {item.sellerLocation}
            </H6>
          )}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ProductGridCard;
