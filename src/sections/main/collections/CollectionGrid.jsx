"use client";

import Container from "@/components/ui/container/Container";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import ProductGridCard from "../products/ProductGridCard";
import useTheme from "@/contexts/theme/ThemeContext";


const CollectionGrid = () => {
  const { sortedProducts } = useTheme()

  return (
    <Container>
      <Wrapper className="gap-2 grid grid-cols-4 mt-6">
        {sortedProducts.map((item, i) => (
          <ProductGridCard quickView={true} item={item} key={i} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default CollectionGrid;
