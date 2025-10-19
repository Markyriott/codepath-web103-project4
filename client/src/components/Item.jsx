
export default function Item({ name, color, style, logo, sole, texture, price}){
    return(
        <div className="item">
            <p>{name} {`$${price}`}</p>
        </div>
    )
}