import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'

// Step 1: create context
//Step 2: wrap all the child inside a provider
// Step 3 : pass value
// Step 4: consume being a consumer
const UserContext = createContext();


function App() {
  
  const [user, setUser] = useState({name:"Sahil"})
  return (
    <>
    <UserContext.Provider value={user}>
    <ChildA />
    </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}