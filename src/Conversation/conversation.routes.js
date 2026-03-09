import { Router } from 'express';
import {
    getAllConversations,
    changeConversationStatus
} from './conversation.controller.js';

import {
    validateAdminDeleteConversation,
    validateAdminGetConversationById
} from '../../middlewares/conversation-validator.js';

const router = Router();

router.get('/',  getAllConversations);
router.get('/:id', validateAdminGetConversationById,  getAllConversations);
router.patch('/:id/status', validateAdminDeleteConversation, changeConversationStatus);

export default router;