import React from 'react'

function Inputbox({
    label,
    amount,
    currency,
    selectcurrency,
    oncurrencychange,
    onamountchange,
    currencyOption=[]
}) {
  return (
    <div style={{width:"150px",height:"150px",backgroundColor:"blue"}}>
         <label htmlFor="input">{label}</label>
      <input type="text" id='input' value={amount}  onChange={(e)=>(onamountchange(Number(e.target.value)))}/>
      <select value={selectcurrency} onChange={(e)=>(oncurrencychange(e.target.value))} >
        {currencyOption.map((currency) => (

          <option key={currency} value={currency}>
            {currency}
          </option>

        ))}

         </select>
            </div>
  )
}

export default Inputbox