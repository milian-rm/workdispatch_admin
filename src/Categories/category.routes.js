import { Router } from 'express';
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    changeCategoryStatus
} from './category.controller.js';
import {
    validateCreateCategory,
    validateUpdateCategory,
    validateCategoryIdParam,
    validateChangeCategoryStatus
} from '../../middlewares/category-validator.js';

const router = Router();

router.get('/', getCategories);
router.get('/:id', validateCategoryIdParam, getCategoryById);
router.post('/', validateCreateCategory, createCategory);
router.put('/:id', validateUpdateCategory, updateCategory);
router.patch('/:id/status', validateChangeCategoryStatus, changeCategoryStatus);

export default router;