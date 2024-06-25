import React from 'react';

const Container = ({className, children}) => {
  return (
    <div className={(className || "") + " max-w-[1728px] px-[100px] mx-auto"}>
      {children}
    </div>
  );
}

export default Container;
