import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect,useCallback,useRef} from 'react'

function App() {
  const [password, setpassword] = useState('')
  const [number , setnumber] = useState(false)
  const [character,setCharacter] = useState(false)
  const [length,setlenght] = useState(6)

  const passref = useRef(null)

  const copypass = useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])
  const passwordgen= useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLabcdefijkl"
    if (number) str +=  "0123654789"
    if (character) str += "!@#$%^&*()"

    for (let index = 0; index < length ; index++) {
        let char = Math.floor(Math.random() * str.length + 1)
         pass += str.charAt(char)
      
      
    }

    setpassword(pass)
   
  },[length,number,character,setpassword])


  useEffect(()=>{
    passwordgen()
  },[length,character,number,passwordgen])


  return (
    <>
    <div>
      <input type="text" value={password} ref={passref} readOnly/>
      <button onClick={copypass}> copy </button>

      
    </div>
    <div>
      <input type="range" min={6} max={20} id="length" onChange={(e)=>(setlenght(Number(e.target.value)))} />
      <label htmlFor="lenght">lenght</label>
      <input type="checkbox" 
      defaultChecked={character}
      onChange={()=>setCharacter((prev)=>(!prev))}
      id='characterinput'
/> <label htmlFor="characterinput" > character </label>
      <input type="checkbox"
      defaultChecked={number} 
      id = 'numberinput'
      onChange={()=> setnumber((prev)=>(!prev))}
      />
      <label htmlFor="numberinput">number</label>
    </div>
    </>
  )
}

export default App
