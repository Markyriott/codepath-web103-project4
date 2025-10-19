import lowtopImg from '../assets/lowtop.jpg';
import hightopImg from '../assets/hightop.jpg';

export default function Item({ name, id, color, style, logo, sole, texture, price}){
    return(
        <div style={{ backgroundColor: 'rgba(0,0,0,0.3)',backgroundSize: 'cover', width: 200, height: 300, margin: 10, padding: 10, color: 'white', textShadow: '1px 1px 2px black'}}>
            <header>{name} {`$${price}`}</header>
            <p>Color: {color}</p>
            <p>Style: {style == 0 ? 'Low Top' : 'High Top'}</p>
            <p>Logo: {logo}</p>
            <p>Sole: {sole}</p>
            <p>Texture: {texture}</p>
            <a href={`/customshoes/${id}`} role='button'>View Details</a>
        </div>
    )
}