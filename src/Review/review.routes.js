import { Router } from 'express';
import { getAllReviews, deleteOffensiveReview } from './review.controller.js';
import { deleteReviewValidator } from '../../middlewares/review-validator.js';

const router = Router();

router.get(
    '/', 
    getAllReviews
); 

router.delete(
    '/:id',
    deleteReviewValidator, 
    deleteOffensiveReview
);

export default router;