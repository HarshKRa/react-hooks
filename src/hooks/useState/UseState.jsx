import React, { useState } from "react";

const UseState = () => {

    // 1
  // // let color = "red"
  // const[color,setColor] = useState("red")
  // let handleColorChange = function(){
  //     // color = "blue"  // this will not work
  //     setColor("blue")
  // }
  // console.log(color)

  //2
  // Multiple state variables

  // const [color,setColor] = useState("red")
  // const [brand,setBrand] = useState("Ferrari")
  // const [model,setModel] = useState("Roma")
  // const [year,setYear] = useState("2024")

  // Instead of creating multiple state variable we can create a object

//   const [car, setCar] = useState({
//     color: "white",
//     brand: "Tata",
//     model: "Punch", 
//     year: "2024",
//   });

//   let changeColor = function(){
//     setCar((prev)=>{
//         return {...prev,color:"blue"}
//     })
//   }


// 3

const[count,setCount] = useState(0);


const handleCount =  function(){

    // this will not Increase the value by three
    // setCount(count+1)  //1
    // setCount(count+1)  //1
    // setCount(count+1)  //1

    // This will +4 prev can rember the privious value
    setCount((prev)=>prev +1)  //1
    setCount((prev)=>prev +1)   //2
    setCount((prev)=>prev +1)  //3
    setCount((prev)=>prev +1)  //4


}

  return (

    //1
    // <div>
    //   <h1>My favourite colour is {color}</h1>
    //   <button onClick={handleColorChange}>Change Color</button>
    // </div>


    //2
    // <>
    //   {/* <h1>My {brand}</h1>
    // <h2>It is a {color} {model} from {year}</h2> */}

    //   <h1>My {car.brand}</h1>
    //   <h2>
    //     It is a {car.color} {car.model} from {car.year}
    //   </h2>
    //   <button onClick={changeColor}>Blue</button>
    // </>

    //3

    <>
    <h1>{count}</h1>
    <button onClick={handleCount}>Increase</button>
    </>
  );
};

export default UseState;
