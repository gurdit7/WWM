"use client";
import Container from "@/components/ui/container/Container";
import H3 from "@/components/ui/headings/H3";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import React, { useEffect, useState } from "react";
import IconChevronRight from "../../../../public/icons/IconChevronRight";
import Flickity from "react-flickity-component";
import ProductGridCard from "../products/ProductGridCard";
import LinkComponent from "@/components/ui/Link";

const FeaturedProducts = ({ heading, link, label, items }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (items) {
      setProducts(items);
    }
  }, [items]);
  const flickityOptions = {
    freeScroll: true,
    contain: true,
    groupCells: 5,
    prevNextButtons: false,
    pageDots: false,
  };
  return (
    <Wrapper className="py-[65px]">
      <Container>
        <Wrapper className="flex items-center justify-between">
          <H3>{heading}</H3>
          <LinkComponent withIcon={true} to={link}>
            {label}
            <IconChevronRight size="24px" className="fill-dark-100" />
          </LinkComponent>
        </Wrapper>
        <Wrapper className="mt-6">
          <Flickity
            className={"carousel featured-products"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {products.map((item, i) => (
              <ProductGridCard item={item} key={i}/>
            ))}
          </Flickity>
        </Wrapper>
      </Container>
    </Wrapper>
  );
};

export default FeaturedProducts;
