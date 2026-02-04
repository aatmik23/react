import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./components/Login.jsx"
import Profile from "./components/Profile.jsx"
import UserContextprovider from './context/UserContextprovider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextprovider>
     hi i am chai aur code
    <Login/>
    <Profile/>
    </UserContextprovider>
  )
}

export default App
