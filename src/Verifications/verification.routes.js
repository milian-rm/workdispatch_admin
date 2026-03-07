import { Router } from 'express';
import {
    getVerifications,
    updateVerification,
    updateVerificationStatus
} from './verification.controller.js';

const router = Router();

router.get('/', getVerifications);
router.put('/:id', updateVerification);
router.patch('/:id/status', updateVerificationStatus);

export default router;