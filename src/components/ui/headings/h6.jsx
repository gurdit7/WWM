
const H6 = ({ as, children, className }) => {
  return (
    <>
    {as === "tag" && (
      <h6
        className={
          (className || "") +
          " text-[17px] font-bold leading-[28px] tracking-[-0.01em]"
        }
      >
        {children}
      </h6>
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

export default H6
