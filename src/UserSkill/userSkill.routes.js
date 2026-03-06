
import { Router } from 'express';
import { getAllUserSkillsAdmin } from './userSkill.controller.js';
import { validateJWT, isAdmin } from '../../middlewares/validate-jwt.js';

const router = Router();

router.get('/', [validateJWT, isAdmin], getAllUserSkillsAdmin);

export default router;