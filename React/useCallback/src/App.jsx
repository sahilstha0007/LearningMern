import React, { useState } from 'react'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)


  function handleClick() {
    setCount(count+1)
  }
  return (
    <div>
      <div>Count: {count}</div>
      <br />
      <button onClick={handleClick}>Increment</button>
      <br />
      <br />
      <div>

      <ChildComponent buttonName = "Click me" />
      </div>
    </div>
  )
}

export default App
