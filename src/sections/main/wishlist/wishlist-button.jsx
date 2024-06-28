import IconHeart from "../../../../public/icons/IconHeart";

const WishlistButton = ({className}) => {
  return (
<button className={`bg-white ${className} rounded-full p-[6.7px] w-10 h-10 flex items-center justify-center relative z-10`}>
  <IconHeart size={26.6} className='fill-dark-100' />
</button>
  );
}

export default WishlistButton;
