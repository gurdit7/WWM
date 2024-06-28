import Container from "@/components/ui/container/container";
import Wrapper from "@/components/ui/wrapper/wrapper";
import FilterModal from "./FilterModal";

const FilterBar = () => {
  return (
    <Container>
      <Wrapper>
        <FilterModal />
      </Wrapper>
    </Container>
  );
};

export default FilterBar;
