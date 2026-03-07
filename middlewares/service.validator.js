'use strict';

import { check } from 'express-validator';
import { checkValidators } from '../middlewares/check.validators.js'; 

export const validateAdminList = [
    checkValidators
];