import { Router } from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    login,
    changeUserStatus
} from './user.controller.js';
import {
    validateAdminLogin,
    validateCreateUser,
    validateUpdateUser,
    validateUserIdParam,
    validateChangeUserStatus
} from '../../middlewares/user-validator.js';

import { uploadUserProfileImage } from '../../middlewares/file-uploader.js';


const router = Router();

router.get('/', getUsers);
router.get('/:id', validateUserIdParam, getUserById);

router.post('/', validateCreateUser, uploadUserProfileImage.single('profilePhoto'), createUser);
router.post('/login', validateAdminLogin, login);

router.put('/:id', validateUpdateUser, uploadUserProfileImage.single('profilePhoto'), updateUser);
router.patch('/:id/status', validateChangeUserStatus, changeUserStatus);

export default router;