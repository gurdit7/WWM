'use client';
import Wrapper from '@/components/ui/wrapper/Wrapper'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Vertical = ({heading, items}) => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      if (items) {
        setMenu(items);
      }
    }, [items]);
  return (
   <Wrapper className='w-full'>
        <Wrapper className='text-black text-[15px] font-semibold leading-[22.5px]'>{heading}</Wrapper>
        <ul className='mt-2'>
            {menu.map((item, index)=>(
                <li className='flex' key={index}>
                    <Link href={item?.link} className='!text-sm !leading-[24px] block'>{item.label}</Link>
                </li>
            ))}            
        </ul>
   </Wrapper>
  )
}

export default Vertical
