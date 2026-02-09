import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inputbox from './components/Inputbox'
import useCurrency from './hooks/useCurrency'

function App() {
  const [amount,setamount] = useState(0)
  const [from,setfrom] = useState("usd")
  const [to,setto] = useState("inr")
  const [convertedAmount,setConvertedAmount]= useState(0)
  const currency = useCurrency(from)

   
  const currencyOption = Object.keys(currency)

   const convert = ()=>{
    setConvertedAmount(amount*currency[to])
   }
  return (
    <>
     <div style={{width:"500px", height:"500px",backgroundColor:"red"}}>

       <Inputbox label="from" amount={amount} selectcurrency={from} onamountchange={(amount)=>(setamount(amount))} oncurrencychange={(from)=>(setfrom(from))} currencyOption={currencyOption}   />
       <Inputbox label="to" amount={convertedAmount} selectcurrency={to} oncurrencychange={(to)=>(setto(to))} currencyOption={currencyOption}/>
       <button onClick={convert} />
     </div>
    </>
  )
}

export default App
