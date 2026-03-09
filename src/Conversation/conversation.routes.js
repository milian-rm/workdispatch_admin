import { Router } from 'express';
import {
    getAllConversations,
    deleteConversation
} from './conversation.admin.controller.js';

const router = Router();

router.get('/', getAllConversations);
router.delete('/:id', deleteConversation);

export default router;