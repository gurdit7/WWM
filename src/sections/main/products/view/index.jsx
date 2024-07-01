

"use client";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import BuyButtons from "../BuyButtons"
import useTheme from "@/contexts/theme/ThemeContext"
import QuickView from "../../quick-view/QuickView"
import ProductGallary from "../ProductGallary";
import { products } from "@/assets/data/products";
import Wrapper from "@/components/ui/wrapper/wrapper";
import ProductDetails from "../ProductDetails";
import ProductImageSlider from "../ProductImageSlider";
import Container from "@/components/ui/container/container";

const index = () => {

    const { quickViewProduct } = useTheme()

    return (
        <Container className="py-[16px]" >
            <Breadcrumb />
            <Wrapper className="flex flex-col md:flex-row py-[20px] md:px-[40px] lg:px-[60px] xl:px-[100px] mx-auto md:mx-0  items-start gap-x-[8px]">
                <Wrapper className="flex-1 max-w-[532px] mx-auto md:mx-0 w-full md:min-w-[42.9%]">
                    {products[0].images
                        && <ProductImageSlider
                            images={products[0].images}
                        />}
                </Wrapper>
                <ProductDetails product={products[0]} />
            </Wrapper>
        </Container>
    )
}

export default index