'use strict';
import { param } from 'express-validator';
import { checkValidators } from './check.validators.js';

export const validateProposalId = [
    param('id').isMongoId().withMessage('ID de propuesta no válido'),
    checkValidators
];