import shoeData from '../data/shoe.js';

export default function CustomizeOptions({ name, selected }){
console.log(selected)
    return(
        <div>
            <p>{name}</p>
            {
                shoeData[name].map((option, index) =>
                    <p key={index}>{option.name}</p>
                )     
            }
        </div>
    )
}