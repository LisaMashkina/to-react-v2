import "./Cake_card.css"


export default function Cake_card({ subs, name, URL, more }) {

    function openPopup({more}) {
        console.log({more})
    };

    return (
        <div className="card master">
            <div className="photo_block">
                <img src={URL} className="photo"></img>
                <div className="name">{String(name).toUpperCase()}</div>
            </div>
            
            <div className="text_block">
                <div className="btns_row">
                    <p className="subs">{ `${subs} subs` }</p>
                    <button className="btn_more go">{`перейти >`}</button> 
                </div>
            
            </div>
        </div>
    )
}