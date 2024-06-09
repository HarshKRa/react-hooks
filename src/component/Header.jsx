import React from 'react'

const Header = () => {
    console.log("HeaderRendered")
  return (
    <>
      <h2>Header</h2>
    </>
  )
}

export default React.memo( Header) // this will not render the header for another state change
