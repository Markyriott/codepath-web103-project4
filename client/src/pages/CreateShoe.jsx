import React, {useState} from 'react'
import '../App.css'
import CustomizeOptions from '../components/CustomizeOptions';
import shoeData from '../data/shoe';
import shoeUtils from '../utils/ItemUtils';
import ShoesAPI from '../services/ShoesAPI';
import lowtopImg from '../assets/lowtop.jpg';
import hightopImg from '../assets/hightop.jpg';
const CreateShoe = () => {
    const [shoe, setShoe] = useState(
        { name: '', color: 0, style: 0, logo: 0, sole: 0, texture: 0, price: 40}
    );

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === 'logo' && shoe.style === 0){
            alert('Logos are not available for Low Top style shoes.');
            return;
        }

        const newPrice = shoeUtils.calculateShoePrice(shoe);
        const { name, value } = e.target;
        setShoe({ ...shoe, [name]: value, price: newPrice });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!shoe.name) {
            alert('Please enter a name for your shoe.');
            return;
        }

        const cleanedShoe = {
            ...shoe,
            color: parseInt(shoe.color),
        };

        console.log(shoe);
        await ShoesAPI.createShoe(cleanedShoe);
        window.location.href = '/customshoes';
    }

    return (
        <main style={{ justifyContent: 'center', gap: '2rem', backgroundColor:'rgba(0,0,0,0.3)' }}>
            <div className="item-display">
                <h2>{shoe.name || 'Customize Your Shoe'}</h2>
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
               <button type='submit' onClick={handleSubmit}>SUBMIT</button>
            </div>
            <div className="sidebar" style={{}}>
                <input 
                    type="text" 
                    placeholder="Enter Shoe Name" 
                    value={shoe.name} 
                    required
                    onChange={(e) => setShoe({...shoe, name: e.target.value})} 
                />

               <CustomizeOptions name = 'Color' handleClick={handleChange}/>
               <CustomizeOptions name = 'Style' handleClick={handleChange}/>
               <CustomizeOptions name = 'Logo' handleClick={handleChange}/>
               <CustomizeOptions name = 'Sole' handleClick={handleChange}/>
               <CustomizeOptions name = 'Texture' handleClick={handleChange}/>
            </div>
        </main>
    )
}

export default CreateShoe;