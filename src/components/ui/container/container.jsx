
const Container = ({className, children}) => {
  return (
    <div className={(className || "") + " max-w-[1728px] px-[100px] max-xl:px-[50px] max-sm-tab:px-4 mx-auto"}>
      {children}
    </div>
  );
}

export default Container;
