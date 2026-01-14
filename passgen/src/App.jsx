import { useState ,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Lenght, setlenght] = useState(8)
  const [number,setnumber] = useState(false)
  const [charallowed,setchar] = useState(false)
  const [password,setpassword]=useState("")

  const passwordGenrator = useCallback(fn,[Lenght,number,charallowed,setpassword])
let pass = ""
let str = "ABCDEFGHIJKLabcdefijkl"
if (number) str+= "0123456789"
if (charallowed) str+= "!@#$%^&*()"

for (let index = 0; index < array.length; index++) {
  let char = Math.floor(Math.random()*str.length+1)
  pass = str.charAt(char)
  
}

setpassword(pass)
  return (


    <>
    <h1 className='text-4xl text-center text-white'>password gen</h1>
    </>
  )
}

export default App
