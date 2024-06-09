// useRef is a react-Hook that allow us to create mutable variables which will not re-render the component
// useRef is also used for acessing DOM elements

import React, { useEffect, useState, useRef } from "react";
import UseRef1 from "./UseRef1";

const UseRef = () => {
  // Example 1

  const [value, setValues] = useState(0);
  //   const [count, setCount] = useState(0);   // runs infinte loop

  //  useEffect(()=>{
  //     setCount(prev=> prev+1)
  //  })

  const count = useRef(0);
  //  console.log(count)  // this will return an object and value store in current key

  useEffect(()=>{
    count.current += 1;
  })

  return (
    <>
      {/* Example 1 */}
      <button
        onClick={() => {
          setValues((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValues((prev) => prev + 1);
        }}
      >
        +1
      </button>

      <h1>Render Count : {count.current}</h1>

      <UseRef1 />
    </>
  );
};

export default UseRef;
