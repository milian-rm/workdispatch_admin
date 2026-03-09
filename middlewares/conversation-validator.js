import { param } from 'express-validator';
import { checkValidators } from './check.validators.js';

export const validateAdminGetConversationById = [

    param('id')
        .isMongoId().withMessage('ID de conversación inválido'),

    checkValidators
];

export const validateAdminDeleteConversation = [

    param('id')
        .isMongoId().withMessage('ID de conversación inválido'),

    checkValidators
];