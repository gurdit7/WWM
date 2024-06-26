import LinkComponent from '@/components/ui/Link'
import H2 from '@/components/ui/headings/h2'
import Text from '@/components/ui/text/text'
import Wrapper from '@/components/ui/wrapper/wrapper'
import React from 'react'
import JoinOurPlatformImage from '../../../../public/image/join-our-platform.png'
import Image from 'next/image'
const JoinOurPlatform = () => {
  return (
    <Wrapper className='max-w-[1216px] mx-auto px-[100px]'>        
    <Wrapper className='bg-light-150 rounded-[10px] overflow-hidden min-h-[359px] flex items-center justify-between my-[65px]'>
        <Wrapper className='py-16 ml-[65px] max-w-[387px]'>
            <H2 className='text-center'>
            More then 1200 watch dealers joined WorldWatch Market
            </H2>
            <Text className="mt-[18px] text-center !text-sm mb-[26px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
            </Text>
            <LinkComponent to={'/'}>
            Join our platform
            </LinkComponent>
            <Text className='!text-[13px] !leading-[18.2px] text-center mt-2'>
           <strong className='font-semibold'>15% discount</strong>  in the first month
            </Text>
        </Wrapper>
        <Wrapper>
            <Image
            src={JoinOurPlatformImage.src}
            width={JoinOurPlatformImage.width}
            height={JoinOurPlatformImage.height}
            alt='Join Our Platform Image'
            className='object-cover h-full'
            />
        </Wrapper>
        </Wrapper>
        </Wrapper>
  )
}

export default JoinOurPlatform
