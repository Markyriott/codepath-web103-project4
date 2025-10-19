import { pool } from "../config/database.js";

const getItems = async (req, res) =>{
    try{
        const results = await pool.query(`SELECT * FROM shoes ORDER BY id ASC`);
        res.status(200).json(results.rows);
    }catch(err){
        res.status(409).json({ error: err.message});
    }
}

const getItemById = async (req, res) => {
    const id = parseInt(req.paramas.itemId);
    try{
        const results = await poolquery(`SELECT * FROM shoes WHERE id = $1`, [id])
        res.status(200).json(results.rows[0]);
    } catch(err){
        res.status(409).json({error: err.message});
    }
}

const createItem = async (req, res) =>{
    try{
        const { name, color, style, logo, sole, texture} = req.body;
        const results = await pool.query(`
            INSERT INTO shoes (name, color, style, logo, sole, texture, price)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [name, color, style, logo, sole, texture, price]
        );

        res.status(201).json(results.rows[0]);
    } catch (err){
        res.status(409).json({error: err.message});
    }
}

const updateItem = async (req, res) =>{
    try{
        const id = parseInt(req.params.itemId);
        const {name, color, style, logo, sole, texture} = req.body;
        const results = await pool.query(`
            UPDATE shoes SET name = $1, color = $2, style = $3, logo = $4, sole = $5, texture = $6, price = $7 WHERE id = $8`,
            [name, color, style, logo, sole, texture, price, id]
        );
        res.status(200).json(results.rows[0]);
    } catch(err){
        res.status(409).json({ error: err.message });
    }
}

const deleteItem = async (req, res) =>{
    try{
        const id = parseInt(req.params.itemId);
        const results = await pool.query('DELETE FROM shoes WHERE id = $1', [id]);
        res.status(200).json(results.rows[0]);
    } catch (err){
        res.status(409).json({error: err.message});
    }
}

export default { getItems, getItemById, createItem, updateItem, deleteItem};