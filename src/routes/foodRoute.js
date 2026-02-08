import express from 'express';
import * as foodController from '../controllers/foodController.js';

const router = express.Router();

router.get('/food', foodController.getAll);
router.get('/:id', foodController.getById);
router.post('/', foodController.create);
router.put('/:id', foodController.update);
router.delete('/:id', foodController.remove);

export default router;
