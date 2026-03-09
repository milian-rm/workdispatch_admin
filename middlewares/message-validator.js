import { param } from 'express-validator';
import { checkValidators } from './check.validators.js';

export const validateAdminDeleteMessage = [

    param('id')
        .isMongoId().withMessage('ID de mensaje inválido'),

    checkValidators
];

export const validateAdminGetMessagesByConversation = [

    param('conversationId')
        .isMongoId().withMessage('ConversationId inválido'),

    checkValidators
];