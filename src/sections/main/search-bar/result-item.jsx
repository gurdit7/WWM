'use client';
import { products } from "@/assets/data/products";
import Text from "@/components/ui/text/text";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ResultItem = ({ query }) => {
  const [items, setItems] = useState([]);
    useEffect(()=>{
      const array = [];
      products.map((item)=>{
        if(!array.includes(item.title)){
          array.push(item.title)
        }
      })
      setItems(array);
    },[products])
  const itemsString = items.toString();
  return (
    <Wrapper
      className={`bg-white flex top-full absolute w-full mt-6 rounded-[8px] overflow-hidden z-10 transition-all duration-500 ${
        query ? "max-h-[2000px]" : "max-h-0"
      }`}
    >
      <Wrapper className="w-full max-w-[300px] p-6 pt-3">
        <label className="text-sm leading-[28px] font-medium block">
          Search result
        </label>
        {query ? (
          <ul className="mt-3 max-h-[342px] overflow-y-auto scroll-bar-hide">
            {items.map(
              (item, i) =>
                item.includes(query) && (
                  <li
                    className="text-[#ADADAE] leading-[35.2px] text-base py-1 px-2 rounded-[6px] hover:bg-[#F4F4F3] transition-color cursor-pointer duration-300"
                    key={i}
                  >
                    <span className="text-dark-100">{query}</span>
                    <span>{item.split(query)[1]}</span>
                  </li>
                )
            )}
          </ul>
        ) : (
          <Text>Not Found</Text>
        )}
        {!itemsString.includes(query) && <Text>Not Found</Text>}
      </Wrapper>
      <Wrapper className="w-full bg-light-100 p-6 pt-3">
        <label className="text-sm leading-[28px] font-medium block">
          Products
        </label>
        {query ? (
          <ul className="mt-3 flex flex-col gap-2 max-h-[342px] overflow-y-auto scroll-bar-hide">
            {products.map(
              (item, i) =>
                item.title.includes(query) && (
                  <li
                    className="bg-white py-[6px] relative pl-1 pr-[26px] w-full flex gap-4 rounded-[5px] cursor-pointer duration-300"
                    key={i}
                  >
                    <Wrapper>
                      <Image
                        className="w-[50px] h-[50px] min-w-[50px] min-h-[50px] object-cover rounded-[5px]"
                        src={item.image}
                        width={50}
                        height={50}
                        alt={item.title + "Main Image"}
                      />
                    </Wrapper>
                    <Wrapper className="w-full">
                      <Text className="!leading-[24px] !font-semibold -tracking-[0.14px]">
                        {item.title}
                      </Text>
                      <Text className="!leading-[24px] ">
                        {item.referenceNumber}
                      </Text>
                    </Wrapper>
                    <Wrapper>
                      <Text className="!leading-[24px] text-dark-100 whitespace-nowrap text-right">
                        {item.price}
                      </Text>
                      <Text className="!leading-[24px] text-dark-100 text-right">
                        {item.taxType}
                      </Text>
                    </Wrapper>
                    <Link
                      href={item.url}
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </li>
                )
            )}
          </ul>
        ) : (
          <Text>Not Found</Text>
        )}
        {products.map((item, i) => {
          if (!item.title.includes(query) && i === 0) {
            return <Text>Not Found</Text>;
          }
        })}
      </Wrapper>
    </Wrapper>
  );
};

export default ResultItem;
