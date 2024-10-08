'use client';
import Search from "../Search";
import React, { useEffect } from 'react'
import FeaturedProducts from "../FeaturedProducts";
import { products } from "@/assets/data/products";
import JoinOurPlatform from "../JoinOurPlatform";
import TrustpilotReviews from "../TrustpilotReviews";
import Newsletter from "../../newsletter/Newsletter";
import FAQ from "../faq";
import Container from "@/components/ui/container/container";
import Wrapper from '@/components/ui/wrapper/wrapper'
import FeaturedBrands from '../FeaturedBrands'
import BusinessWatchPlatform from '../BusinessWatchPlatform'
import useTheme from "@/contexts/theme/ThemeContext";

const index = () => {
  const {setHideHeader, setHideFooter} = useTheme();
  useEffect(()=>{
      setHideHeader(false);
      setHideFooter(false);
  },[])
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
      <FeaturedBrands
      
      />

      <FeaturedProducts
        heading="Newest watches"
        items={products}
        link="/"
        label="All watches"
      />
      <JoinOurPlatform />
      <TrustpilotReviews />
      <BusinessWatchPlatform/>

      <Wrapper className="bg-light-150">
        <Newsletter labelBgColor="!bg-light-150 !top-[14px] peer-focus:!top-[-9px]" />
      </Wrapper>
      <Container>
        <Wrapper className="max-w-[600px] w-full bg-white mx-auto">
          <FAQ />
        </Wrapper>
      </Container>
      <Newsletter labelBgColor='!top-[14px] peer-focus:!top-[-9px]' />
    </Wrapper>
  );
};

export default index;
