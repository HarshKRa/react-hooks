import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {

    // 3. Consuming the context

    const {phone,name} = useContext(AppContext)
  return (
    <>
      <h2>Fotter</h2>
      <h3>Name : {name}</h3>
      <h3>Phone Number : {phone} </h3>
    </>
  )
}

export default Footer
