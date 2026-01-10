import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)
  let subob = {
    name:"hitesh",
    age:21
  }
  return (
    <>
 <h1 className='bg-green-400'>hello chai</h1>

 <Card channel={subob} username="heyman"/>
 <Card username="alex"/>
<Card/>
    </>
  )
}

export default App
