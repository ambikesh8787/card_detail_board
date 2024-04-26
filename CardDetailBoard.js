import React from 'react'
import { useState } from 'react'

export const CardardDetailBoard = (props) => {
 const [card, setCard] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  
  const [cvc, setcvc] = useState('');
  const [errorMessagecvc, setErrorMessagecvc] = useState('');

  const handlesetcarvalue = (event) => {
    const inputValue = event.target.value;
    setCard(inputValue);   
  };

  const handlesetcvcvalue = (event) => {
    setcvc(event.target.value);    
  }

  const handleSubmit = (event) => {
    console.log(card);
    event.preventDefault();
    if (!card.trim()) {
      setErrorMessage('This field is mandatory');  
    }
    if (!cvc.trim()) {
      setErrorMessagecvc('This field is mandatory');       
    }   
    console.log("card detail number :" + card);
    console.log("CVV number :" + cvc);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div style={{ width: 500, padding: 10 }}>
        <span>Welcome : {props.userName}</span>
        <input type="number" value={card} onChange={handlesetcarvalue} placeholder='Card Detail Number' className='largetext_boxcss' />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <input type="number" value={cvc} onChange={handlesetcvcvalue} placeholder='CVC' className='smalltext_boxcss' maxlength="3" />
        {errorMessagecvc && <p style={{ color: 'red' }}>{errorMessagecvc}</p>}
        <input type="date" placeholder="Expiry Date" className='smalltext_boxcss' />
        <button type="submit" className='smalltext_boxcss'>Submit</button>
      </div>
      </form>
    </>
  )
}
