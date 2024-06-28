import React, { useState } from 'react'

const Form = () => {
  const [data, setData] = useState({
    date : "",
    email : "",
    password : "",
  })

  const[allData,setAllData] = useState([]);

  const handleData = (e)=>{
    e.preventDefault();
    console.log(data.email,data.password)
    setAllData([...allData,{...data,date:new Date().getTime().toString()}]);

    console.log(allData)
    setData({
      email : "",
    password : "",
    })
  }
  return (
    <div className='form-Container'>
      <form className='form' action="">
        <div>
            <label htmlFor="">Enter your Email</label> <br />
            <input type="email" name='email' value={data.email} onChange={(e)=>setData({...data,[e.target.name] :e.target.value})} />
        </div>
        <div>
            <label htmlFor="">Enter your Email</label> <br />
            <input type="password" name='password' value={data.password} onChange={(e)=>setData({...data,[e.target.name] :e.target.value})}/>
        </div>
        <div>
            <button onClick={handleData}>Login</button>
        </div>
      </form>
      {
        allData.map((ele)=>(
          <h3 key={ele.date}>email : {ele.email} {" "} password : {ele.password} {" F "} {ele.date}</h3>
        ))
      }
    </div>
  )
}

export default Form
