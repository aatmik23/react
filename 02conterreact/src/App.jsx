import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  let counter = 5
let [counter,setcounter] = useState(15) //give an array viraable and a function call when we have to update
 const addvalue = () =>{
  console.log("added",counter) 
  counter = counter+1
  setcounter(counter)
 }

 function removevalue(){
  console.log("value removed",counter)
  if (counter>0){
    counter = counter-1

    setcounter(counter)
  }
 }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter: {counter}</h2>
     <button onClick={addvalue}>add value {counter}</button>
     <br />
     <button onClick={removevalue}>decrease value {counter}

     </button>
    </>
  )
}

export default App
