// The React useMemo Hook returns a memoized value. 
   //(it's like caching a value so that it doesn't need to be recalculated)
// The useMemo Hook only run when one of its dependencies get updated
// This can improve the performance of the application. There is one
   // more hook in react to improve performance that is useCallback Hook
// The useMemo and useCallback Hooks are similar. The main diffrence is :
   // useMemo return a memoized value
   // useCallback returns a memoized function


import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [number,setNumber] = useState(0)
    const [counter,setCounter] = useState(0)

    // This function is runing on any render so we nee to solve this
    // function cubeNumber(num){
    //     console.log("Calculatio done!")
    //     return Math.pow(num,3);
    // }

    // const result = cubeNumber(number);

    function cubeNumber(num){
        console.log("Calculatio done!")
        return Math.pow(num,3);
    }

    const result = useMemo(()=> cubeNumber(number),[number])

  return (
    <>
      <input type="number"
       value={number} 
       onChange={(e)=> setNumber(e.target.value)}/>
      <h1>Cube Of The Number : {result}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
      <h1>Counter : {counter}</h1>
    </>
  )
}

export default UseMemo
