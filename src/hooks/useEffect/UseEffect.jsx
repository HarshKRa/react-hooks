// useEffect hook allow you to perform side effect in your components
// Examples :
//  -- Fecthing data from API
//  -- Directly updating the DOM
//  -- Timers like setTimeOut and  setInterval

import React, { useEffect, useState } from "react";

const UseEffect = () => {

    const [count,setCount] = useState(0)

  // useEffect(cb,dependencies)
  // There is theree way to use UseEffect
  // 1. useEffect(cb)
  // 2. useEffect(cb,[])
  // 3. useEffect(cb,[variables])

//   // 1. useEffect(cb)  // execute the function whenever any state will change
//   useEffect(()=>{
//     setTimeout(()=>{
//         setCount(count => count + 1)
//     },2000)
//   })

 // 2. useEffect(cb,[])  // This will increase the counter value by only once
//  useEffect(()=>{
//     setTimeout(()=>{
//         setCount(count => count + 1)
//     },2000)
//   },[])

// 3. useEffect(cb,[variables])  // when count will change it will run again
useEffect(()=>{
    setTimeout(()=>{
        setCount(count => count + 1)
    },2000)
  },[count])


  return (
    <>
      <h1>I've rendered {count} times</h1>
    </>
  );
};

export default UseEffect;
