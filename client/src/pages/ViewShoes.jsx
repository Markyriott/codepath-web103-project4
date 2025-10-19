import React, {useState, useEffect} from 'react'
import ShoesAPI from '../services/ShoesAPI'
import '../App.css'
import Item from '../components/Item';

const ViewShoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() =>{
        (async ()=>{
            try{
                const shoesData = await ShoesAPI.getAllShoes();
                setShoes(shoesData);
            } catch (err){
                throw err;
            }
        })()
     }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {
                shoes && shoes.length > 0 ? shoes.map((shoe, index) =>
                    <Item
                        key={shoe.id}
                        name={shoe.name}
                        color={shoe.color}
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