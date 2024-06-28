import React, { useRef, useState } from "react";

const Uncontrolled = () => {

    const[show,setShow] = useState(false)

    const luckyName = useRef(null);


    const handleSubmit = (e)=>{
        e.preventDefault()
        const name = luckyName.current.value;

        name === "" ? alert("Please Enter Your Lucky Name") : setShow(true)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="luckyName">Enter Your Lucky Name</label> <br />
          <input type="text" ref={luckyName} />
        </div>
        <button>Submit</button>
      </form>
      <h1>{show ? `Your Lucky Name is ${luckyName.current.value}` : " "}</h1>

    </div>
  );
};

export default Uncontrolled;
