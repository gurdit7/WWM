import Container from "@/components/ui/container/Container"
import Wrapper from "@/components/ui/wrapper/wrapper"
import IconHumburger from "../../../../../public/icons/IconHamburger"
import IconGrid from "../../../../../public/icons/IconGrid"
import CountryDropdown from "@/components/country-dropdown/CountryDropdown"

const SortCollections = () => {
    return (
        <Container>
            <Wrapper className="flex justify-between items-center">
                <Text className="text-[14px] leading-[21px] font-medium text-[#000]">76.928 results</Text>
            </Wrapper>
            <Wrapper className="flex gap-x-1 items-center">
                <IconHumburger />
                <IconGrid />
            </Wrapper>
            <Wrapper
                className="flex items-center gap-x-2"
            >
                <Text>Sort By</Text>
                <CountryDropdown />
            </Wrapper>

        </Container>
    )
}
export default SortCollections