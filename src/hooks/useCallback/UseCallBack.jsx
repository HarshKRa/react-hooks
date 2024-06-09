// useCallback is a React Hook that lets you cache a function defination
// between re-renders.
// it means, when we use the useCallback Hook, it doesn't create multiple
// instance of same function when re-render happens.
// Instead of creating new instance of the function, it provides the
// cached function on re-render of the component

import React, { useCallback, useState } from "react";
import Header from "../../component/Header";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(0);


  // This is happing due to refrencial equality
  // Whenever this component is rerender this function props pass to header component with new refrence so that
     // header component renders every time

  // const newFun = ()=> {}   
  // we can solve using useCallback Hook

  const newFun = useCallback(()=>{},[count])  // at the changing the value of count this will reRender the header component


  
  return (
    <>
      <Header newFun = {newFun} />  {/* after passing the props it will start render again */}
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
      <h1>{val}</h1>
      <button onClick={() => setVal((prev) => prev + 1)}>Click Here</button>
    </>
  );
};

export default UseCallBack;
