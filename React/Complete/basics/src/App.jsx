import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)
  
  const counter = ()=>{
    // let count = count + 1
    setCount(count + 1)
  }
  const remove = () =>{
    if (setCount < 0){
      count = 0
    }else
    setCount( count - 1)
  }
  return (
    <div>
      <h2> Count Value: {count}</h2>
      <button onClick={counter}>Add {count}</button>
      <button onClick={remove}>Remove{count }</button>
    </div>
  )
}

export default App
