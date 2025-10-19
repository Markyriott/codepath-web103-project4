import { pool } from './database.js';
import itemData from '../data/item.js';

const createTables = async() => {
    await pool.query(`DROP TABLE IF EXISTS shoes;`);
    
    const createShoesTableQuery = `
        CREATE TABLE IF NOT EXISTS shoes(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        color VARCHAR(7) NOT NULL,
        style INTEGER NOT NULL,
        logo INTEGER NOT NULL,
        sole INTEGER NOT NULL,
        texture INTEGER NOT NULL,
        price INTEGER NOT NULL
        );
    `
    try{
        await pool.query(createShoesTableQuery);
        console.log('shoes table created successfully');
    } catch(error){
        console.error('error creating table', error);
    }
}

const seedTables = async() =>{
    await createTables();
    itemData.forEach((shoe) =>{
        const insertQuery = {
            text : 'INSERT INTO shoes (name, color, style, logo, sole, texture, price) VALUES ($1, $2, $3, $4, $5, $6, $7);'
        };

        const values = [
            shoe.name,
            shoe.color,
            shoe.style,
            shoe.logo,
            shoe.sole,
            shoe.texture,
            shoe.price
        ];

        pool.query(insertQuery, values, (err, res)=>{
            if (err){
                console.error('error inserting shoe', err);
                return;
            }
            console.log('Successfully added shoe', shoe.name);
        })
    })
}

seedTables();