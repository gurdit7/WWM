import H6 from "@/components/ui/headings/H6";
import Text from "@/components/ui/text/Text";
import Wrapper from "@/components/ui/wrapper/Wrapper";

const ProductPrice = ({ item }) => {
  return (
    <>
      <Wrapper className="flex gap-[7px] items-center">
        {item?.comparePrice && (
          <Text className="text-base font-semibold leading-[28px] line-through	text-dark-100 text-opacity-50">
            {item?.comparePrice}
          </Text>
        )}
        {item.price && (
          <Text className="text-base font-semibold leading-[28px] text-dark-100">
            {item.price}
          </Text>
        )}
        {item.taxType && <H6>{item.taxType}</H6>}
      </Wrapper>
    </>
  );
};

export default ProductPrice;
