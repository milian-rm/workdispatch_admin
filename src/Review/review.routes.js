'use strict';

import { Router } from 'express';
import { getAllReviews, deleteOffensiveReview } from './review.controller.js';

const router = Router();

router.get(
    '/', 
    getAllReviews
);

router.delete(
    '/:id', 
    deleteOffensiveReview
);

export default router;