
const H3 = ({ as, children, className }) => {
  return (
    <>
    {as === "tag" && (
      <h3
        className={
          (className || "") +
          " text-[17px] font-bold leading-[28px] tracking-[-0.01em]"
        }
      >
        {children}
      </h3>
    )}
    {as !== "tag" && (
      <div
        className={
          (className || "") +
          " text-[17px] font-bold leading-[28px] tracking-[-0.01em]"
        }
      >
        {children}
      </div>
    )}
  </>
  )
}

export default H3
