import { useState } from 'react'
import './header_btn.css'


export default function Butt_header( { children } ) {
    const [ value, value_change ] = useState(null) 

    function handleClick(name) {
        value_change(name)
        console.log(`The ${name} was clicked.`);
      }
    return <button className="header_btn" onClick={() => handleClick(String(children))}>{children}</button>
  }