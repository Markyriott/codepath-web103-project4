import React, {useState} from 'react'
import '../App.css'
import CustomizeOptions from '../components/CustomizeOptions';

const CreateShoe = () => {
    const [shoe, setShoe] = useState(
        { name: '', color: 'White', style: 0, logo: 0, sole: 0, texture: 0}
    );

    return (
        <div>
            <div className="sidebar">
               <CustomizeOptions name = 'Color' selected={shoe.color}/>
               <CustomizeOptions name = 'Style' selected={shoe.style}/>
               <CustomizeOptions name = 'Logo' selected={shoe.logo}/>
               <CustomizeOptions name = 'Sole' selected={shoe.sole}/>
               <CustomizeOptions name = 'Texture' selected={shoe.texture}/>
            </div>
        </div>
    )
}

export default CreateShoe