import React, { useState } from 'react'

const ToDoList = () => {

    const[details,setDetails] = useState([]);
    const[task,setTask] = useState("");

    console.log(task)

    const addTask = ()=>{
        let newObj = {id:details.length,task:task}
        setDetails([...details,newObj])
        setTask("");
    }

    const handleClick = (id)=>{
        const newArray = details.filter((ele)=>{
            return ele.id !== id;
        })

        setDetails(newArray)
    }
  return (
    <div>
        <h1>List To Do Today</h1>
        <div>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}  placeholder="Enter your task" />
            <button onClick={addTask}>Add Task</button>
        </div>
      <div>
      {
        details.map((ele,index)=>(
             <div key={ele.id} className='list'>
                <p><span>{index + 1} {".  "}</span>{ele.task}</p>
                <button className='TodoButton' onClick={()=>handleClick(ele.id)}>Done</button>

            </div>
        ))
      }

      </div>

    
      
    </div>
  )
}

export default ToDoList
