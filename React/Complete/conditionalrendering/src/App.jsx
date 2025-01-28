import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logout from './components/Logout'
import Login from './components/Login'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
        
if(!isLoggedIn){
  return {
    <Login/>
  }
}

        //If -else
        //if true 
//   if (isLoggedIn) {
//     return (
//       <Logout />
//     )
//   }
//   else {
//     return (
//       <Login />
//     )
// }

        //Ternary oprtator
        //if false
// return(
//   <div>
//     {isLoggedIn ? <Logout/> : <Login/>}
//   </div>
// )

        //Logical operator
return(
  <div>
    <h1>
    Welcome everyone
    </h1>
    <div>
      {isLoggedIn && <Logout/> }
    </div>
    </div>
)
}
export default App
