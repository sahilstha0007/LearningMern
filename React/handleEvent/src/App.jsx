import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Sahil")


  const handleClick = ()=>{
    alert('hey i am clicked')
  }
const handleMouseOver = () =>{
  alert('Hey i am a mouse over')
}

const handleChange = (e) =>{
  setName(e.target.value)
}
  return (
    <>
    <div className="button">
      <button onClick={handleClick}>click me</button>
      {/* <div className="red"
      onMouseOver={handleMouseOver}
      >Hey i am red div</div> */}

    </div>
    <input type="text" value={name} id={name} onChange={handleChange} />
    </>
  )
}

export default App
