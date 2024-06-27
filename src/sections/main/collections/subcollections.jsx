'use client';

import H3 from "@/components/ui/headings/H3";
import Text from "@/components/ui/text/Text";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubCollections = () => { 
 const path = usePathname();
 console.log(path);
  return (
    <Wrapper className="max-w-[275px] w-full relative bg-light-150">
   
      <Wrapper className="w-full pt-[101.82%] relative">
        <Image
          className="absolute w-full h-full top-0 left-0 object-cover"
          src='https://cdn2.chrono24.com/images/topmodels/66-z0iag46qamnxzkmi3q83tty6-Main.png'
          width={275}
          height={280}
          alt={" Image"}
        />        
      </Wrapper>
      <Wrapper className="py-[18px] px-6">
        <Wrapper className="flex items-center justify-between gap-6 mb-2">
          <Wrapper>
          <Text className="!leading-[24px] !font-medium text-dark-100">
              Omega
            </Text>
            <H3 className="!text-sm !leading-[24px]">
            Seamaster</H3>     
          </Wrapper>
          <Wrapper></Wrapper>
          <Link href={'/products'} className="absolute top-0 left-0 w-full h-full" />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default SubCollections
