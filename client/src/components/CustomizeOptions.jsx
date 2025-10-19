import shoeData from '../data/shoe.js';

export default function CustomizeOptions({ name, handleClick}) {
    return(
        <div>
            <header>
                <h3>{name}</h3>
            </header>
            {
                shoeData[name].map((option, index) =>
                    <button key={index} value={index} name={name.toLowerCase()}onClick={handleClick}>{option.name}</button>
                )     
            }
        </div>
    )
}