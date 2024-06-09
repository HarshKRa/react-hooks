// useContext is a React Hook that allows you access data from any component 
   // without explicitly passing it down through props at every level.
// useContext is used to manage global data in react app


// Example we have a application
//   app --> profile and footer 
//   profile --> contact
//   footer and profile showing contact number so we have to pass the props 
     // app --> profile --> contact  // passing contact number as props
     // app --> footer   // passing contact number as props

// this will more diffcult to manage in more nasted component
// solve by using useContex

// We can use useContext hook in below three steps
   // 1. creating the context
   // 2. Providing the context
   // 3. Consuming the context


// Use of useContext Hook
   // 1. Thems of app to all component
   // 2. share the authenticated user to all of our component
   // 3. To share the api call to all of component to reduce the more api call


import React from 'react'
import Header from '../../component/Header'
import Profile from '../../component/Profile'
import Footer from '../../component/Footer'

const UseContext = () => {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  )
}

export default UseContext
