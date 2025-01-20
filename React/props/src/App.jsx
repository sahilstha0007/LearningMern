import React, { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = ()=>{
    setCount(count+1)
  }
  return (
    <div>
      
      {/* <Card name="Sahil">
      <h2>Best WEB DEV </h2>
      <p>Trying to be consistent in this</p>
      <p>Will complete the react soon
      </p>
      </Card> */}

      <Button handleClick = {handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>
    </div>  )
}

export default App
