import Text from "@/components/ui/text/text";

const ProductBadge = ({ children,className }) => {
  return <Text className={`!text-[11px] z-[1]  ${className} !leading-[24px] !font-semibold bg-white px-2 rounded-[4px] text-dark-100 absolute top-3 left-3`}>{children}</Text>;
};

export default ProductBadge;
