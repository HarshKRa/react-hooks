import React, { useState } from "react";

const UseState1 = () => {
  // const[flag,setFlag] = useState(false);
  const [name, setName] = useState("Harsh Raj Kumar");

  // function changeName(){
  //     if(flag)
  //         setName("Harsh Raj Kumar");
  //     else setName("Please click here")

  //     setFlag(!flag)
  // }

  // 2

  function changeName() {
    let val = name;

    name === "Harsh Raj Kumar"
      ? setName("Please clik here to get the name")
      : setName("Harsh Raj Kumar");
  }

  let arr = [
    { name: "Harsh", age: 24 },
    { name: "Raj", age: 22 },
    { name: "Kumar", age: 28 },
  ];

  const [data, setData] = useState(arr);


  //3 

  const [details,setDetails] = useState({
    name : "Harsh Raj",
    age : 24,
    state : "Bihar"
  })

  function handleNameChage(){
    setDetails({...details, name : "Raj Kuamr"})
  }

  return (

    <>
    {/* 1 */}
    {/* <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Click me</button>
    </div> */}

    {/* 2 */}
    
      {/* <div>
        {data.map((ele) => {
          return (
            <h1>
              My name is : {ele.name} and my age is : {ele.age}
            </h1>
          );
        })}
        {data.length !== 0 && (
          <button onClick={() => setData([])}>Click me for clear</button>
        )}
      </div> */}


      {/* 3 */}

        <h1>My name is {details.name}, I am from {details.state} and i am {details.age} year old </h1>
        <button onClick={handleNameChage}>UpdateName</button>
    </>
  );
};

export default UseState1;
