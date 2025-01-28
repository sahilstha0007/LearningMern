import React from 'react'

function App() {

  const handleCLick= ()=>{
    alert("I am clicked")
  }
  const handleInputChange= (e)=>{
    console.log("Value till now:", e.target.value)
  }
  return (
    <div>
      <form action="">
        <input type="text" name="" id="" onChange={handleInputChange} />
      </form>
      <button onClick={handleCLick}>Click me</button>
    </div>
  )
}

export default App
