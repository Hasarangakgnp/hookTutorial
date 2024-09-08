import React, { useState } from 'react'

const UseState = () => {

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('Enter Your name')

    const increment = ()=>{
        setCounter(counter+1);
    } 
    const decrement = ()=>{
        setCounter(counter-1);
    } 
    const refresh = ()=>{
        setCounter(0);
    } 
    const handleInputValue = (event)=>{
      setInputValue(event.target.value)
    }

  return (
    <>
    <div className='bg-blue-500'>
      Count: {counter}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={refresh}>Refresh</button>
    </div>
    <div>
      <input type="text" onChange={handleInputValue} />
      <h1>hello {inputValue}</h1>
    </div>
    </>
  )
}

export default UseState
