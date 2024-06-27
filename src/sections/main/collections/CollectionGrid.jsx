"use client";

import { products } from "@/assets/data/products";
import Container from "@/components/ui/container/Container";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import ProductGridCard from "../products/ProductGridCard";

const CollectionGrid = () => {
  return (
    <Container>
      <Wrapper className="gap-2 grid grid-cols-4 mt-6">
        {products.map((item, i) => (
          <ProductGridCard quickView={true} item={item} key={i} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default CollectionGrid;
