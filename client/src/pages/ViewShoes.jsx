import React, {useState, useEffect} from 'react'
import ShoesAPI from '../services/ShoesAPI'
import '../App.css'
import Item from '../components/Item';
import shoeData from '../data/shoe.js';

const ViewShoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() =>{
        (async ()=>{
            try{
                const shoesRes= await ShoesAPI.getAllShoes();
                setShoes(shoesRes);
            } catch (err){
                throw err;
            }
        })()
     }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'center', alignItems: 'center'}}>
            {
                shoes && shoes.length > 0 ? shoes.map((shoe, index) =>
                    <Item
                        key={shoe.id}
                        id={shoe.id}
                        name={shoe.name}
                        color={shoe.color}//shoeData.Color[shoe.color].name}
                        style={shoe.style}
                        logo={shoe.logo}
                        sole={shoe.sole}
                        texture={shoe.texture}
                        price={shoe.price}
                    />
                ) : <h2>No Shoes Created Yet!</h2>
            }  
        </div>
    )
}

export default ViewShoes;