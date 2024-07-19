import React, { useState } from "react"
import { useEffect } from "react"



function Github() {
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/vishalsharma123321')
      .then(response => response.json())
      .then(data=>{
        console.log(data);
        setdata(data)
      }) 
    
    }, [])
    

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers : {data.followers}
            <img  src={data.avatar_url} alt="profile picturee" width={300}/>
            </div>
            
    )
}

export default Github
