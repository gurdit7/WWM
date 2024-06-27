import Container from "@/components/ui/container/Container";
import Wrapper from "@/components/ui/wrapper/Wrapper";
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
