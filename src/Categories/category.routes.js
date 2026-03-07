import { Router } from 'express';
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    changeCategoryStatus
} from './category.controller.js';

const router = Router();

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id' , updateCategory);
router.patch('/:id/status', changeCategoryStatus);

export default router;