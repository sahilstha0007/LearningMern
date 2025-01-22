
import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponent from './Components/LoggerComponent'
import TimerComponent from './Components/TimerComponent'

function App() {

  const [counter, setCounter] = useState(0)
  const [total, setTotal] = useState(1)
  // first => sideEffect function
  // second => clean-up function   
  // third => coma seperated dependency list

  // variation:1
  // runs on every  render
  // useEffect(() => {
  //   alert("I will run on every render")
  // }, )

  //  Variation:2
  // that runs only on  first render
  // useEffect(() => {
  //   alert("i will run only once in render")
  // }, [])

  // variation:3
  // useEffect(() => {
  //   alert("I will run when updates counter")
  // }, [counter])

  // variation:4
  // multiple dependencies
//   useEffect(() => {
// alert("I will run every time counter/total  is updated")
//   }, [counter,total])


  // variation:5
  // lets add a cleanup function
  // useEffect(() => {
  //   alert("Count is updated")
  
  //   return () => {
  //     alert("Count is unmounted from Ui")
  //   }
  // }, [counter])
  




  // const handleClick = () => {
  //   setCounter(counter + 1)
  // }

  // const handleClickTotal = () => {
  //   setTotal(total + 1)
  // }
  return (
    <>
    {/* <LoggerComponent/> */}

    {/* <TimerComponent/> */}
      {/* <button onClick={handleClick}>Update Count</button>
      <br />
      Count is:  {counter}
      <br />
      <button onClick={handleClickTotal}>Update total</button>
      <br />
      Total is:  {total} */}
    </>
  )
}

export default App
