// useReducer is similar to useState, But instead of providing state and setter function.
// it provides state and dispatch function.

// The useReducer Hook accepts two arguments
// - Reducer funcion
// - Initial state
// and returns : current state and Dispatch method

//

import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

const UseReducer = () => {
  // using useState
  // const[count,setCount] = useState(0);

  // Using useReducer

  const initialSate = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }

      case "decrease": {
        return { count: state.count - 1 };
      }

      case "input": {
        return { count: action.payload };
      }

      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialSate);
  return (
    <>
      {/* using useState */}
      {/* <button onClick={() => setCount(prev => prev+1)}>+1</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev-1)}>-1</button> */}

      {/*Using useReducer */}

      <button onClick={() => dispatch({ type: "increase" })}>+1</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "decrease" })}>-1</button>

      <hr />
      <input
        value={state.count}
        onChange={(e) => dispatch({ type: "input", payload : Number(e.target.value) })}
        type="number"
        name=""
        id=""
      />
    </>
  );
};

export default UseReducer;
