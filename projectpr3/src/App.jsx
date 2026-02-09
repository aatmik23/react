import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Inputbox from '../../currencyconverter/src/components/Inputbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{height:"500px",width:"500px",backgroundColor:"blue"}}>
      <div style={{width:"200px",height:"200px", backgroundColor:"red"}}>
        <Inputbox/>
        

      </div>

     
     
    </div>
    </>
  )
}

export default App
