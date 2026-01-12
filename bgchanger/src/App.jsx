import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setcolor] = useState("olive")
  function colorcahnge(){
       
       setcolor("red")
  }
  return (
<div style={{ width: "100vw", height: "100vh", background: color }}>
  heyyy
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
      <button onClick={()=>setcolor("red")} className='outline-none px-4 ' style={{backgroundColor:"red"}}>red</button>
       <button onClick={()=>setcolor("blue")} className='outline-none px-4 ' style={{backgroundColor:"blue"}}>blue</button>
       <button onClick={()=>setcolor("green")} className='outline-none px-4 ' style={{backgroundColor:"green"}}>green</button>
      
      
       </div>
  </div>
</div>

  )
}

export default App
