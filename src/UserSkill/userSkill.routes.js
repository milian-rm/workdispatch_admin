
import { Router } from 'express';
import { getAllUserSkillsAdmin } from './userSkill.controller.js';

const router = Router();

// Ver todas las habilidades vinculadas a usuarios

router.get('/', getAllUserSkillsAdmin);

export default router;