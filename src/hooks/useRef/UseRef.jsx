import React, { useRef, useState } from 'react'

const UseRef = () => {
    const[name, setName] = useState('Ex..')
    const inputRef = useRef(null)

    const handleName=()=>{
        inputRef.current.focus()  // to focus
        inputRef.current.value = ''  //to clear the input tab
    }
  return (
    <div>
        <h1>{name}</h1>
        <input type="text" onChange={(event)=>{setName(event.target.value)}} ref={inputRef}/>
        <button  onClick={handleName}>change Name</button>
      
    </div>
  )
}

export default UseRef
