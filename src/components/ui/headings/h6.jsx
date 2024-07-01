
const H6 = ({ as, children, className, onClick }) => {
  return (
    <>
      {as === "tag" && (
        <h6
          onClick={onClick}
          className={
            (className || "") +
            " text-[13px] text-[#2A2C29] font-normal leading-[18.2px]"
          }
        >
          {children}
        </h6>
      )}
      {as !== "tag" && (
        <div
          onClick={onClick}
          className={
            (className || "") +
            " text-[13px] font-normal leading-[18.2px]"
          }
        >
          {children}
        </div>
      )}
    </>
  )
}

export default H6
