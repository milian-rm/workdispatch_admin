import { param } from 'express-validator';
import { checkValidators } from './check.validators.js'; 

export const deleteReviewValidator = [
    param('id', 'El ID de la review es obligatorio y debe ser un MongoID válido').isMongoId(),
    checkValidators
];