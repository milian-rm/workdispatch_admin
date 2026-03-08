import { Router } from 'express';
import {
    getVerifications,
    updateVerification,
    updateVerificationStatus
} from './verification.controller.js';

import {
    validateUpdateVerification,
    validateUpdateVerificationStatus
} from '../../middlewares/verifications-validator.js';

const router = Router();

router.get('/', getVerifications);
router.put('/:id', validateUpdateVerification, updateVerification);
router.patch('/:id/status', validateUpdateVerificationStatus, updateVerificationStatus);

export default router;