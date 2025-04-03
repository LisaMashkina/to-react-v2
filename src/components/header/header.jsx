import Button from "../buttons/Button"
import "./header.css"
import Butt_header from "../buttons/header_btn"

export default function Header({ buttons_navbar }) {
  const i = Math.floor(buttons_navbar.length/2) + 1
  return (
    <header>
      <div className="left-btns-row">
        { buttons_navbar.slice(0, i).map((item, index) => {
          return <Butt_header key={index}>{ item }</Butt_header>
        }) }
      </div>
      <div className="right-btns-row">
        <Button/>
        { buttons_navbar.slice(i, buttons_navbar.length+1).map((item, index) => {
          return <Butt_header key={index}>{ item }</Butt_header>
        }) }
      </div>
    </header>
  )
}
