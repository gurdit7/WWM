import Link from "next/link";
const LinkComponent = ({ children, withIcon, to, className }) => {
  return (
    <>
      {withIcon ? (
        <Link
          className={`text-[15px] font-semibold  leading-[22.5px] flex gap-[14px] items-center md:py-2 ${className || ''}  `}
          href={to}
        >
          {children}
        </Link>
      ) : (
        <Link
          className={`text-[15px] border border-white border-opacity-50 shadow-3xl outline outline-white leading-[22.5px] w-full pt-[13px] pb-[14px] px-[18px] block bg-black rounded-[6px] text-center h-[50px] text-white font-semibold ${className || ''}`}
          href={to}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default LinkComponent;
