"use client";

import { allWatches } from "@/assets/data/products";
import Container from "@/components/ui/container/container";
import H1 from "@/components/ui/headings/H1";
import H3 from "@/components/ui/headings/h3";
import Text from "@/components/ui/text/text";
import Wrapper from "@/components/ui/wrapper/wrapper";
import { formatNumber } from "@/utils/format-number";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Flickity from "react-flickity-component";
const SubCollections = () => {
  const path = usePathname();
  const links = path.split("/");
  let value = links[links.length - 1];
  let key = links[links.length - 1];
  if (links.length > 3) {
    key = links[links.length - 2];
  }
  const flickityOptions = {
    freeScroll: true,
    contain: true,
    groupCells: 3,
    draggable: true,
    prevNextButtons: false,
    pageDots: false,
  };

  const link = links[3]?.replace("-","_");
  return (
    <Container>
      <H1 as="tag" className="capitalize my-6">
        {value}
      </H1>
      <Flickity
        className={"carousel subcollections"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {links.length < 4 &&
          Object.keys(allWatches).map(
            (item, i) =>
              item == value &&
              Object.values(allWatches[item]).map((values, i) => (
                <SubCollectionsCard key={i} item={values} mainKey={key} />
              ))
          )}
        {links.length === 4 &&
          Object.values(allWatches[links[2]][link].children).map((values, i) => (
            <SubCollectionsCard key={i} item={values} mainKey={key} />
          ))}
      </Flickity>
    </Container>
  );
};

export default SubCollections;

export const SubCollectionsCard = ({ item, mainKey }) => {
  return (
    <Wrapper className="max-w-[275px] w-full relative bg-light-150 rounded-[10px] overflow-hidden">
      <Wrapper className="w-full pt-[101.82%] relative">
        <Image
          className="absolute w-full h-full top-0 left-0 object-cover"
          src={item.image}
          width={275}
          height={280}
          alt={" Image"}
        />
      </Wrapper>
      <Wrapper className="py-[18px] px-6">
        <Wrapper className="w-full">
          <Wrapper>
            <Text className="!leading-[24px] !font-medium text-dark-100 capitalize">
              {mainKey}
            </Text>
            <Wrapper className="flex items-center justify-between">
              <H3 className="!text-[19px] !leading-[25.88px] !font-medium mt-[2px]">
                {item.title}
              </H3>

              <Text className="!text-[12px] !leading-[16.8px] hidden md:block text-dark-100 !font-semibold rounded-[6px] border border-dark-100 py-[1px] px-[6px]">
                {formatNumber(item.productsCount)}
              </Text>
            </Wrapper>
          </Wrapper>
          <Link
            href={item?.link || ""}
            className="absolute top-0 left-0 w-full h-full"
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
