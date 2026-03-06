'use strict';

import { Router } from 'express';
import { getAllProposals, deleteProposal } from './Proposal.controller.js';
import { validateProposalId } from './proposal.validator.js';

const api = Router();

// ver todo
api.get('/', getAllProposals);

// eliminar propuestas sospechosas
api.delete('/remove/:id', [validateProposalId], deleteProposal);

export default api;