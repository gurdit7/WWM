"use client";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";
import { useEffect, useState } from "react";
import Flickity from "react-flickity-component";

const ProductImageSlider = ({ images }) => {
  const [productImages, setProductImages] = useState([]);
  useEffect(() => {
    if (images) {
      setProductImages(images);
    }
  }, [images]);
  const flickityOptions = {
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  };
  const flickityOptionsThumbs = {
    contain: true,
    prevNextButtons: false,
    groupCells: 5,
    pageDots: false,
    asNavFor: ".product-main-images-slider",
  };
  return (
    <>
      <Flickity
        className={"carousel product-main-images-slider"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {productImages.map((item, i) => (
          <Wrapper key={i} className="w-full">
            <Image
              src={item}
              alt={"Image" + i}
              width={532}
              height={532}
              className="w-full"
            />
          </Wrapper>
        ))}
      </Flickity>
      <Flickity
        className={"carousel product-thumbs-images-slider mt-2"}
        elementType={"div"}
        options={flickityOptionsThumbs}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {productImages.map((item, i) => (
          <Wrapper key={i}>
            <Image
              src={item}
              alt={"Image" + i}
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-cover rounded-[10px]"
            />
          </Wrapper>
        ))}
      </Flickity>
    </>
  );
};

export default ProductImageSlider;
