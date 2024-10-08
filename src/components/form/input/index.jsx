"use client";
import "./style.css";
const Input = ({
  type,
  placeholder,
  required,
  label,
  setInputData,
  value,
  name,
  labelBgColor,
  className
}) => {
  return (
    <>
      <div className={`relative w-full`}>
        <input
          name={name}
          type={type}
          autoComplete={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => {
            setInputData(e);
          }}
          className={`${className || ''} ${
            label ? "placeholder-opacity-0 placeholder-transparent " : ""
          } py-[14.5px]  px-6 peer input-item w-full text-[15px] leading-[22.5px] text-black font-medium border antialiased rounded-md focus:outline-none `}
        />
        {label && (
          <label
            className={`${labelBgColor || ''} block font-normal text-black text-[15px] antialiased absolute
          leading-[22.5px] top-[14px] text-opacity-65 left-6
          peer-focus:left-3
          peer-focus:top-[-9px] transition-all duration-300 peer-focus:text-xs peer-focus:leading-[18px] peer-focus:text-dark-200 peer-focus:text-opacity-50
          peer-focus:px-[6px] bg-white pointer-events-none`}
          >
            {label}
          </label>
        )}
      </div>
    </>
  );
};

export default Input;
