import { body, param } from 'express-validator';
import { checkValidators } from './check.validators.js';

const userRoles = ['CLIENT', 'WORKER', 'ADMIN'];

export const validateCreateUser = [

    body('firstName')
        .notEmpty().withMessage('Nombre es obligatorio'),

    body('lastName')
        .notEmpty().withMessage('Apellido es obligatorio'),

    body('email')
        .notEmpty().withMessage('Email es requerido')
        .isEmail().withMessage('Formato de email inválido'),

    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria'),

    body('phone')
        .notEmpty().withMessage('Teléfono es obligatorio'),

    body('role')
        .optional()
        .isIn(userRoles).withMessage('Rol inválido'),

    body('profilePhoto')
        .optional(),

    body('description')
        .optional(),

    body('ratingAverage')
        .optional()
        .isFloat({ min: 1, max: 5 }).withMessage('El rating average debe estar entre 1 y 5'),

    body('verificationStatus')
        .optional()
        .isBoolean().withMessage('VerificationStatus debe ser booleano'),

    body('latitude')
        .optional()
        .isFloat().withMessage('Latitud debe ser numérica'),

    body('longitude')
        .optional()
        .isFloat().withMessage('Longitud debe ser numérica'),

    body('address')
        .optional(),

    body('active')
        .optional()
        .isBoolean().withMessage('Active debe ser booleano'),

    checkValidators
];

export const validateUpdateUser = [

    param('id')
        .isMongoId().withMessage('ID User inválido'),

    body('firstName')
        .optional(),

    body('lastName')
        .optional(),

    body('email')
        .optional()
        .isEmail().withMessage('Formato de email inválido'),

    body('password')
        .optional(),

    body('phone')
        .optional(),

    body('role')
        .optional()
        .isIn(userRoles).withMessage('Rol inválido'),

    body('profilePhoto')
        .optional(),

    body('description')
        .optional(),

    body('ratingAverage')
        .optional()
        .isFloat({ min: 1, max: 5 }).withMessage('El rating average debe estar entre 1 y 5'),

    body('verificationStatus')
        .optional()
        .isBoolean().withMessage('VerificationStatus debe ser booleano'),

    body('latitude')
        .optional()
        .isFloat().withMessage('Latitud debe ser numérica'),

    body('longitude')
        .optional()
        .isFloat().withMessage('Longitud debe ser numérica'),

    body('address')
        .optional(),

    body('active')
        .optional()
        .isBoolean().withMessage('Active debe ser booleano'),

    checkValidators
];

export const validateUserIdParam = [
    param('id')
        .isMongoId().withMessage('ID User inválido'),
    checkValidators
];

export const validateAdminLogin = [

    body('email')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('Formato de correo inválido')
        .normalizeEmail(),

    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isString().withMessage('La contraseña debe ser texto'),

    checkValidators
];

export const validateChangeUserStatus = [

    param('id')
        .isMongoId().withMessage('ID de usuario inválido'),

    checkValidators
];