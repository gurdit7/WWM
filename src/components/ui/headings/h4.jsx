
const H4 = ({ as, children, className }) => {
  return (
    <>
      {as === "tag" && (
        <h4
          className={
            (className || "") +
            " text-[17px] font-bold leading-[28px] tracking-[-0.01em]"
          }
        >
          {children}
        </h4>
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

export default H4
