import React from 'react'

function Inputbox({
  label,
  amount,
  currencyOption = []
}) {
  return (

    <div >
      <label htmlFor="input">{label}</label>
      <input type="text" id='input' value={amount} />
      <select>
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