'use strict';

import { Router } from 'express';
import { getAllPortfolios, moderateRecord } from './WorkerPortFolio.controller.js';
import { validatePortfolioId } from './workerPortfolio.validator.js';

const api = Router();

// Endpoint para ver todo el contenido de la plataforma
api.get('/', getAllPortfolios);

// Endpoint para moderación (Desactivar/Activar)
api.patch('/moderate/:id', [validatePortfolioId], moderateRecord);

export default api;