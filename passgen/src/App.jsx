import { useState, useCallback,useEffect ,useRef} from 'react'


function App() {
  const [Length, setlenght] = useState(8)
  const [number, setnumber] = useState(false)
  const [charallowed, setchar] = useState(false)
  const [password, setpassword] = useState("")

  const passref = useRef(null)
  const copypasstoclip = useCallback(()=>{
    passref.current?.select()
     window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenrator = useCallback(() => {  //for optmization
    let pass = ""
    let str = "ABCDEFGHIJKLabcdefijkl"
    if (number) str += "0123456789"
    if (charallowed) str += "!@#$%^&*()"

    for (let index = 0; index < Length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setpassword(pass)
  }, [Length, number, charallowed, setpassword])

  useEffect(()=>{  // run if there is  anythinf changes 
   passwordGenrator() 
  },[Length,charallowed,number , passwordGenrator])

  return (


    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4"> <input type="text" value={password} className="outline-none w-full py-1 px-3"
          placeholder='password' readOnly  ref={passref}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copypasstoclip}> copy </button>
        </div>

        <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={20} value={Length} className='cursor-pointer' onChange={(e) => {
              setlenght(e.target.value)
            }} />
            <label >length:{Length}</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
                <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setchar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

        </div>
      </div>


    </>
  )
}

export default App
