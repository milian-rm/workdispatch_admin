import { Router } from 'express';
import { getAllServices } from './Service.controllerjs';

const api = Router();
api.get('/', getAllServices);

export default api;