import "./Cake_card.css"


export default function Cake_card({ subs, name, URL, more }) {

    function openPopup({more}) {
        console.log({more})
    };

    return (
        <div className="card">
            <div className="photo_block">
                <img src={URL} className="photo"></img>
            </div>
            <div className="name">{name}</div>
            <div className="text_block">
                <div className="btns_row">
                    <p className="text">{ `${subs} subs` }</p>
                    <button className="btn_more buy">{`перейти >`}</button> 
                </div>
            
            </div>
        </div>
    )
}