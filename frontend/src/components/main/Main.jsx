import './Main.css'
import Cake_card from '../cards/Cake_card'
import Master_card from '../cards/Master_card'
import { cake_cards, master_cards } from "../../data.js"

export default function Main() {
    return (
        <div className="main">
            {cake_cards.map((item, index) => {
                return <Cake_card key={index} text={item.text} URL={item.photo} more={item.more}></Cake_card>
            })}
            {master_cards.map((item, index) => {
                return <Master_card 
                key={index} name={item.text} 
                URL={item.photo} more={item.more} 
                subs={item.subs}></Master_card>
            })}
        </div>

    )
}