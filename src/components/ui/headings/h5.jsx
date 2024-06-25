
const H5 = ({ as, children, className }) => {
  return (
    <>
    {as === "tag" && (
      <h5
        className={
          (className || "") +
          " text-[17px] font-bold leading-[28px] tracking-[-0.01em]"
        }
      >
        {children}
      </h5>
    )}
    {as !== "tag" && (
      <div
        className={
          (className || "") +
          " text-[27px] font-bold leading-[28px] tracking-[-0.01em]"
        }
      >
        {children}
      </div>
    )}
  </>
  )
}

export default H5
