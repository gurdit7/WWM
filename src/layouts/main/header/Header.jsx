import Container from "@/components/ui/container/container";
import Text from "@/components/ui/text/text";
import Wrapper from "@/components/ui/wrapper/wrapper";
import HeaderNavigation from "../nav/header-navigation";
import SearchIconButton from "@/sections/main/search-bar/SearchIconButton";
import CountryDropdown from "@/components/country-dropdown/country-dropdown";

const Header = () => {
  return (
    <header>
      <Wrapper className="bg-light-100 py-[10px]">
        <Container className="flex item-center justify-between">
          <Wrapper></Wrapper>

          <Wrapper className="w-full">
            <Text className="text-sm font-medium leading-[24px] text-center antialiased">
              World's biggest b2b watch database
            </Text>
          </Wrapper>
          <Wrapper>
            <CountryDropdown />
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className='py-[18px]'>
        <Container className="flex item-center justify-between">
          <HeaderNavigation />
          <SearchIconButton />
        </Container>
      </Wrapper>
    </header>
  );
};

export default Header;
