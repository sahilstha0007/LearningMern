import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let val = useRef(0);


  const handleIncrement = ()=>{
    val.current = val + 1
    console.log("Value of val:", val.current)
    setCount(count+1)
    }

    //It runs on every render
    useEffect(() => {
      console.log("Again rendered")
    }, [])
    
  return (
    <>
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
    <br />
    <div>
      Count: {count}
    </div>
    </>
  )
}

export default App
