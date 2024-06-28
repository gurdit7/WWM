import Button from '@/components/form/button'
import Wrapper from '@/components/ui/wrapper/wrapper'
import IconWhatsApp from '../../../../public/icons/IconWhatsApp'
const BuyButtons = ({item}) => {
  return (
    <Wrapper>
<Button color='black' type='button' btnType='solid'>Buy now</Button>
<Button color='light-green' type='button' btnType='solid' additionalCss='flex justify-center items-center mt-2 border border-white border-opacity-50 shadow-3xl'>
    <IconWhatsApp className='fill-[#25D366] w-[19.06px] h-[20.01px]' />
</Button>
    </Wrapper>
    
  )
}

export default BuyButtons
