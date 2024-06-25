import React from 'react'
import Search from '../Search'
import Wrapper from '@/components/ui/wrapper/wrapper'
import FeaturedProducts from '../featured-products'

const index = () => {
  return (
    <Wrapper className='template-index'>
      <Search />
      <FeaturedProducts />
    </Wrapper>
  )
}

export default index
