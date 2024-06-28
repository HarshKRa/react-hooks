// useLayoutEffetc works similarly to useEffect, but it is called before the user interface gets mounted
// useEffect gets called after printing the DOM elements
// useLayoutEffect gets called before printing the DOM elements


import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {

    useEffect(()=>{
        console.log("Message from useEffect")
    },[])

    useLayoutEffect(()=>{
        console.log("Message from useLayoutEffect")
    },[])
  return (
    <>
      <h2>Test Message</h2>
      {Array(40000).fill('').map((item,index)=>(
        <li key={index}>{Math.pow(Math.random(),10)}</li>))}
    </>
  )
}

export default UseLayoutEffect
