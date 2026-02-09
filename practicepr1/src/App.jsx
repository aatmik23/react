import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")


  return (
    <>
    
    <div style={{ width:"100vw", height:"100vh" ,backgroundColor:color}}>
      <button onClick={(e)=>(setColor("red"))}>red</button>
      <button onClick={(e)=>(setColor("blue"))}>blue</button>
    </div>

    </>
  )
}

export default App
