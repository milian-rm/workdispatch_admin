'use strict';

import { Router } from 'express';
import { getUsers, login, changeUserStatus } from './user.controller.js';

const router = Router();

router.get('/', getUsers);
router.post('/login', login);
router.patch('/:id/status', changeUserStatus);

export default router;