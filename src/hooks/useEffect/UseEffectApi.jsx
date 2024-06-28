import React, { useEffect, useState } from 'react'
import Loding from '../../component/Loding';

const UseEffectApi = () => {
    const[datas, setDatas] = useState([])


    useEffect(()=>{
        async function fectData(){
            try {
                let data = await fetch("https://api.github.com/users");
            let dataJson = await data.json();
            setDatas(dataJson)
            } catch (error) {
                console.log("Error : ", error)
            }
        }
        fectData();
    },[])
  return (
    <div className='main-container-API'>
      {
        datas.length === 0 ? (<Loding />) : (datas.map((ele)=>{
            return(
                <div>
                <div>
                    <img src={ele.avatar_url} alt="" height="100px" width="100px" />
                </div>
                <div>
                    <div>{ele.login}</div>
                    <div></div>
                    <div></div>
                </div>
                </div>
            )
        }))
      }
    </div>
  )
}

export default UseEffectApi
