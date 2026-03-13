import "./card.css"
import { cardData } from "./CardData.jsx"
export function Cards() {
return (
    <div className="cardgrid">
        {cardData.map((props) => (
        <div class="cardContainer"key={props}>
            <img src={props.img} />
            <a href="#">{props.category}</a>
            <a href="#">{props.title}</a>
        </div>
        ))}
    </div>
    );
}