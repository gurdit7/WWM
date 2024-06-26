import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";
import React from "react";
import ProductBadge from "./product-badge";
import H3 from "@/components/ui/headings/h3";
import Text from "@/components/ui/text/text";
import WishlistButton from "../wishlist/wishlist-button";
import ProductPrice from "./product-price";
import { countries } from "@/assets/data/countries";
import H6 from "@/components/ui/headings/h6";

const ProductGridCard = ({ item }) => {
  return (
    <Wrapper className="max-w-[265px] w-full">
      <Wrapper className="w-full pt-[100%] relative">
        <Image
          className="absolute w-full h-full top-0 left-0 object-cover rounded-[10px] border border-light-50"
          src={item.image}
          width={265}
          height={265}
          alt={item.title + " Image"}
        />
        <ProductBadge>Sponsored </ProductBadge>
      </Wrapper>
      <Wrapper className="my-2">
        <Wrapper className="flex items-center justify-between gap-6 mb-2">
          <Wrapper>
            <H3 className="!text-sm !leading-[24px]">{item?.title}</H3>
            <Text className="!text-[17px] !leading-[23.15px] !font-medium">
              {item?.referenceNumber}
            </Text>
          </Wrapper>
          <WishlistButton />
        </Wrapper>
        <Text className='!leading-[24px] text-dark-100'>{item?.incl}</Text>
        <Wrapper className="flex items-center justify-between gap-6 mt-3">
            <ProductPrice item={item}/>
            {countries.map((country, i)=>(
              country.label === item.sellerLocation && (
                <H6 key={i} className="!font-semibold !leading-[24px] py-[2px] flex gap-2 px-[10px] items-center border border-light-50 rounded-[6px]">
                  <Image                   
                  src={country?.icon?.src}
                  width={18.02}
                  height={11.99}
                  alt={country.label}
                  className="rounded-[1.5px] w-[18.02px] h-[11.99px] object-cover"
                />
                {country.code}
              </H6>
            )
          ))}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default ProductGridCard;
