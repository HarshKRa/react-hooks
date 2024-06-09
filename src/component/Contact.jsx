import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {
    // 3. Consuming the context

    let {phone} = useContext(AppContext);
  return (
    <>
      <h2>Contact</h2>
      <h3>Phone Number : {phone} </h3>
    </>
  )
}

export default Contact
