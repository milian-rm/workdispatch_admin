import { Router } from 'express';
import {
    getAllConversations,
    deleteConversation
} from './conversation.admin.controller.js';

import {
    validateAdminDeleteConversation,
    validateAdminGetConversationById
} from '../../middlewares/conversation-validator.js';

const router = Router();

router.get('/', validateAdminGetConversationById,  getAllConversations);
router.delete('/:id', validateAdminDeleteConversation, deleteConversation);

export default router;