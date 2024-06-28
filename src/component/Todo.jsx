import React, { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import todoImg from "../component/images/todoImg.png";

// to get data from local storage

const getLocalStorageData = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [data, setData] = useState(getLocalStorageData());
  const [inputData, setInputData] = useState("");
  const [editToggle, setEditToggle] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleTodo = (e) => {
    e.preventDefault();
    if (!inputData) {
      alert("Please Enter a Item");
    } else if (inputData && editToggle) {
        setData(data.map((ele)=>{
            if(ele.id === editItem){
                return {...ele, name:inputData}
            }
            return ele;
        }))

        setInputData("");
        setEditItem(null);
        setEditToggle(false)
    } else {
      let obj = { id: new Date().getTime().toString(), name: inputData };
      setData([...data, obj]);
      setInputData("");
    }
  };

  const handleDelet = (ind) => {
    let newData = data.filter((ele) => {
      return ele.id !== ind;
    });

    setData(newData);
  };

  const removeAll = () => {
    setData([]);
  };

  const handleEdit = (userId) => {
    let newItem = data.find((ele) => {
      return ele.id === userId;
    });

    setEditToggle(true);
    setInputData(newItem.name);
    setEditItem(userId);

    console.log(newItem);
  };
  // Add Data To local storage

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(data));
  }, [inputData]);
  return (
    <>
      <div className="main-div">
        <div className="logo-head">
          <figure>
            <img src={todoImg} alt="todoImg" height="100px" width="100px" />
          </figure>
          <h1>Add Your List Here ✌️</h1>
          <div className="addItems">
            <input
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="✍️ Add item..."
            />
            {editToggle ? (
              <i
                className="fas fa-solid fa-edit btnPluse icon"
                title="Update item"
                onClick={handleTodo}
              ></i>
            ) : (
              <i
                className="fas fa-plus btnPluse btnPluse icon"
                title="Add item"
                onClick={handleTodo}
              ></i>
            )}
          </div>
          <div>
            <button onClick={removeAll} className="btn">Remove All</button>
          </div>
          </div>
          <div className="list-container">
            {data.map((ele, index) => (
              <div className="todoitem" key={ele.id}>
                <p>
                  {index + 1}
                  {". "}
                  {ele.name}
                </p>
                <div className="todo-icons">
                  <i
                    className="fas fa-solid fa-edit icon"
                    onClick={() => handleEdit(ele.id)}
                  ></i>
                  <i
                    className="fas fa-solid fa-trash icon"
                    onClick={() => handleDelet(ele.id)}
                  ></i>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default Todo;
