"use client";
import Container from "@/components/ui/container/container";
import H3 from "@/components/ui/headings/h3";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Link from "next/link";
import React from "react";
import IconChevronRight from "../../../../public/icons/IconChevronRight";
import { products } from "@/assets/data/products";
import Image from "next/image";
import Text from "@/components/ui/text/text";
import Flickity from "react-flickity-component";
import ProductGridCard from "../products/product-grid-card";

const FeaturedProducts = () => {
  const flickityOptions = {
    freeScroll: true,
    contain: true,
    groupCells: 5,
    prevNextButtons: false,
    pageDots: false,
  };
  return (
    <Wrapper className="bg-[#F7F7F7] py-[65px]">
      <Container>
        <Wrapper className="flex items-center justify-between">
          <H3>Featured watches</H3>
          <Link
            className="text-[15px] font-semibold leading-[22.5px] flex gap-[14px] items-center py-2"
            href="/"
          >
            All watches
            <IconChevronRight size="24px" className="fill-dark-100" />
          </Link>
        </Wrapper>
        <Wrapper className='mt-6'>
          <Flickity
            className={"carousel featured-products"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {products.map((item, i) => (         
                <ProductGridCard item={item} key={i} />         
            ))}
          </Flickity>
        </Wrapper>
      </Container>
    </Wrapper>
  );
};

export default FeaturedProducts;
