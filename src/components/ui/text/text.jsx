const Text = ({children, className}) => {
  return (
    <p className={(className || "" ) + " leading-[19.07px] antialiased "}>
        {children}
    </p>
  );
}

export default Text;