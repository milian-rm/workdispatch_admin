import { Router } from 'express';
import { createNotification, editNotification } from './notification.controller.js';
import { createNotificationValidator, editNotificationValidator } from '../../middlewares/notification-validator.js';

const router = Router();

router.post(
    '/', 
    createNotificationValidator, 
    createNotification
);

router.put(
    '/:id',
    editNotificationValidator, 
    editNotification
);

export default router;