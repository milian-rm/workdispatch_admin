import { Router } from 'express';
import { getAllReports, resolveReport } from './report.controller.js';
import { resolveReportValidator } from '../../middlewares/report-validator.js';

const router = Router();

router.get(
    '/', 
    getAllReports
);
router.patch(
    '/resolve/:id', 
    resolveReportValidator, 
    resolveReport
);

export default router;