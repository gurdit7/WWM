"use client";
import Wrapper from "@/components/ui/wrapper/wrapper";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Flickity from "react-flickity-component";
import ProductBadge from "./ProductBadge";

const ProductImageSlider = ({ images }) => {
  const [productImages, setProductImages] = useState([]);
  const flickityRef = useRef(null);
  const flickityThumbRef = useRef(null);
  const goToSlide = (index) => {
    if (flickityRef.current) {
      flickityRef.current.select(index);
    }
    if (flickityThumbRef.current) {
      flickityThumbRef.current.select(index);
    }
  };
  useEffect(() => {
    if (flickityRef?.current) {
      flickityRef.current.on("change", () => {
        goToSlide(flickityRef?.current.selectedIndex);
      });
    }
  }, [flickityRef?.current]);
  useEffect(() => {
    if (images) {
      setProductImages(images);
    }
  }, [images]);
  const flickityOptions = {
    prevNextButtons: false,
    pageDots: false,
    adaptiveHeight: true,
  };
  const flickityOptionsThumbs = {
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    asNavFor: ".product-main-images-slider",
  };

  return (
    <>
      <Wrapper className="relative">
        <ProductBadge>Sponsored </ProductBadge>
        <Flickity
          flickityRef={(c) => (flickityRef.current = c)}
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
                height={354}
                className="w-full rounded-[10px] h-auto"
              />
            </Wrapper>
          ))}
        </Flickity>
      </Wrapper>
      <Flickity
        flickityRef={(c) => (flickityThumbRef.current = c)}
        className={"carousel product-thumbs-images-slider mt-2"}
        elementType={"div"}
        options={flickityOptionsThumbs}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {productImages.map((item, i) => (
          <div key={i} onClick={() => goToSlide(i)} className="group ">
            <Image
              src={item}
              alt={"Image" + i}
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-cover rounded-[10px] pointer-events-none group-[.is-selected]:opacity-100 opacity-40"
            />
          </div>
        ))}
      </Flickity>
    </>
  );
};

export default ProductImageSlider;
