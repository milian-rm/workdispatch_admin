import { Router } from 'express';
import { getAllServices } from './Service.controller.js';
import { validateAdminList } from '../../middlewares/service.validator.js';

const api = Router();
api.get('/', validateAdminList, getAllServices);

export default api;