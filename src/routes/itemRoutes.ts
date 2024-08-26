import { Router } from 'express';
import { createItem, getItems } from '../controllers/itemController';

const router = Router();

router.post('/items', createItem);
router.get('/items', getItems);

export default router;
