import React, { useState, useEffect } from 'react'
import '../App.css'
import ShoesAPI from '../services/ShoesAPI';
import shoeData from '../data/shoe.js';

import lowtopImg from '../assets/lowtop.jpg';
import hightopImg from '../assets/hightop.jpg';
const ShoeDetails = () => {
    const [shoe, setShoe] = useState(null);
    const id = window.location.pathname.split('/').pop();

    useEffect(() => {
        (async () => {
            try {
                const result = await ShoesAPI.getShoeById(id);
                setShoe(result);
            } catch (err) {
                throw err;
            }
        })()
    }, []);

    const handleDelete = async () => {
        await ShoesAPI.deleteShoe(id);
        window.location.href = '/customshoes';
    }

    if (!shoe) {
        return <h2>Loading...</h2>
    }

    return (
        <main style={{ justifyContent: 'center', gap: '2rem', backgroundColor:'rgba(0,0,0,0.3)' }}>
            <div className="item-display">
                <h2>Viewing Shoe: {shoe.name}</h2>
                <div className="shoe-display" style={{display: 'flex', gap: '1rem', flexDirection: 'row', alignItems: 'center'}}>
                    <img
                        width={250}
                        height={250}
                        src={shoe.style == 0 ? lowtopImg : hightopImg} 
                        alt="Shoe Image" 
                    />
                    <div style={{backgound:'rgba(0,0,0,0.8)'}}>
                        <p>Color: {shoeData.Color[shoe.color].name}</p>
                        <p>Style: {shoeData.Style[shoe.style].name}</p>
                        <p>Logo: {shoeData.Logo[shoe.logo].name}</p>
                        <p>Sole: {shoeData.Sole[shoe.sole].name} </p>
                        <p>Texture: {shoeData.Texture[shoe.texture].name}</p>
                    </div>
                </div>
                <label style={{background: 'black', color: 'white'}}>Total Price: {shoe.price} </label>
                <a role='button' href={`/edit/${shoe.id}`}>EDIT</a>
                <a role='button' onClick={handleDelete}>DELETE</a>
            </div>
        </main>
    )
}

export default ShoeDetails