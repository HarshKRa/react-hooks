import React, { useRef } from 'react'

const UseRef1 = () => {

    // UseRef for selecting a DOM element
    const inputElem = useRef();
    
    const btnClicked = ()=>{
        console.log(inputElem.current)
        inputElem.current.style.background = "blue"
    }
  return (
    <>
      <input type="text" ref={inputElem}/>
      <button onClick={btnClicked}>Click Here</button>
    </>
  )
}

export default UseRef1
