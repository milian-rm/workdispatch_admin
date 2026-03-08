'use strict';

import { check } from 'express-validator';
import { checkValidators } from '../middlewares/check.validators.js'; 

// podria incluir filtros para las validaciones
export const validateAdminList = [
    checkValidators
];