import { featuredBrands } from "@/assets/data/brands";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Container from "@/components/ui/container/container";
import H1 from "@/components/ui/headings/h1";
import Wrapper from "@/components/ui/wrapper/wrapper";
import { BrandComponent } from "@/sections/main/home/FeaturedBrands";
import React from "react";

const page = () => {
  return (
    <>
    <Breadcrumb />
    <Container>       
      <H1 className='my-6' as={'tag'}>All Watches</H1>
      <Wrapper className="grid mb-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  items-start gap-2 w-full">
        {featuredBrands.map((brand, index) => (
          <BrandComponent key={index} brand={brand} />
        ))}
      </Wrapper>
    </Container>
    </>
  );
};

export default page;
