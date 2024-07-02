'use client';
import H6 from "@/components/ui/headings/h6";
import Text from "@/components/ui/text/text";
import Wrapper from "@/components/ui/wrapper/wrapper";
import useCurrency from "@/contexts/currency-provider/CurrencyProvider";
import { formatPrice } from "@/utils/format-currency";
import { useEffect } from "react";

const ProductPrice = ({ item, className }) => {
  const {currencyPrice, selectedCountry, currencyCode} = useCurrency();

  
  return (
    <>
      <Wrapper className={"flex gap-[7px] items-center " + (className || '')}>
        {item?.comparePrice && (
          <Text className="text-base font-semibold leading-[28px] line-through	text-dark-100 text-opacity-50">
            { formatPrice('US', (item?.comparePrice * currencyPrice).toFixed(6) ,currencyCode) }
          </Text>
        )}
        {item.price && (
          <Text className="text-base font-semibold leading-[28px] text-dark-100">
            {formatPrice('US', (item?.price * currencyPrice).toFixed(3) , (currencyCode || 'EUR' ))}
          </Text>
        )}
         {item.taxType && <H6>{item.taxType}</H6>}
      </Wrapper>
    </>
  );
};

export default ProductPrice;
