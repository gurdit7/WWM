import React from 'react';

const Button = ({ children, type, label, btnType, color, loading, loadingText, event, disabled, additionalCss }) => {
    let classes = `${additionalCss || ''} w-full py-3 px-2 rounded-md  focus:outline-none  transition-colors duration-300 ${loading ? ' opacity-50' : ''}`;

    if (btnType == "solid" && color == "black") {
        classes = `${additionalCss || ''} bg-black text-white focus:bg-dark-100  text-[15px] border border-white border-opacity-50 shadow-3xl outline outline-white leading-[22.5px] w-full pt-[13px] pb-[14px] px-[18px] block bg-black rounded-[6px] text-center h-[50px] text-white font-semibold `
    }
    if (btnType == "solid" && color == "light-green") {
        classes += `bg-[#F4F2F0] text-black focus:bg-[#F4F2F0]  `
    }

    return (
        <>
            {(<button type={type} disabled={disabled} className={classes} onClick={event}>
                {children} {loading ? loadingText : label}
            </button>)}

        </>
    )
}

export default Button;