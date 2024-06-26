import { faqs } from '@/assets/data/faq'
import Accordions from '@/components/accordion/accordion'
import H3 from '@/components/ui/headings/h3'
import Wrapper from '@/components/ui/wrapper/wrapper'
import React from 'react'

const FAQ = () => {
  return (
 <Wrapper className='my-[65px]'>    
    <H3 className='text-5 font-semibold text-center my-[6.5px] leading-[26.44px] tracking-[-0.01em]'>Frequently asked questions</H3>
    <Wrapper className='mt-6'><Accordions items={faqs}/></Wrapper>
 </Wrapper>
  )
}

export default FAQ
