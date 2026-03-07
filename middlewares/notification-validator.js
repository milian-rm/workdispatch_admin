import { body, param } from 'express-validator';
import { checkValidators } from './check.validators.js'; 

export const createNotificationValidator = [
    body('userId', 'El ID del usuario destinatario es obligatorio y debe ser un MongoID válido').isMongoId(),
    body('Message', 'El mensaje no puede estar vacío').notEmpty(),
    body('Type', 'El tipo de notificación es obligatorio').notEmpty(),
    checkValidators
];

export const editNotificationValidator = [
    param('id', 'El ID de la notificación debe ser un MongoID válido').isMongoId(),
    body('Message', 'El mensaje no puede estar vacío').optional().notEmpty(),
    body('Type', 'El tipo de notificación no puede estar vacío').optional().notEmpty(),
    checkValidators
];