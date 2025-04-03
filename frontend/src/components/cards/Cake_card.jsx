import "./Cake_card.css"


export default function Cake_card({ text, URL, more }) {
    return (
        <div className="card">
            <div className="photo_block">
                <img src={URL} className="photo"></img>
            </div>
            <div className="text_block">
                <p className="text">{text}</p>
                <div className="btns_row">
                   <button className="btn_more">подробнее</button>
                    <button className="btn_more buy">купить</button> 
                </div>
                
            </div>
        </div>
    )
}