import React from "react";
import Search from "../search";
import Wrapper from "@/components/ui/wrapper/wrapper";
import FeaturedProducts from "../featured-products";
import { products } from "@/assets/data/products";
import JoinOurPlatform from "../join-our-platform";
import TrustpilotReviews from "../trustpilot-reviews";
import Newsletter from "../../newsletter/Newsletter";
import FAQ from "../faq";
import Container from "@/components/ui/container/container";

const index = () => {
  return (
    <Wrapper className="template-index">
      <Search />
      <Wrapper className="bg-[#F7F7F7] ">
        <FeaturedProducts
          heading="Featured watches"
          items={products}
          link="/"
          label="All watches"
        />
      </Wrapper>
      <FeaturedProducts
        heading="Newest watches"
        items={products}
        link="/"
        label="All watches"
      />
      <JoinOurPlatform />
      <TrustpilotReviews />
      <Wrapper className="bg-light-150">
        <Newsletter labelBgColor="!bg-light-150 top-[14px]" />
      </Wrapper>
      <Container>
        <Wrapper className="max-w-[600px] w-full bg-white mx-auto">
          <FAQ />
        </Wrapper>
      </Container>
      <Newsletter labelBgColor='top-[14px]' />
    </Wrapper>
  );
};

export default index;
