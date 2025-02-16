import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "My name is sahil"
    }, {
      title: "Hi",
      desc: "My name is dog"
    }, {
      title: "Heelo",
      desc: "My name is 123"
    },
  ])


  // const Todo = ({ todo }) => {
  //   return (
  //     <>
  //     <div className="m-4 border border-1 border-purple-400">
  //       <div className='todo'>{todo.title}</div>
  //       <div className='todo'>{todo.desc}</div>
  //     </div>
  //     </>
  //   )
  // }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn ?<button>I will be shown only when second button is clicked</button>: "" } */}
      {/* {showBtn && <button>I will be shown only when second button is clicked</button>} */}
      {/* {showBtn && <button>ShowBtn is true</button>} */}

      {/* 
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo} />
        return <div className="m-4 border border-1 border-purple-400">
        <div className='todo'>{todo.title}</div>
        <div className='todo'>{todo.desc}</div>
        }} */}
      {todos.map(todo => {
        return <div key={todo.title} className="m-4 border border-1 border-purple-400">
          <div className='todo'>{todo.title}</div>
          <div className='todo'>{todo.desc}</div>
        </div>
      }
      )

      }
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
