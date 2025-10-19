import express from 'express';
import ItemController from '../controllers/items.js';

const router = express.Router();

router.get('/', ItemController.getItems);
router.get('/:itemId', ItemController.getItemById);
router.post('/', ItemController.createItem);
router.delete('/:itemId', ItemController.deleteItem);
router.patch('/:itemId', ItemController.updateItem);

export default router;