import { Router } from 'express';
import { getAllRequestsAdmin, deleteRequestAdmin } from './serviceRequest.controller.js';
import { validateJWT, isAdmin } from '../../middlewares/validate-jwt.js';
import { validateServiceRequestId } from '../../middlewares/serviceRequest-validator.js';

const router = Router();

//  Rutas protegidas para ADMIN
router.get('/', [validateJWT, isAdmin], getAllRequestsAdmin);
router.delete('/:id', [validateJWT, isAdmin, validateServiceRequestId], deleteRequestAdmin);

export default router;