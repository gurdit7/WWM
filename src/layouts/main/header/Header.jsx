'use client';
import Container from "@/components/ui/container/container";
import Text from "@/components/ui/text/text";
import Wrapper from "@/components/ui/wrapper/wrapper";
import SearchIconButton from "@/sections/main/search-bar/SearchIconButton";
import Link from "next/link";
import IconUser from "../../../../public/icons/IconUser";
import Image from "next/image";
import HeaderNavigation from "../nav/HeaderNavigation";
import CountryDropdown from "@/components/country-dropdown/CountryDropdown";
import { useState } from "react";
const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const openMobileMenu = ()=>{
    setOpenMenuMobile(prev => !prev);
  }
  return (
    <header>
      <Wrapper className="bg-light-150 py-[10px] max-sm-tab:py-3">
        <Container className="flex items-center justify-between ">
          <Wrapper className="flex-1 w-full">
            <Link
              href="/"
              className="block w-[176.97px] max-sm-tab:w-[48px]"
            >
              <Image
                src="/image/logo.jpg"
                width={176.97}
                height={21.68}
                alt="Logo"
                className="w-[176.97px] max-sm-tab:hidden"
              />
              <Image
                src="/image/icon.jpg"
                width={48}
                height={48}
                alt="Logo Icon"
                className="w-[48px] hidden max-sm-tab:block"
              />
            </Link>
          </Wrapper>

          <Wrapper className="w-full flex-1  max-sm-tab:hidden">
            <Text className="text-sm font-medium leading-[24px] text-center antialiased">
              World's biggest b2b watch database
            </Text>
          </Wrapper>
          <Wrapper className="flex items-center justify-end gap-x-3 flex-1  ">
           <Wrapper className='max-sm-tab:hidden'> <CountryDropdown /></Wrapper>
            <Link
              href="/login"
              className="text-sm leading-[21px] font-semibold py-3 px-4 max-sm-tab:p-0"
            >
               <Image
                src="/image/user.jpg"
                width={48}
                height={48}
                alt="User Icon"
                className="w-[48px] hidden max-sm-tab:block"
              />
              <span className="max-sm-tab:hidden flex gap-x-4 items-center whitespace-nowrap">
                <IconUser size={12} className="fill-black" /> Login / register
              </span>
            </Link>
            <button onClick={openMobileMenu} type="button" className="hidden max-sm-tab:block cursor-pointer">
            <Image
                src="/image/hamburger.png"
                width={48}
                height={48}
                alt="Hamburder Icon"
                className="w-[48px] hidden max-sm-tab:block"
              />
            </button>
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className={`py-[18px] ${openMenuMobile ? 'max-sm-tab:block' : 'max-sm-tab:hidden'}`}>
        <Container className="flex item-center justify-between">
          <HeaderNavigation />
          <SearchIconButton />
        </Container>
      </Wrapper>
    </header>
  );
};

export default Header;
