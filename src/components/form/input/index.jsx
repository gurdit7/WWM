
const Input = ({ type, placeholder, required, label, setInputData, value, name }) => {
    return (
        <>
            <div className={``}>
                {label &&
                    <label className="block font-medium text-c-gray-600 text-sm mb-2">
                        {label}
                    </label>
                }
                <input
                    name={name}
                    type={type}
                    autoComplete={type}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={(e) => { setInputData(e) }}
                    className=" py-4 px-[12px] w-full text-[16px] leading-[22px] text-black font-medium border rounded-md focus:outline-none " />

            </div>
        </>
    )
}

export default Input