const Text = ({children, className}) => {
  return (
    <p className={(className || "" ) + " text-sm font-normal leading-[19.07px] text-center antialiased "}>
        {children}
    </p>
  );
}

export default Text;
