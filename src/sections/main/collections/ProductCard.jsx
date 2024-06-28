
import Wrapper from "@/components/ui/wrapper/wrapper"
import Image from "next/image"
import ProductBadge from "../products/ProductBadge"

const ProductCard = ({ item }) => {
    return (
        <Wrapper className="relative">
        <Image
          className="h-[268px] min-w-[192px]"
          src={item.image}
          width={192}
          height={268}
          alt={item.title + " Image"}
        />
        <ProductBadge>Sponsored</ProductBadge>
      </Wrapper>
    )
}

export default ProductCard