import React, { useLayoutEffect, useRef, useEffect} from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null)

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[])

    useEffect(()=>{
        inputRef.current.value = 'Hello';
    },[])

  return (
    <div className='app'>
      <input ref={inputRef} value='PEDRO' style={{width: 400, height:60}} />
    </div>
  )
}

export default UseLayoutEffect
