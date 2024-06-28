import Wrapper from '@/components/ui/wrapper/wrapper'
import React from 'react'
import IconClose from '../../../../public/icons/IconClose'
import ProductImageSlider from '../products/ProductImageSlider'
import H3 from '@/components/ui/headings/h3'
import WishlistButton from '../wishlist/wishlist-button'
import ProductPrice from '../products/ProductPrice'
import BuyButtons from '../products/BuyButtons'
import Text from '@/components/ui/text/text'
import useTheme from '@/contexts/theme/ThemeContext'
const QuickView = ({product}) => {
 const {setQuickViewProduct} = useTheme();
 const closePopup = ()=>{
    setQuickViewProduct(false);
 }
  return (
    <Wrapper className="fixed  w-full h-full z-[99999] bg-dark-100 bg-opacity-50 top-0 left-0 flex justify-center items-center">
    <Wrapper className="max-w-[580px] rounded-[10px] bg-white w-full scroll-bar-hide overflow-auto max-h-[90vh] px-6 py-3">
      <Wrapper className="flex justify-end py-3">
        <button className="" onClick={closePopup}>
          <IconClose size={30} className="fill-dark-100" />
        </button>
      </Wrapper>
      <ProductImageSlider images={product.images} />
      <Wrapper className="py-6 px-3">
        <Wrapper className="flex items-center gap-x-6 justify-between">
          <Wrapper className="">
            <H3 className="!text-[19px] !leading-[25.88px] !font-medium">
              {product.title}
            </H3>
            <H3 className="!text-[17px] !leading-[23.15px] !font-medium">
              {product.referenceNumber}
            </H3>
          </Wrapper>
          <Wrapper className="">
            <WishlistButton />
          </Wrapper>
        </Wrapper>
        <table className="w-full mt-6 table-fixed">
          <tbody>
            <tr className="pb-1">
              <th className="text-sm font-normal text-dark-100 leading-6 text-left">
                Brand
              </th>
              <td className="text-sm font-medium text-dark-100 leading-6">
                {product.brand}
              </td>
            </tr>
            <tr className="py-1 border-t border-light-50">
              <th className="text-sm font-normal text-dark-100 leading-6 text-left">
                Refrerence
              </th>
              <td className="text-sm font-medium text-dark-100 leading-6">
                {product.referenceNumber}
              </td>
            </tr>
            <tr className="py-1 border-t border-light-50">
              <th className="text-sm font-normal text-dark-100 leading-6 text-left">
                Collection
              </th>
              <td className="text-sm font-medium text-dark-100 leading-6">
                {product.collection}
              </td>
            </tr>
            <tr className="py-1 border-t border-light-50">
              <th className="text-sm font-normal text-dark-100 leading-6 text-left">
                Year
              </th>
              <td className="text-sm font-medium text-dark-100 leading-6">
                {product.year}
              </td>
            </tr>
            <tr className="pt-1 border-t border-light-50">
              <th className="text-sm font-normal text-dark-100 leading-6 text-left">
                Condition
              </th>
              <td className="text-sm font-medium text-dark-100 leading-6">
                {product.condition}
              </td>
            </tr>
          </tbody>
        </table>
        <Wrapper className="flex justify-between items-center my-6">
          <ProductPrice item={product} />
          <Text className="!text-[13px] !leading-[18.2px] text-dark-100">
            Ex. Shipping
          </Text>
        </Wrapper>
        <BuyButtons item={product} />
        <Text className="mt-6  !leading-5 !text-[13px] text-[#5F605E] text-center">
          This Purchase Agreement establishes the sale of the described
          item(s) between the Seller, and the Buyer with all pertinent
          details outlined herein.
        </Text>
      </Wrapper>
    </Wrapper>
  </Wrapper>
  )
}

export default QuickView
