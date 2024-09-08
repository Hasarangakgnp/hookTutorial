import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffect = () => {
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            setData(response.data[0].email)
            console.log('API is calling')
        })
    , []})

  return (
    <div>
      <h1>---------------------------------------------------------</h1>
      {data}
      <h1>---------------------------------------------------------</h1>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default UseEffect
