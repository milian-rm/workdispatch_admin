import { param } from 'express-validator';
import { checkValidators } from './check.validators.js'; 

export const resolveReportValidator = [
    param('id', 'El ID del reporte debe ser un MongoID válido').isMongoId(),
    checkValidators
];