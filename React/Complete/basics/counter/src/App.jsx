import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(1)

const increment = ()=>{
  setCount(count+1)
}
const decrement = ()=>{
  setCount(count-1)
}
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment} >Click me to Increase</button>
    <button onClick={decrement}>Click me to decrease </button>
    </>
  )
}

export default App
