import React from 'react';

const Button = ({ children, type, label, btnType, color, loading, loadingText, event, disabled, additionalCss }) => {
    let classes = `${additionalCss || ''} w-full py-3 px-2 rounded-md  focus:outline-none  transition-colors duration-300 ${loading ? ' opacity-50' : ''}`;

    if (btnType == "solid" && color == "black") {
        classes += `bg-black text-white focus:bg-black  `
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