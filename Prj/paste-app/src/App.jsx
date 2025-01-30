import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPastes from './components/ViewPastes'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: "/pastes",
      element:
        <div>
          <Navbar />
          <Pastes />
        </div>
    },
    {
      path: "/pastes/:id",
      element:
        <div>
          <Navbar />
          <ViewPastes />
        </div>
    },
  ]
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
