import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {

    const[count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `Chats ${count !== 0 ? "( " + count + " )": ""}`
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffect1
