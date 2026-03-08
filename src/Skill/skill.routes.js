
import { Router } from 'express';
import { createSkill, updateSkill, deactivateSkill, getAllSkillsAdmin } from './skill.controller.js';
import { validateCreateSkill, validateSkillId } from '../../middlewares/skill-validator.js';

const router = Router();

// Todas las rutas de Admin requieren Token y Rol de Admin
router.post('/', validateCreateSkill, createSkill);
router.put('/:id', validateSkillId, validateCreateSkill, updateSkill);
router.patch('/:id', validateSkillId, deactivateSkill);
router.get('/', getAllSkillsAdmin);

export default router;