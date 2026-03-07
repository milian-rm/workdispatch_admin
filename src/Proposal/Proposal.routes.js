'use strict';

import { Router } from 'express';
import { getAllProposals, deactivateProposal } from './Proposal.controller.js';
import { validateProposalId } from '../../middlewares/proposal.validator.js';

const api = Router();

// ver todo
api.get('/', getAllProposals);

// eliminar propuestas sospechosas
api.patch('/:id', [validateProposalId], deactivateProposal);

export default api;