import Image from "next/image";

const ImageWrapper = ({ image, alt, className}) => {

  return (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      className={className}
      alt={alt}
    />
  );
};

export default ImageWrapper;


