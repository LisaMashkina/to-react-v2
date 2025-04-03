import './Button.css'
import { useState } from 'react'
//кнопка меняющая тему
export default function Button() {
  const hand = (i) => {
    if (i%2 == 0) {
      document.body.style.backgroundColor = 'rgb(236, 236, 236)'
      return (
        <img src="./src/assets/moon.png"className='sun'/>
      )
    }
    document.body.style.backgroundColor = '#242424'
    document.body.style.transition = 'background-color 0.1s ease-in-out'
    return (
      <img src="./src/assets/sun.png" className='moon'/>)
  }

  const [value, valueChange] = useState(0);

  return (
      <button className='btn' onClick={() => valueChange(value + 1)}>
        {hand(value)}
      </button>
    )
  }