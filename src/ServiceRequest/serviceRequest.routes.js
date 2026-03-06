
import { Router } from 'express';
import { getAllRequestsAdmin, deleteRequestAdmin } from './serviceRequest.controller.js';
import { validateJWT, isAdmin } from '../../middlewares/validate-jwt.js';

const router = Router();

router.get('/', [validateJWT, isAdmin], getAllRequestsAdmin);
router.delete('/:id', [validateJWT, isAdmin], deleteRequestAdmin);

export default router;