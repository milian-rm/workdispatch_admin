import { Router } from 'express';
import { getAllRequestsAdmin, deleteRequestAdmin } from './serviceRequest.controller.js';
import { validateServiceRequestId } from '../../middlewares/serviceRequest-validator.js';

const router = Router();

//  Rutas protegidas para ADMIN
router.get('/', getAllRequestsAdmin);
router.delete('/:id', validateServiceRequestId, deleteRequestAdmin);

export default router;