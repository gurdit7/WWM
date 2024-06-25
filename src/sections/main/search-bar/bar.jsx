'use client';
import Input from "@/components/form/input";
import Wrapper from "@/components/ui/wrapper/wrapper";
import IconSearch from "../../../../public/icons/IconSearch";
import { useState } from "react";
import ResultItem from "./result-item";

const Bar = () => {
  const [search, setSearch] = useState();
  const getSearch = (e)=>{
    setSearch(e.target.value)
  }
  return (
    <Wrapper className='relative'>
    <Wrapper className='relative'>
    <Input type='text' placeholder='Search type or number..' setInputData={getSearch} value={search || ''} />
    <Wrapper className='absolute right-6 top-[18px]'><IconSearch size='24px' /></Wrapper>
    </Wrapper>
    <ResultItem query={search} />
    </Wrapper>
  );
}

export default Bar;
