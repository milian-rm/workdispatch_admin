'use strict';

import { Router } from 'express';
import { getAllPortfolios, moderateRecord } from './WorkerPortFolio.controller.js';
import { validatePortfolioId } from '../../middlewares/workerPortFolio.validator.js';

const api = Router();

// ver todo
api.get('/', getAllPortfolios);

// Endpoint para moderación (Desactivar/Activar)
api.patch('/moderate/:id', [validatePortfolioId], moderateRecord);

export default api;