const H1 = ({ as, children, className }) => {
  return (
      <>
        {as === "tag" && (
          <h1
            className={
              (className || "") +
              " text-[24px] font-semibold leading-[31.73px] tracking-[-0.01em]"
            }
          >
            {children}
          </h1>
        )}
        {as !== "tag" && (
          <div
            className={
              (className || "") +
              " text-[22px] font-bold leading-[29.08px] tracking-[-0.01em] h2"
            }
          >
            {children}
          </div>
        )}
      </>
  )
}

export default H1
