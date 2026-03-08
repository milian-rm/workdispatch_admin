import { body, param } from 'express-validator';
import { checkValidators } from './check.validators.js';

export const validateCreateCategory = [

    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser texto'),

    body('description')
        .notEmpty().withMessage('La descripción es obligatoria')
        .isString().withMessage('La descripción debe ser texto'),

    checkValidators
];

export const validateUpdateCategory = [

    param('id')
        .isMongoId().withMessage('ID de categoría inválido'),

    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser texto'),

    body('description')
        .optional()
        .isString().withMessage('La descripción debe ser texto'),

    checkValidators
];

export const validateCategoryIdParam = [
    param('id')
        .isMongoId().withMessage('ID de categoría inválido'),
    checkValidators
];

export const validateChangeCategoryStatus = [
    param('id')
        .isMongoId().withMessage('ID de categoría inválido'),
    checkValidators
];